/* =========================================================
 *  Works · Scrapbook Flip Book controller · v20260903b
 *  依赖：St.PageFlip (js/page-flip.js) + 全局 projects / openModal (js/main.js)
 * ========================================================= */
(function () {
  "use strict";

  var bookEl = document.getElementById("book");
  if (!bookEl) return;
  if (typeof St === "undefined" || !St.PageFlip) {
    console.error("[works-flip] St.PageFlip 未加载");
    return;
  }

  var flip = new St.PageFlip(bookEl, {
    width: 560,
    height: 720,
    size: "fixed",
    drawShadow: true,
    flippingTime: 900,
    maxShadowOpacity: 0.5,
    showCover: false,
    usePortrait: false,
    startPage: 0,
    autoSize: false,
    mobileScrollSupport: true,
    swipeDistance: 28,
    disableFlipByClick: false   // 允许点页面空白处翻页（点宝丽来则拦截，打开弹窗）
  });

  var pages = Array.prototype.slice.call(bookEl.querySelectorAll(".page"));
  flip.loadFromHTML(pages);

  var dots = Array.prototype.slice.call(document.querySelectorAll(".pi-dot"));
  var piNum = document.querySelector(".pi-num");
  var hint = document.querySelector(".flip-hint");
  var arrowPrev = document.querySelector(".nav-arrow.prev");
  var arrowNext = document.querySelector(".nav-arrow.next");
  var SPREADS = pages.length / 2;

  /* 自适应：让 .book-stage 的 layout 尺寸 = 视觉缩放后尺寸，#book 内部 layout 保持 1120×720
     用 transform: scale 等比缩放居顶，bookStage 居中于页面。scrappage 高度紧凑无大留白。 */
  var BOOK_W = 1120, BOOK_H = 720;
  var stageEl = bookEl.parentElement;
  var hintEl = document.querySelector(".flip-hint");
  function fitBook() {
    var vw = document.documentElement.clientWidth || 1280;
    var s = Math.min(1, Math.max(0.26, (vw - 24) / BOOK_W));
    var vwPx = Math.round(BOOK_W * s);
    var vhPx = Math.round(BOOK_H * s);
    stageEl.style.width = vwPx + "px";
    stageEl.style.height = vhPx + "px";
    bookEl.style.transform = "scale(" + s + ")";
    if (hintEl) hintEl.style.marginTop = (vhPx + 12) + "px";
    return s;
  }
  var curScale = fitBook();
  window.addEventListener("resize", function () {
    curScale = fitBook();
    try { if (flip && typeof flip.update === "function") flip.update(); } catch (e) {}
  });
  window.addEventListener("orientationchange", function () { curScale = fitBook(); });

  function spreadOf() {
    var idx = flip.getCurrentPageIndex();      // 左页索引：0,2,4...
    return Math.max(0, Math.floor(idx / 2));
  }

  function updateUI() {
    var s = spreadOf();
    dots.forEach(function (d, i) { d.classList.toggle("active", i === s); });
    if (piNum) piNum.textContent = (s + 1) + " / " + SPREADS;
    if (arrowPrev) arrowPrev.disabled = (s <= 0);
    if (arrowNext) arrowNext.disabled = (s >= SPREADS - 1);
  }

  var autoTimer = null;
  var AUTO_MS = 5000;

  function setHint(t) { if (hint) hint.textContent = t; }

  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () {
      try {
        if (flip.getCurrentPageIndex() >= pages.length - 2) flip.flip(0);  // 循环回首页
        else flip.flipNext();
      } catch (e) {
        // 翻页动画尚在进行或书未就绪时跳过本次，下一拍再试，避免整段定时器崩掉
        console.warn("[works-flip] flip skipped:", e && e.message);
      }
    }, AUTO_MS);
    setHint("自动翻页中 · 点作品看详情 · 点页面翻页 · 5 秒／页");
  }

  function pauseAuto() {
    stopAuto();
    setHint("已暂停自动翻页 · 点作品看详情 · 点箭头或圆点可继续切换");
  }

  flip.on("flip", updateUI);
  flip.on("changeState", updateUI);

  if (arrowPrev) arrowPrev.addEventListener("click", function () { pauseAuto(); flip.flipPrev(); });
  if (arrowNext) arrowNext.addEventListener("click", function () { pauseAuto(); flip.flipNext(); });
  dots.forEach(function (d, i) {
    d.addEventListener("click", function () { pauseAuto(); flip.flip(i * 2); });
  });

  /* 宝丽来点击 → 复用现有项目弹窗 / 外链
   * 用捕获阶段监听，先于翻页库（翻页库在 page 元素上冒泡监听）拿到事件，
   * 命中宝丽来则 stopPropagation，避免被翻页库当成“点页面翻页”吃掉。 */
  function onPolaroid(ev) {
    var t = ev.target;
    var po = (t && t.closest) ? t.closest(".polaroid.wc-item") : null;
    if (!po) return;                 // 非宝丽来 → 交给翻页库（点空白处翻页）
    ev.stopPropagation();
    if (ev.type === "click") {
      if (ev.preventDefault) ev.preventDefault();
      pauseAuto();
      if (po.dataset.link) {
        window.open(po.dataset.link, "_blank", "noopener");
      } else if (po.dataset.id) {
        // 注意：main.js 中 projects 用 const 声明，是全局词法绑定而非 window 属性
        var list = (typeof projects !== "undefined") ? projects : [];
        var p = null;
        for (var k = 0; k < list.length; k++) { if (list[k].id === po.dataset.id) { p = list[k]; break; } }
        if (p && typeof openModal === "function") openModal(p);
      }
    }
    /* mousedown / pointerdown 阶段也拦截，阻止翻页库从宝丽来上发起拖拽翻页 */
  }
  bookEl.addEventListener("mousedown", onPolaroid, true);
  bookEl.addEventListener("pointerdown", onPolaroid, true);
  bookEl.addEventListener("click", onPolaroid, true);

  updateUI();

  // 自动翻页：等翻页书渲染就绪后再启动，避免首屏未就绪导致首拍翻不动
  flip.on("init", function () { startAuto(); });
  // 兜底：部分环境下 init 事件可能已错过，延迟 600ms 再确保启动一次
  setTimeout(startAuto, 600);

  /* 切到后台暂停，回来再启动（省资源） */
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopAuto();
    else if (!autoTimer) startAuto();
  });
})();
