/* ============================================================
   曾玲 · 个人网页 · 个人作品集
   ★ 替换指南：所有内容集中在 projects 数组 + resume 数据
   ============================================================ */

const projects = [
  {
    id: "shengongbao",
    title: "《申公豹之玉虚风云》心理剧",
    cat: "creative",
    catName: "创作 CREATIVE",
    year: "2025",
    award: "市二等奖 · 校一等奖",
    role: "编剧 · 主演 · 海报设计",
    team: "曾玲、王婷、吴晓玉",
    img: "img/proj-shengongbao.jpg",
    brief: "原创剧本 + 主演 + AI 创意海报。借中国古代神话\"玉虚宫\"隐喻当代大学校园，让申公豹的成长故事折射 AI 时代大学生的自卑、社交焦虑与自我接纳。",
    values: [
      { k: "共情", en: "EMPATHY" },
      { k: "创意", en: "STORYTELLING" },
      { k: "思辨", en: "CRITIQUE" }
    ],
    story: "申公豹是带着口吃、贫寒出身、渴望被认可的大一新生。他向 AI 心理助手\"灵智镜\"求助——它只会说\"忽略负面反馈\"\"专注于自我提升\"。讽刺的是：AI 给出的建议本身就是问题的一部分。我们用\"太乙\"\"哪吒\"\"长老\"代表真实人际中的善意，把疗愈放回人与人之间。剧本由我与两位伙伴共同创作，我从角色设计到对白反复打磨，并独立完成主视觉海报——画面中申公豹背影走向燃烧的命途，背后 AI 镜中却写着\"忽略负面评价\"，这是我们对 AI 心理助手的批判性思考。",
    archive: {
      synopsis: {
        lead: "下面是报送参赛时随剧本提交的原始材料，按「剧本—角色—结构—物料—现场—获奖」重新整理了一遍。",
        paras: [
          "在仙门圣地玉虚宫，出身贫寒、天生口吃的弟子申公豹怀揣家族的期望踏入修行之路，却因自卑与天赋不足陷入深深的自我怀疑。面对同门的嘲笑、严苛的修炼压力、前途的迷茫和家人的期望带来的压力，他只能依赖冰冷的「灵智镜」（AI 法器）寻求慰藉，可算法给出的答案始终无法化解他内心的迷茫与孤独。",
          "然而转机悄然降临——温和的师兄太乙以倾听化解他的尴尬、给予他鼓励和陪伴；严厉却慈心的执事长老点破修行的真谛、给予他建议；而叛逆不羁的哪吒更用一场「解压社团」的行动，让他学会直面自己的缺陷和正确看待家人的期望。而当申公豹发现曾羞辱他的无量竟因压力铤而走险时，他选择伸出援手，最终明白：真正的成功并非成为他人眼中的「十二金仙」，而是在混沌的修行路上，学会接纳不完美的自己，并以温度照亮他人的黑暗。",
          "这是一部关于「缺陷」如何成为生命纹路的神话新编。告诉大家当人工智能的理性解答撞上人心的复杂沟壑时，唯有真实的羁绊与自我和解，才能让迷途者找到属于自己的「答案」。"
        ]
      },
      theme: {
        lead: "这个剧本真正想讨论的不是「口吃少年逆袭」，而是一个更尖锐的问题：当 AI 随时能给标准答案时，人心里那些说不清的痛，还能被接住吗？",
        theme: "《申公豹之玉虚风云》通过申公豹的成长故事，展现了当代受人工智能深刻影响的大学生在校园中的心理问题及其解决过程。申公豹在朋友和导师的帮助下逐渐从自卑敏感的困境中走出来，成功找到属于自己的道路，实现自我成长。真正的疗愈不是修正人生轨迹的偏差值，而是在混沌算法的暴雨里，学会掌握那些带着温度的命运纹路。",
        background: "剧本以中国古代神话中的「玉虚宫」隐喻大学，申公豹是新入门的弟子（大一新生），面对自卑、人际紧张、学业压力三重困境。他反复向「灵智镜」（AI 心理助手）求助却依旧消沉，直到师兄太乙（好朋友）、执事长老（老师）、哪吒（朋辈）先后出现，才把他拉出黑暗，逐渐学会接纳自我、克服心理障碍。"
      },
      cast: [
        { n: "申公豹", tag: "主角 · 大一新生", d: "玉虚宫新入门弟子，出身贫寒、自尊心强、口吃，内心敏感，学业努力但天赋一般，渴望被认可。", note: "全剧的情绪主体。写他时我参考了真实大一新生的「期望落差」——不是不够好，是参照系突然变了。" },
        { n: "太乙", tag: "师兄 · 朋辈支持", d: "性格温和，善于倾听，是申公豹第一个敢信任的人。", note: "不评判、只陪伴。他的作用是接住情绪，而不是解决问题。" },
        { n: "无量", tag: "师兄 · 反派", d: "傲慢自负，喜欢嘲笑申公豹的口吃，表面强势实则也有自己的烦恼。", note: "反派也是患者。后期他因考核压力铤而走险，让「加害者」转身成为被帮助的对象——这是我设计他时最想表达的一层。" },
        { n: "执事长老", tag: "老师 · 权威引导", d: "严肃但内心温暖，负责管理弟子，试图帮助申公豹融入师门。", note: "整个支持系统的「转介者」。关键一幕是他亲口承认灵智镜解不了心结，把申公豹推向真实的人。" },
        { n: "哪吒", tag: "朋辈 · 解压社团", d: "性格直率内心细腻，用自己的方式化解他人烦恼。", note: "朋辈疗愈的核心。他以「魔童」经历共情，不劝解、不灌鸡汤，只说一句：我可以听你说。" },
        { n: "师兄甲、乙", tag: "群像 · 旁观者", d: "普通弟子，对申公豹的态度从冷漠到逐渐理解。", note: "代表可被改变的舆论环境。没有台词担当，但他们的转向就是环境疗愈的完成。" },
        { n: "灵智镜", tag: "AI 法器 · 批判对象", d: "玉虚宫人手一个的学习法器，能答法术口诀，也能答心理烦恼，但只能提供表面安慰。", note: "全剧的靶子。理性、正确、永远礼貌——却接不住真实情绪。它每次都说「很荣幸能够帮到您」，申公豹每次都道谢，然后继续迷茫。" }
      ],
      acts: {
        lead: "全剧 12 幕，走的是心理剧常见的「困境—转折—和解」三段式：前五幕把压力一层层叠上去，中间三幕搭起支持系统，后四幕完成自我接纳。",
        list: [
          { no: "01", t: "初入玉虚宫", d: "申公豹背着简陋行囊入学，因口吃与寒酸被无量当众羞辱，师兄太乙替他解围。" },
          { no: "02", t: "修炼场上的嘲笑", d: "课上答不出法术原理被哄笑，太乙低声安慰「你只是紧张而已」。" },
          { no: "03", t: "深夜的静思", d: "首次向灵智镜倾诉，AI 给出标准建议，他道谢之后依旧迷茫。" },
          { no: "04", t: "天赋不足的自卑", d: "苦练仍落后，无量讥讽「天赋不是努力能补的」，AI 的深呼吸练习也没用。" },
          { no: "05", t: "冲突爆发", d: "膳堂撞到无量，羞辱升级为动手，被太乙拦下。" },
          { no: "06", t: "执事长老的话", d: "长老点破「修行是超越昨天的自己」，承认灵智镜解不了心结，推荐他去解压社团。" },
          { no: "07", t: "与哪吒之会", d: "哪吒以「魔童」经历共情，不急着给答案，只说：我可以听你说。" },
          { no: "08", t: "心结", d: "心态刚松动，父亲家书寄来「成为十二金仙、光宗耀祖」，刚松开的结又拧紧。" },
          { no: "09", t: "再次与灵智镜对话", d: "AI 建议与家人沟通，他欲言又止：算了没事了，谢谢你。" },
          { no: "10", t: "再会哪吒", d: "哪吒点破「真正的失望是自己放弃自己」，劝他和父亲认真谈一次。" },
          { no: "11", t: "朋友", d: "撞见无量偷窃秘籍，选择拉他一把：除了竞争，更应该有携手并进的朋友。太乙惊呼「你不口吃了！」" },
          { no: "12", t: "十二金仙", d: "三人共担后果，长老宽宥。结尾评选取消，哪吒留下一句「你是谁只有你自己说了才算」。" }
        ]
      },
      promo: {
        lead: "主视觉海报由我独立设计，画面把申公豹的困境和一个「最理性的工具给出最正确的废话」的命题叠在一起——这也是整部剧想抛给观众的问题。",
        poster: "img/works/sgb/sgb-poster.jpg",
        posterNote: "主视觉：申公豹的背影走向燃烧的命途，身后 AI 镜面里写着「忽略负面评价」。我想让这张海报自己提出问题——当最理性的工具给出最正确的废话，人要往哪儿走？",
        copy: "面对来自家人和师长们的期望，你是否也会倍感压力？面对他人的嘲笑和轻视，你是否也会自卑犹豫？当陷入世俗的茧房中无法走出时，或许可以向外寻求帮助。《申公豹之玉虚风云》这部心理剧将带你一起见证申公豹的成长，解开心结，与同伴互助前行！",
        promoImg: "img/works/sgb/sgb-promo.jpg"
      },
      gallery: {
        lead: "2025 年 6 月，校内演出与市赛现场记录。",
        imgs: [
          { src: "img/works/sgb/sgb-stage-01.jpg", cap: "现场剧照 01" },
          { src: "img/works/sgb/sgb-stage-02.jpg", cap: "现场剧照 02" },
          { src: "img/works/sgb/sgb-stage-03.jpg", cap: "现场剧照 03" },
          { src: "img/works/sgb/sgb-stage-04.jpg", cap: "现场剧照 04" },
          { src: "img/works/sgb/sgb-stage-05.jpg", cap: "现场剧照 05" },
          { src: "img/works/sgb/sgb-stage-06.jpg", cap: "现场剧照 06" },
          { src: "img/works/sgb/sgb-stage-07.jpg", cap: "现场剧照 07" }
        ]
      },
      quotes: {
        lead: "挑了 9 句我自己最在意的台词。前两句是「AI 的正确废话」，中间几句是人的回应，最后两句是申公豹反过来成为别人的光——这个顺序本身就是我想说的话。",
        list: [
          { who: "灵智镜", scene: "第三幕 · 深夜的静思", line: "嘲笑行为通常源于他人的误解或偏见。建议你忽略这些负面反馈，专注于自我提升。", note: "全剧第一次让 AI 开口。它说的每一个字都正确、得体、无害——也完全没有用。我想让观众先被这种「正确的温柔」说服，再在后面反复失望。" },
          { who: "灵智镜", scene: "每幕结尾", line: "很荣幸能够帮到您，愿您找到内心的平静。", note: "这句在剧本里重复了四次，是我的刻意设计。前面申公豹每次都说「谢谢」，然后继续迷茫——礼貌的闭环里，情绪原封不动地退了回来。" },
          { who: "申公豹", scene: "第九幕 · 再次与灵智镜对话", line: "可是……算了没事了，谢……谢谢你。", note: "全剧我最心疼的一句。他不是没话说，是不想再对着一个听不懂的工具把痛苦复述第五遍。真正的求助中断，往往发生在这种「算了」里。" },
          { who: "执事长老", scene: "第六幕 · 执事长老的话", line: "修行是超越昨天的自己，不是追赶他人。", note: "权威角色第一次卸下评价者的身份。他给的不是方法，是参照系的替换——自卑的本质不是差，是拿错了尺子。" },
          { who: "执事长老", scene: "第六幕 · 执事长老的话", line: "灵智镜虽能提供知识和安慰，但它确实无法真正解决心中忧愁。", note: "整部剧的题眼。让「老师」亲口承认工具的边界，比让主角呐喊更有说服力——也直接把申公豹推向了真实的人。" },
          { who: "哪吒", scene: "第七幕 · 与哪吒之会", line: "虽然我不一定能给你答案，但是我可以听你说。你放心，在这你不用感到有压力！", note: "朋辈支持的关键不是共情技巧，是「在场」。哪吒没有给任何建议，他只交付了倾听——这正是灵智镜做不到的事。" },
          { who: "哪吒", scene: "第十幕 · 再会哪吒", line: "活在别人的期望里可太累了……真正的失望，是自己放弃自己。", note: "把「父亲的期望」这个死结拆开：父亲要的不是功名，是他过得好。哪吒能说出这句，是因为他自己也当过「魔童」。" },
          { who: "申公豹", scene: "第十一幕 · 朋友", line: "我们是对手，但我希望这个世界除了竞争之外更应该要有携手并进的朋友。", note: "主角第一次完整、流利地说完一整段话。口吃的消失不是被治好的，是他在替别人说话时忘了自己——这一幕之后，太乙才惊呼「你不口吃了」。" },
          { who: "哪吒", scene: "第十二幕 · 剧终", line: "我就说嘛，哪有什么十二金仙！你是谁只有你自己说了才算！", note: "结尾我让「十二金仙」这个所有人都追逐的头衔直接取消。评价标准消失了，人才被还给自己——这是我对整个剧本的最后一句注脚。" }
        ]
      },
      awards: [
        { name: "宁波市高校第三届校园心理情景剧大赛", level: "市二等奖", note: "宁波大学报送剧目，官方获奖名单公示" },
        { name: "宁波大学第四届校园心理情景剧大赛", level: "校一等奖", note: "校赛阶段" }
      ]
    }
  },
  {
    id: "game",
    title: "针对 MCI 老年人的低成本运动认知整合训练产品开发",
    cat: "project",
    catName: "项目 PROJECT",
    year: "2024",
    role: "项目负责人",
    img: "img/proj-game.svg",
    link: "https://b527865781164df289804885b2ed38d7.gz4.agentos-app.net",
    brief: "以 5 大认知神经科学经典范式（GO/NO GO · Stroop · Flanker · RSVP · 空间导航）为设计原型，将专业认知训练藏进\"超市购物\"生活场景。摄像头体感交互 0 触控，5 游戏 × 3 难度 × 45 训练单元，纯正向计分。",
    values: [
      { k: "科学", en: "SCIENCE-BASED" },
      { k: "数据", en: "DATA-DRIVEN" },
      { k: "适老化", en: "AGE-FRIENDLY" }
    ],
    story: "我作为项目负责人，从 0 到 1 主导这款面向老年人的认知训练游戏。起点是调研中的真问题：复杂操作让老人不愿参加训练。解法是把抽象训练藏进\"去超市买菜\"的生活场景：地面九宫格对应货架网格，老人走动站位 + 手部抓取就能完成任务，纯正向计分不扣分。每一个设计决策背后都有心理学理论支撑：具身认知（体感交互降低认知转换成本）、操作性条件反射（不扣分避免焦虑回避——周均训练从 2.1 次提升到 3.8 次）、心流理论（三档难度梯度维持心流通道——高阶退出率 28%→9.3%）、认知老化理论（靶向五大衰退最显著的认知维度）。120 人 3 个月定点试用 → 留存 82.5%、满意度 94.2、注意力/短时记忆/空间导航能力平均提升 24%-27%、体感识别失误率从 32% 优化到 8.7%。4 轮迭代让我体会到：产品的关键决策往往来自对真用户的驻场观察，而不是产品经理的设想。下方档案区收录了完整设计文档蒸馏出的 7 个章节——五大认知范式、7 大心理学原理、难度梯度、实地测试洞察与操作手册，附实拍演示剧照。",
    archive: {
      type: "game",
      overview: {
        lead: "一款专为老年人设计的体感交互认知训练游戏——以认知神经科学经典研究范式为设计原型，以超市购物为场景，通过动作识别技术让老人在生活情境中获得认知与协调的综合锻炼。",
        features: [
          { k: "科学设计", d: "基于 5 大认知神经科学经典范式" },
          { k: "五大场景", d: "蔬果/日用品/零食/衣物/玩具区" },
          { k: "阶梯难度", d: "5 类游戏 × 9 关卡 = 45 训练单元" },
          { k: "体感交互", d: "摄像头捕捉动作，零接触操作" },
          { k: "限时准确率", d: "时间压力下追求高正确率" },
          { k: "即时反馈", d: "星级评价 + 鼓励评语" },
          { k: "适老化界面", d: "大字体/高对比/语音+文字" },
          { k: "正向计分", d: "误触不扣分，降低挫败感" }
        ],
        env: [
          { k: "开发平台", v: "Windows PC" },
          { k: "开发工具", v: "Unity · JetBrains" },
          { k: "操作系统", v: "Windows 10/11 (64位)" },
          { k: "编程语言", v: "C# · Python" },
          { k: "CPU", v: "i5+ (6 核)" },
          { k: "硬盘", v: "10 GB+（建议 SSD）" },
          { k: "主频", v: "3.0 GHz+" },
          { k: "外设", v: "HD 高清摄像头" },
          { k: "活动空间", v: "2-3 m 无障碍" }
        ]
      },
      games: [
        { no: "01", name: "我爱吃水果", paradigm: "GO/NO GO", ability: "抑制控制", scene: "蔬果区", brief: "屏幕展示蔬果货架，目标闪烁提示后玩家用脚移动购物车 + 举手\"抓握\"收集目标；非目标时双手握拳抑制。\"走到格子 + 伸手抓取\"即完成，不要求高精准度。", frame: "img/works/game/frame-1.jpg" },
        { no: "02", name: "商品配配对", paradigm: "Stroop", ability: "冲突抑制", scene: "日用品区", brief: "每个商品带色卡标签，存在\"标签色 ≠ 实物色\"的冲突（如红色标签贴在绿色杯子上）。玩家找出标签与实物颜色一致的商品抓取，训练冲突条件下的抑制能力。", frame: "img/works/game/frame-2.jpg" },
        { no: "03", name: "寻找大薯片", paradigm: "Flanker", ability: "选择性注意", scene: "零食区", brief: "十字形货架 + 红/绿双色购物车。左右手分别控制双车收集不同目标，在一致/不一致试次比例 70/30 → 30/70 的递进中训练抗干扰。", frame: "img/works/game/frame-3.jpg" },
        { no: "04", name: "衣服搭配师", paradigm: "RSVP Go/No-Go", ability: "短时序列记忆", scene: "衣物区", brief: "小橱窗快速序列呈现衣物图片（2s → 1.5s → 1s），目标出现单手抓取、非目标双手握拳。困难档加入注意瞬脱测试——两个目标连续出现时第二个目标的识别率。", frame: "img/works/game/frame-4.jpg" },
        { no: "05", name: "玩具在哪里", paradigm: "空间记忆与导航", ability: "空间导航", scene: "玩具区", brief: "目标高亮闪烁 3 秒后隐藏为相同包装盒，玩家凭记忆规划最优路线。系统全程评估路径效率 = 最优路径 / 实际路径。困难档加入视角随机切换，购物车起点变化。", frame: "img/works/game/frame-5.jpg" }
      ],
      theories: [
        { k: "具身认知", en: "Embodied Cognition", ref: "Varela et al., 1991", design: "选择体感交互而非触屏——\"走格子 + 伸手抓取\"比\"视觉→手部精细操作\"更省认知资源，激活老人已有的购物运动图式。", proof: "高龄用户任务理解准确率 75% → 96%" },
        { k: "操作性条件反射", en: "Skinner, 1953", ref: "正强化 vs 惩罚", design: "全程正向计分，误触不扣分；即时反馈（0.5s 内）+ 变比率鼓励评语——避免老人\"做错→焦虑→更做不好\"的恶性循环。", proof: "周均训练 2.1 → 3.8 次（+81%）" },
        { k: "心流理论", en: "Csikszentmihalyi, 1990", ref: "技能-挑战匹配", design: "3 档难度梯度（简单=掌控 → 中等=心流 → 困难=突破），每档保持\"平缓阶梯\"避免难度陡增击穿心流通道。", proof: "高阶退出率 28% → 9.3%" },
        { k: "认知老化", en: "Salthouse, 2004", ref: "领域特异性衰退", design: "靶向执行功能/加工速度衰退最显著的 5 维度（抑制/冲突/注意/记忆/空间）——5 大范式不是随机组合，而是覆盖老化衰退重灾区。", proof: "注意力/短时记忆/空间导航 +24%-27%" },
        { k: "自我效能感", en: "Bandura, 1977", ref: "四源效能感", design: "高完成率（掌握）+ 围观榜样（替代）+ 鼓励评语（劝导）+ 站立活动（生理）——四源叠加构建\"我能做到\"的信念，抵御回避动机。", proof: "老人参与意愿与坚持性显著提升" },
        { k: "多巴胺奖励回路", en: "Schultz, 1998", ref: "预测误差信号", design: "子任务级即时奖励 + 不可预测鼓励评语 + 1-3 星幅度变化 + 长期解锁可视化——密集变比率强化维持跨场次动机。", proof: "跨场次训练粘性显著" },
        { k: "认知负荷理论", en: "Sweller, 1988", ref: "最小化外在负荷", design: "放大字体/高对比配色 + 语音重复 2 次 + 简化冗余 + 一套九宫格全场景通用——释放工作记忆给训练任务本身。", proof: "任务理解准确率 75% → 96%" }
      ],
      tuning: {
        lead: "每个游戏下设 3 档难度（简单/中等/困难），每档 3 关，5 个游戏合计 45 个训练单元。",
        levels: [
          { k: "简单", rel: "技能 > 挑战（轻度）", state: "从容掌控感 → 建立自信", vars: "小规模货架 · 少量目标 · 长刷新 · 高对比干扰" },
          { k: "中等", rel: "技能 ≈ 挑战", state: "心流核心区 → 最佳体验", vars: "扩大货架 · 同色系干扰 · 缩短刷新 · 增加目标" },
          { k: "困难", rel: "挑战 > 技能（适度）", state: "激发挑战欲 → 突破舒适区", vars: "多目标 · 遮挡伪装 · 时间压缩 · 高比例干扰" }
        ],
        iter: [
          { k: "误扣分 → 纯正向", before: "周均训练 2.1 次", after: "周均训练 3.8 次（+81%）" },
          { k: "2 档 → 3 档难度", before: "高阶退出率 28%", after: "高阶退出率 9.3%" },
          { k: "识别算法宽容化", before: "失误率 32%", after: "失误率 8.7%" }
        ]
      },
      field: {
        lead: "驻场观察于\"机构 502 活动室\"——电视 + 游戏机 + 摄像头一体化，前方留出 2-3m 站立空间，符合零触控适老化原则。",
        scenes: [
          { k: "单用户体验", d: "工作人员现场指导，老人站立举手做\"抓握\"动作，体感识别响应正常；倒计时 + 得分实时显示，降低首次使用门槛。" },
          { k: "群体围观", d: "地面胶带九宫格清晰对应货架网格；中央老人抬手体感交互，环境其他老人专注围观，自然形成\"学习型社交\"氛围——这是文档里\"轻社交\"缺失痛点的天然补偿。" }
        ],
        insights: [
          { expect: "单用户独立训练", actual: "实际形成\"1 人玩 + 多人围观\"小型社交场景", lesson: "后续加入\"观众互动模式\"（围观者预测得分/加油）" },
          { expect: "九宫格需要胶带标记", actual: "老人对地面标识适应良好，但胶带易脱落", lesson: "改用喷涂标识或可拆卸磁吸贴片" },
          { expect: "摄像头识别准确率 95%+", actual: "老人实际动作幅度偏小，原算法容错不足", lesson: "扩大识别范围 + 慢速预判算法（失误率 32%→8.7%）" },
          { expect: "单人训练 15-20 分钟", actual: "围观等待的潜在用户加入意愿强烈", lesson: "机构端增设\"挑战赛\"模式提升单次参与人数" }
        ],
        photos: [
          { src: "img/works/game/field-1.jpg", cap: "多人围观 · 502 活动室 · 中央老人举手体感抓取 · 3×3 货架 + 苹果目标" },
          { src: "img/works/game/field-2.jpg", cap: "多人围观 · 工作人员驻场引导 · 草莓目标呈现 · 体感识别正常响应" },
          { src: "img/works/game/field-3.jpg", cap: "迭代 3 · 2×2 简化版 · 高龄老人体验 · 字体放大 + 货架精简" },
          { src: "img/works/game/field-4.jpg", cap: "1 对 1 访谈 · 用户满意度问卷 · 体验后即时反馈记录" },
          { src: "img/works/game/field-5.jpg", cap: "小组测试 · 多元用户参与 · 中央老人体感交互 · 围观专注" },
          { src: "img/works/game/field-6.jpg", cap: "1 对 1 笔记本端 · 轮椅用户 + 笔记本记录 · 多模态数据采集" },
          { src: "img/works/game/field-7.jpg", cap: "1 对 1 笔记本端 · 笔记本电脑运行 + 测试设备 · 个性化适配" }
        ]
      },
      evaluation: {
        lead: "5 大数据采集维度（通用）+ 6 项核心结论（120 人 / 3 个月定点试用）。",
        common: [
          { k: "A1", d: "正确反应时（目标出现→正确抓取）" },
          { k: "A2", d: "错误/抑制反应时（非目标→错误抓取或正确抑制）" },
          { k: "A3", d: "正确拒绝/错误抓取反应时" },
          { k: "B1/B2", d: "注意瞬脱 T2 正确率（连续 vs 间隔目标）" },
          { k: "C1-C4", d: "正确/错误/漏抓/正确拒绝 计数" },
          { k: "D", d: "每关总用时" },
          { k: "E", d: "路径效率 = 最优路径/实际路径" }
        ],
        outcomes: [
          { n: "120", u: "人", l: "3 个月定点试用样本" },
          { n: "82.5", u: "%", l: "训练留存率" },
          { n: "94.2", u: "分", l: "用户满意度" },
          { n: "+24~27", u: "%", l: "注意力/短时记忆/空间导航提升" },
          { n: "32→8.7", u: "%", l: "体感识别失误率（迭代优化）" },
          { n: "28→9.3", u: "%", l: "高阶关卡退出率（3 档梯度）" },
          { n: "2.1→3.8", u: "次/周", l: "训练频次（纯正向计分）" }
        ]
      },
      demo: {
        lead: "实拍演示 6 帧（12 分钟完整演示视频因 3.1 GB 体积未嵌入；如需可联系获取）+ 6 体感动作操作规范。",
        frames: [
          { src: "img/works/game/frame-1.jpg", cap: "游戏一·我爱吃水果 · GO/NO GO · 4 宫格货架 + 苹果 + \"做得好\"鼓励" },
          { src: "img/works/game/frame-2.jpg", cap: "游戏二·商品配配对 · Stroop · 色卡标签 vs 实物颜色匹配" },
          { src: "img/works/game/frame-3.jpg", cap: "游戏三·寻找大薯片 · Flanker · 十字货架 + 双色购物车" },
          { src: "img/works/game/frame-4.jpg", cap: "游戏四·衣服搭配师 · RSVP · 快速序列衣物呈现" },
          { src: "img/works/game/frame-5.jpg", cap: "游戏五·玩具在哪里 · 空间导航 · 3×3 玩具 + 路径效率评估" },
          { src: "img/works/game/frame-6.jpg", cap: "实地测试 · 机构 502 活动室 · 工作人员驻场指导" }
        ],
        actions: [
          { ic: "✋", k: "举手抓取", d: "单手向前 45° 举起伸展五指 → 收集目标商品" },
          { ic: "✊", k: "双手握拳", d: "双手握拳举至胸前 → 表示\"不收集\"，进入下次刷新" },
          { ic: "🤚", k: "左手抓取", d: "零食区左手向前 45° 抓握 → 放入左侧绿色购物车" },
          { ic: "🖐", k: "右手抓取", d: "零食区右手向前 45° 抓握 → 放入右侧红色购物车" },
          { ic: "🚶↑↓", k: "前后移动", d: "向前/向后走若干步 → 移动购物车/到达目标收集区" },
          { ic: "🚶←→", k: "左右移动", d: "向左/向右走若干步 → 移动购物车/到达目标收集区" }
        ],
        specs: [
          { k: "认知范式", v: "5" }, { k: "训练单元", v: "45" },
          { k: "超市场景", v: "5" }, { k: "难度梯度", v: "3 档" },
          { k: "体感动作", v: "6" }, { k: "迭代轮次", v: "4 轮" },
          { k: "试用样本", v: "120 人 / 3 个月" }, { k: "定位", v: "适老化认知训练" }
        ]
      }
    }
  },
  {
    id: "xinqiao",
    title: "心桥圈 · 医院心理咨询可及性提升",
    cat: "project",
    catName: "项目 PROJECT",
    year: "2025",
    role: "策划参与 · 院校实习生",
    team: "宁波大学附属康宁医院 8 人品管圈",
    img: "img/proj-xinqiao.svg",
    brief: "基于 PDCA 循环，为宁波康宁医院策划\"心理咨询服务可及性\"改进方案。开发数字心理咨询师上线小程序，7×24 小时服务。",
    values: [
      { k: "体系", en: "SYSTEMATIC" },
      { k: "量化", en: "QUANTIFIABLE" },
      { k: "创新", en: "INNOVATIVE" }
    ],
    story: "在康宁医院实习期间，作为 8 人 PDCA 品管圈的协助策划成员，我亲历了一次完整的服务改进项目。我们从政策窗口出发，用鱼骨图 + 柏拉图锁定真因，再用对策矩阵打分选出 3 个可执行方案：①开发数字心理咨询师（基于 Qwen3 微调 + bge 系列模型）上线小程序、②设立 15 分钟心理咨询短程门诊、③预约页面增加登记组件。3 个月实施后，可及性指数从 40.94 提升到 57.23（+39.8%），新增服务 1792 人次，目标达成率 156%。这次经历让我理解了\"用数据讲管理故事\"——这是营销策划里同样稀缺的能力。",
    archive: {
      type: "qcc",
      about: {
        lead: "康宁医院 8 人 PDCA 品管圈 · 2025 春–秋 · 院校实习生协助策划",
        name: "心桥圈",
        founded: "2025 年 1 月 10 日",
        members: 8,
        avgAge: 37,
        leader: "XXX",
        advisor: "XXX",
        org: "宁波大学附属康宁医院",
        period: "2025 年 3 月 8 日 — 9 月 30 日",
        nameNote: "「桥」象征对来访者的专业支撑——连接心理困境与疗愈成长、消融隔阂与信任，践行「助人自助」。发光的爱心 = 关怀温暖；桥梁 = 连接沟通；光芒 = 希望指引。",
        roster: [
          { n: "圈员 1", role: "统筹协调", title: "信息系统监理师", age: 41, exp: 19, edu: "硕士", job: "组织·策划·分工·培训·追踪" },
          { n: "圈员 2", role: "统筹协调", title: "副主任医师", age: 42, exp: 18, edu: "硕士", job: "协调·指导·督查·评价" },
          { n: "圈员 3", role: "管理管控", title: "中级心理咨询师", age: 40, exp: 16, edu: "硕士", job: "培训·活动落实·数据收集" },
          { n: "圈员 4", role: "收集修订", title: "中级心理咨询师", age: 37, exp: 14, edu: "硕士", job: "数据收集·相片采集" },
          { n: "圈员 5", role: "实施制作", title: "初级心理咨询师", age: 28, exp: 5, edu: "硕士", job: "活动落实·制作幻灯片" },
          { n: "圈员 6", role: "实施制作", title: "初级心理咨询师", age: 29, exp: 4, edu: "硕士", job: "活动落实·数据分析·记录" },
          { n: "圈员 7", role: "制作维护", title: "工程师", age: 39, exp: 15, edu: "本科", job: "活动落实·数据收集" },
          { n: "圈员 8", role: "制作维护", title: "工程师", age: 41, exp: 18, edu: "本科", job: "活动落实·数据收集" }
        ],
        me: "院校实习生 · 协助策划与数据整理"
      },
      theme: {
        title: "提升医院心理咨询服务可及性",
        def: "心理咨询服务可及性：指服务对象在需要心理帮助时，能够在合适的时间、以合适的方式，便捷且可负担地获得与自身需求相适合并可接受的医院心理咨询服务的程度。",
        policy: [
          { src: "WHO · 2022", text: "中国心理健康服务可及性有限，精神障碍治疗差距很大。" },
          { src: "《柳叶刀·精神病学》", text: "精神科医生与心理治疗师数量严重不足且分布不均（Huang et al., 2019）。" },
          { src: "中国疾控 · 2024", text: "《中国疾病预防控制中心周报》明确将精神障碍列为重大公共卫生问题。" },
          { src: "国家卫健委等三部门 · 2025.4", text: "联合发布「儿科和精神卫生服务年」行动通知（2025–2027）。" }
        ],
        matrix: [
          { n: "提升医院心理咨询服务可及性", a: 40, b: 38, c: 34, d: 38, t: 150, star: true },
          { n: "精神障碍恢复期患者延续性心理支持体系", a: 31, b: 32, c: 30, d: 32, t: 125 },
          { n: "轻症心理问题患者快速响应通道", a: 34, b: 32, c: 30, d: 28, t: 124 },
          { n: "未成年患者个性化心理服务空间", a: 32, b: 30, c: 30, d: 28, t: 122 },
          { n: "基层医疗机构心理服务能力", a: 30, b: 30, c: 28, d: 26, t: 114 },
          { n: "提高残障群体心理服务适配性", a: 28, b: 28, c: 26, d: 28, t: 110 }
        ]
      },
      baseline: {
        current: 40.94,
        currentDesc: "2025 年 1–3 月 HIS 数据：线下门诊 4469 人次 + 电话咨询 34 人次 = 4503 人次；月均可及性指数 40.94（每千名潜在需求者中月均约 41 人获得有效服务）。",
        target: 51.38,
        formula: "目标值 = 现况值 + (现况值 × 改善期望 × 圈员能力) = 40.94 + (40.94 × 30% × 85%) = 51.38",
        img: "img/works/xinqiao/target.jpg"
      },
      analysis: {
        fishboneImg: "img/works/xinqiao/fishbone.jpg",
        fishboneNote: "从 5 个维度（人员 / 方法 / 机器 / 材料 / 环境）系统归因，共列出 30+ 条末端要因。",
        paretoImg: "img/works/xinqiao/pareto.jpg",
        paretoNote: "要因查检 + 柏拉图累计 80.46% 锁定 4 项真因。",
        truths: [
          "咨询师数量不足（31 分 · 4 大要因之首）",
          "预约渠道单一（26 分）",
          "工作时间有限（23 分）",
          "匹配 / 筛选机制不够有效（23 分）"
        ]
      },
      measures: [
        { n: "一", title: "开发数字心理咨询师", cause: "咨询师工作时间有限", who: "XXX · 信息科", when: "2025.3 – 6",
          content: "基于 Qwen3 微调，并嵌入 bge-large-zh-v1.5 / bge-reranker-large 等模型；训练数据来自康宁医院真实心理咨询案例与不同流派治疗师的咨询逻辑。上线「宁大康宁医院心理咨询云中心」微信小程序数字咨询师模块，提供 7×24 小时服务。",
          verify: "每月统计服务人次、单次对话轮次与时长；定期调查服务人员满意度。" },
        { n: "二", title: "设立心理咨询短程门诊", cause: "匹配 / 筛选机制不够有效", who: "XXX · 医务科", when: "2025.4 – 5",
          content: "由医院专职心理治疗师每周工作日上午 8:00–11:30 轮流排班，开设时长 15 分钟、每次 14 个号源的短程门诊；向精神科医生宣教，建立门诊—咨询协同机制。",
          verify: "每月统计短程门诊服务人次、门诊-咨询转化率。" },
        { n: "三", title: "预约页面增加心理咨询登记组件", cause: "预约渠道单一", who: "XXX · 心理健康服务中心", when: "2025.4",
          content: "于「宁大康宁医院心理咨询云中心」微信小程序预约页增设咨询登记组件；前台分诊专职人员定期核查并联系安排。",
          verify: "每月统计咨询登记人次与成功预约人次。" }
      ],
      results: {
        headline: [
          { num: "39.8", unit: "%", label: "服务可及性进步率" },
          { num: "156", unit: "%", label: "目标达成率" },
          { num: "1,792", unit: "", label: "净增服务人次" }
        ],
        tangibleImg: "img/works/xinqiao/result.jpg",
        tangibleNote: "调查时间 2025.6–8。咨询总人次 4503 → 6295；可及性指数 40.94 → 57.23；新增渠道（数字咨询师 + 短程门诊）占比 27%。",
        intangibleImg: "img/works/xinqiao/radar.jpg",
        intangibleNote: "8 维度能力全员正向提升——品管手法 +3.0、沟通协调 +2.3、责任心 +0.9、团队凝聚力 +2.4。"
      },
      summary: {
        standardize: "制作《心理咨询服务预约流程》标准作业书；联合医务部、信息科、心理健康中心优化服务流程与资源配置。",
        lessons: [
          { item: "主题选定", pros: "高度契合国家「精神卫生服务年」政策；需求估算扎实", cons: "院内具体瓶颈把握可更精细" },
          { item: "现状把握", pros: "提出「潜在需求人口 × 服务覆盖率」量化模型", cons: "可补充患者访谈 / 问卷使现状更立体" },
          { item: "对策拟定", pros: "线上线下多种创新手段（数字咨询师 + 小程序）", cons: "流程优化跨部门协作依赖强，初期推动阻力大" },
          { item: "效果确认", pros: "有形 + 无形成果并重，成效显著", cons: "效果追踪偏短，长期疗效有待观察" }
        ],
        nextTheme: "下一期主题：心理咨询服务质量与满意度提升。在扩大可及性的基础上，进一步关注咨询流程优化、疗效评估与医患沟通——确保「能获得咨询」更能「获得高质量的咨询体验」。"
      }
    }
  },
  {
    id: "spotlight",
    title: "聚光灯效应 · 口水歌 MV",
    cat: "creative",
    catName: "创作 CREATIVE",
    year: "2025",
    award: "校三等奖",
    role: "脚本 · 编曲 · 出演",
    img: "img/proj-spotlight.svg",
    brief: "心理学概念科普短视频。把\"聚光灯效应\"写成朗朗上口的小调，通过 MV 演绎日常场景，鼓励大家克服过度自我关注。",
    values: [
      { k: "科普", en: "EDUCATE" },
      { k: "传播", en: "VIRAL" },
      { k: "趣味", en: "ENGAGING" }
    ],
    story: "选题来自队员的真实感受——总觉得自己在人群中\"出丑\"。我们决定不走说教路线，而是把心理学概念写成朗朗上口的口水歌，用 MV 演绎\"课堂上答错题被嘲笑\"\"电梯里衣服穿反\"等日常场景，让大家在笑声里理解\"聚光灯效应\"。我负责歌词脚本和出镜表演，并参与编曲讨论。最后这个项目获校心理实践技能大赛三等奖。从这段经历学到：科普的关键不是堆术语，是找到能让人\"听懂\"的载体。",
    archive: {
      type: "video",
      band: {
        kicker: "SCI-COM VIDEO · 心理科普短视频",
        lead: "把「聚光灯效应」写成一首口水歌，用 MV 演绎日常尴尬场景——在笑声里讲明白一个心理学概念。",
        no: "NO.07",
        seal1: "校三等奖",
        seal2: "心理科普赛道"
      },
      origin: {
        lead: "聚光灯效应（spotlight effect）是个体往往高估他人对自己的关注——把自己当成人群焦点。我们用一首朗朗上口的小调来拆解它。",
        paras: [
          "聚光灯效应是指个体往往高估了他人对自己的关注，把自己视为人群中的焦点，从而过度关注自己对他人的印象等。我们日常生活中，聚光灯效应无处不在。",
          "灵感来自队员的真实感受——总觉得自己在人群中「出丑」时就被围观。作品把生活中的例子和心理学知识结合，创意性地制作了一首关于聚光灯效应的口水歌，并用短视频 MV 把歌词情境演绎出来。",
          "我负责歌词脚本撰写和出镜表演，并参与编曲讨论。科普的关键不是堆术语，是找到能让人「听懂」的载体——这次我们选的是口水歌。"
        ],
        concept: "聚光灯效应（Spotlight Effect）",
        background: "1999 年 Gilovich 等人在《Journal of Personality and Social Psychology》提出，指人们倾向于高估他人对自己的关注程度，本质是「透明度错觉」的体现。"
      },
      lyrics: {
        lead: "口水歌风格 · 副歌循环 + 三个日常场景 + 鼓励收尾",
        chorus: ["哦~ 聚光灯效应出现", "其实没人那么在意你"],
        verses: [
          { no: "V1", t: "课堂答错", d: "以为自己答错就被全班盯着看，\n其实老师可能下一秒就忘，\n同学记得的是他们自己的尴尬。" },
          { no: "V2", t: "校园道路绊倒", d: "在校园小道上踩空了一下，\n以为所有人都在回头看，\n其实别人早就低头看手机。" },
          { no: "V3", t: "电梯里的尴尬", d: "衣服穿反或者拉链没拉，\n以为电梯里所有人都在打量，\n其实他们自己也在刷手机。" }
        ],
        outro: ["轻松点，没那么多人关注你", "勇敢点不再慌乱", "做自己 · 聚光灯只照你自己"]
      },
      video: {
        lead: "完整视频 1分36秒 · 1280×720 · 2024 宁波大学校园实拍",
        src: "img/works/spotlight/spotlight.mp4",
        poster: "img/works/spotlight/cover.jpg",
        duration: "1分36秒",
        frames: [
          { src: "img/works/spotlight/frame-1.jpg", cap: "副歌 · 气泡字幕开场" },
          { src: "img/works/spotlight/frame-2.jpg", cap: "场景 V3 · 电梯里衣服穿反" },
          { src: "img/works/spotlight/frame-3.jpg", cap: "场景 V2 · 校园道路绊倒" },
          { src: "img/works/spotlight/frame-4.jpg", cap: "收尾 · 「轻松点，没那么多人关注你」" },
          { src: "img/works/spotlight/frame-5.jpg", cap: "MV 中段 · 歌词卡「在小道上」" }
        ]
      },
      awards: [
        { level: "校三等奖", name: "2024 宁波大学应用心理专业学位硕士实践技能大赛", note: "心理科普短视频赛道 · 教师教育学院" }
      ],
      awardImg: "img/works/spotlight/award-notice.png",
      team: {
        lead: "据决赛通知，校三等奖获奖团队成员 6 人（曾玲作为其中一员参与）：",
        members: ["周颖", "邵佳茜", "张小玉", "曾玲", "王婷", "吴晓玉"],
        roles: [
          { who: "曾玲", role: "歌词脚本 · 出镜表演 · 编曲讨论" }
        ]
      }
    }
  },
  {
    id: "romance",
    title: "《浪漫餐厅》游戏拆解分析",
    cat: "analysis",
    catName: "分析 ANALYSIS",
    year: "2025",
    role: "独立分析",
    img: "img/proj-romance.svg",
    link: "https://941e2464589942d39d49985b86c4e4a5.sh5.agentos-app.net/restaurant.html",
    brief: "基于本人 139 级、约 1 年、累计付费约 500 元的深度体验，从核心循环、难度曲线、数值经济、商业化、心理学视角、留存社交、竞品对比七个维度系统拆解这款休闲游戏。",
    values: [
      { k: "结构", en: "STRUCTURED" },
      { k: "洞察", en: "INSIGHT" },
      { k: "表达", en: "CRISP" }
    ],
    story: "我一直对\"为什么这款游戏让人想玩下去\"感兴趣，所以把它当作一个研究对象——而且是用自己的时间和付费行为做的一手实验。报告拆解了：①核心循环（体力→合成→订单→奖励，斯金纳箱式可变比率强化）、②难度曲线（前 60 级蜜月期 → 100 级后付费墙）、③数值经济（消耗>产出的长期失衡如何驱动付费）、④商业化路径（复盘认真分析了\"限时任务+体力不足\"这个最高效付费触发器的四重心理叠加：目标梯度+沉没成本+损失厌恶+FOMO）、⑤心理学视角（心流理论、蔡格尼克效应、享乐适应、自我决定理论——指出游戏后期从\"内在动机迁移到外部动机\"的长线隐患）、⑥留存与社交短板、⑦竞品对比与 P0/P1 优先级改进建议。这份报告练习的是把感性体验翻译成可分析的语言——恰好是营销策划的核心能力。点击下方按钮查看完整拆解报告。"
  }
];

/* ============================================================
   简历数据（保留：联系页的 PDF 下载仍需要）
   ============================================================ */
const resume = {
  name: "曾玲",
  title: "营销策划 · Marketing Planner",
  meta: ["应用心理学硕士 · 宁波大学", "15381707092", "LingZeng_501@163.com"],
  summary: "应用心理学硕士，具备用户洞察、营销数据分析、竞品研究及独立项目策划经验。擅长从用户行为与市场数据中发现问题，将洞察转化为具体内容或策划方案，并通过数据反馈持续优化。拥有从 0 到 1 项目设计及广告运营经历；个人自媒体运营经历。关注科技、游戏及消费产品。",
  skills: ["用户调研方法（问卷设计/深度访谈/焦点小组）", "数据分析（SPSS/Python/R）", "竞品分析", "产品 PRD", "营销策划", "短视频脚本", "文学创作", "AI 工具应用"],
  education: [{
    school: "宁波大学",
    major: "应用心理学",
    degree: "硕士",
    period: "2024.09 — 2027.07",
    gpa: "GPA 3.8/4",
    courses: "统计分析、心理测量、社会心理学、消费心理学、认知与行为、机器人心理学、工程心理学"
  }],
  awards: [
    "学业奖学金二等奖",
    "宁波市心理剧大赛 市二等奖",
    "宁波大学第四届校园心理情景剧大赛 校一等奖",
    "心理技能实践大赛 校三等奖",
    "南孔杯文学创作大赛 校二等奖",
    "舞林大赛 校二等奖"
  ],
  experiences: [
    {
      org: "玖幺教育咨询有限公司",
      role: "广告运营实习生",
      period: "2024.05 — 2024.07",
      bullets: [
        "采集小红书、抖音、微信视频号平台 1200+ 流量账户视频内容、搜索关键词、评论及用户标签等行为数据，完成跨平台用户分层分析与完整用户画像搭建",
        "拆解近 3 个月广告投放全量数据和 10+ 竞家广告内容，围绕素材样式、文案风格、互动率等 8 项核心指标完成复盘分析",
        "洞察用户对传统硬广接受度较低的问题，提出「微信聊天对话式」场景化原生广告方案",
        "推动广告整体点击转化率提升 5%，流量账户业绩增长 20%"
      ]
    },
    {
      org: "宁波康宁医院",
      role: "咨询实习生",
      period: "2025.09 — 2026.01"
    },
    {
      org: "宁波凯美辰",
      role: "跨境电商人力实习生",
      period: "2026.06 — 2026.08"
    }
  ]
};

/* ============================================================
   自媒体运营数据（media.html 用）
   ★ 把真实数据发我，我改这一块就行
   ============================================================ */
const social = {
  stats: [
    { n: "453", k: "粉丝", en: "FOLLOWERS" },
    { n: "30", k: "累计发布", en: "POSTS" },
    { n: "8,865", k: "获赞与收藏", en: "LIKES + SAVES" },
    { n: "305", k: "单篇最高收藏", en: "TOP SAVES" }
  ],
  platforms: [
    {
      name: "小红书", en: "REDNOTE",
      handle: "乐天派 · 42154765070",
      desc: "主阵地。围绕穿搭/OOTD + 旅行记录 + 大学生平价生活做内容，从早期的 PDD 测评（玉米、全麦面包笔记曾跑出 305 收藏）逐步转向场景化穿搭选题。",
      tags: ["图文", "OOTD穿搭", "旅行记录", "大学生场景"],
      link: "https://www.xiaohongshu.com/user/profile/42154765070"
    }
  ],
  contents: [
    {
      img: "img/media-corn.png",
      title: "分享一个最近买到的超级OK的玉米",
      plat: "小红书 · 2023.03",
      metric: "👁 9,917 浏览 · ❤️ 468 · ⭐ 305 · 💬 39",
      note: "爆款笔记：用宿舍小锅煮+具体步骤拆解，把 1 斤玉米讲透，收藏率远超同类内容。"
    },
    {
      img: "img/media-bread.png",
      title: "分享一个减脂 pdd 好物",
      plat: "小红书 · 2025.12",
      metric: "👁 3,894 浏览 · ❤️ 215 · ⭐ 51 · 💬 2",
      note: "标签矩阵覆盖「#PDD测评 #减脂 #宿舍好物 #平价好物」，搜索流量入口精准。"
    }
  ],
  ootdSeries: [
    { img: "img/ootd-685649fb9322564b8a0c55cbce605f61.jpg", title: "桂林旅游第二天，阳朔我就这么穿！", metric: "❤️ 2", copy: "阳朔第二天，我换了一套更「田」的 🏞️\n\n绿色雪纺上衣➕名族风连衣裙～阳朔比桂林市区更田园，绿色比白色更活泼。\n① 跟背景同色系 = 高级（其实就是懒）\n② 橙色头发配浅绿特别上镜\n③ 薄纱材质拍照会发光，逆光绝了" },
    { img: "img/ootd-179955cf90abc658bc2877fac2d7fb37.jpg", title: "桂林旅游第一天！我就这样穿！", metric: "❤️ 6", copy: "桂林第一天，先把自己穿成风景的一部分 🌿\n\n橙色头发 + 黑框镜 + 红色条纹内搭吊带，在公园又悠闲又适配～\n旅游穿搭我踩过的坑：\n① 别穿得太「游客」，舒服但要有细节\n② 山水背景前亮色比素色出片，这次赌对了\n③ 鞋子一定要好走，桂林暴走两万步不是开玩笑\n\n明天阳朔，换个更彩的配色 ✨" },
    { img: "img/ootd-54d6d878d53012d30cba535c161cb5d5.jpg", title: "上五休二我这样穿！", metric: "❤️ 18", copy: "上五休二的快乐，从周一早上不纠结穿什么开始 ☕\n\n这套是我最近的通勤万能公式：基础款 + 一个有记忆点的配饰，今天选了这条项链。\n\n不用想搭配的早上，心情会好一整天，而且从工位直接去约饭也不违和 👌" },
    { img: "img/ootd-858539ec4995437478ff3c864501fa0a.jpg", title: "今日上班 ootd", metric: "❤️ 16", copy: "今日份通勤：背带裤回归 👖\n\n背带裤的好处是——不用想上下搭配，一件解决，里面随便套个 T 或吊带就出门，适合周一早上脑子还没醒的时候。今天搭了浅灰背带 + hallo kitty 小布包。\n\n朋友说像去春游，不像去上班 👌。其实通勤穿搭的最高境界就是：别人觉得你用心了，其实你只用 3 分钟。" },
    { img: "img/ootd-c99b27362db208bea79d33d59fbc98e4.jpg", title: "今日上班 ootd", metric: "❤️ 5", copy: "今日 ootd：玫红色出击 🍓\n\n可能是开春后第一件吊带出门，配了格纹肩带，比纯色更活泼，发间夹了白色小发饰，整套呼应蓝白包。\n\n通勤穿亮色的好处：会议室里你就是最显眼的那个，汇报的时候别人会多看你两眼（亲测有效），下班直接约饭也不用换 👗" },
    { img: "img/ootd-15017159792b41ee52c0558adb753dc7.jpg", title: "今日上班 ootd !", metric: "❤️ 5", copy: "棕色无袖上衣 + 灰色灯笼裤，方领显锁骨，显瘦小心机。今天发色又浅了一点（褪色期，随它去）。\n\n通勤穿搭我最近的心得：基础色（棕/灰/米）+ 一个亮点（格纹/配饰），就能穿出很会穿的感觉，其实都是搭配公式在偷懒哈哈" },
    { img: "img/ootd-5fd3e8871aa8556425aa1eebe5f3ede2.jpg", title: "今日上班 ootd 🍓", metric: "❤️ 24", copy: "周三需要一点甜的续命，所以穿了草莓色系，外套和内搭同色，显贵（其实是懒得配色）。\n\n小发现：全身控制在两个颜色以内，看起来会「很会穿」——其实就是懒。\n\n上班穿搭的核心诉求就三条：舒服、不费脑、拍照好看，满足了就是成功的一天 ✌️" }
  ],
  ootdTotal: { count: 7, likes: 76 },
  methods: [
    { no: "01", t: "洞察", d: "从评论、搜索词和爆款笔记里找真实需求，而不是凭感觉选题——做广告运营时这套方法让点击转化率提升 5%。" },
    { no: "02", t: "拆解", d: "拆同类爆款的选题角度、开头钩子、标签组合；把可复用结构沉淀成自己的内容模型。" },
    { no: "03", t: "表达", d: "心理学背景在这里是优势：知道怎样把「好吃/好用」翻译成让人愿意收藏的具体描述，而不是空洞的「绝绝子」。" },
    { no: "04", t: "复盘", d: "发布后 24 小时看数据曲线，判断是选题、标题还是标签问题，下一篇针对性迭代。" }
  ]
};

/* ============================================================
   渲染：自媒体页
   ============================================================ */
const statsEl = document.getElementById("mediaStats");
if (statsEl) {
  statsEl.innerHTML = social.stats.map(s => `
    <div class="mstat">
      <b>${s.n}</b>
      <span class="k">${s.k}</span>
      <span class="en">${s.en}</span>
    </div>`).join("");
}

const platEl = document.getElementById("platGrid");
if (platEl) {
  platEl.innerHTML = social.platforms.map(p => `
    <article class="plat-card">
      <div class="plat-head">
        <h3>${p.name}</h3>
        <span class="en">${p.en}</span>
      </div>
      <div class="handle">${p.handle}</div>
      <p>${p.desc}</p>
      <div class="plat-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.link ? `<a class="plat-link" href="${p.link}" target="_blank" rel="noopener">去逛逛 →</a>` : ""}
    </article>`).join("");
}

const wallEl = document.getElementById("contentWall");
if (wallEl) {
  const rot = [-2.5, 1.8, -1.2, 2.2, -1.6];
  wallEl.innerHTML = social.contents.map((c, i) => `
    <figure class="polaroid" style="--r:${rot[i % rot.length]}deg">
      <img src="${c.img}" alt="${c.title}">
      <figcaption>
        <b>${c.title}</b>
        <span class="pm">${c.plat} · ${c.metric}</span>
        <span class="pn">${c.note}</span>
      </figcaption>
    </figure>`).join("");
}

const methodEl = document.getElementById("methodFlow");
if (methodEl) {
  methodEl.innerHTML = social.methods.map(m => `
    <div class="mstep">
      <span class="no">${m.no}</span>
      <h3>${m.t}</h3>
      <p>${m.d}</p>
    </div>`).join("");
}

const ootdWall = document.getElementById("ootdWall");
if (ootdWall) {
  const items = social.ootdSeries;
  ootdWall.innerHTML = `
    <div class="carousel-track">
      ${items.map((o, i) => `
        <figure class="carousel-slide${i === 0 ? " active" : ""}" data-i="${i}">
          <div class="slide-img"><img src="${o.img}" alt="${o.title}"></div>
          <figcaption class="carousel-caption">
            <b class="carousel-title">${o.title}</b>
            <p class="carousel-copy">${o.copy}</p>
            <span class="carousel-metric">${o.metric}</span>
          </figcaption>
        </figure>
      `).join("")}
    </div>
    <div class="carousel-dots">
      ${items.map((_, i) => `<span class="carousel-dot${i === 0 ? " active" : ""}" data-i="${i}"></span>`).join("")}
    </div>
  `;
  const track = ootdWall.querySelector(".carousel-track");
  const slides = Array.from(ootdWall.querySelectorAll(".carousel-slide"));
  const dots = Array.from(ootdWall.querySelectorAll(".carousel-dot"));

  function activate(i) {
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
    const el = slides[i];
    const center = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left: Math.max(0, center), behavior: "smooth" });
  }

  // 点击图片 → 放大突出并居中
  slides.forEach((s, i) => s.addEventListener("click", () => { if (dragMoved) return; activate(i); }));
  // 底部圆点 → 快速跳转
  dots.forEach((d, i) => d.addEventListener("click", () => activate(i)));

  // 鼠标拖拽横向滑动（移动端触摸由 overflow-x 原生支持）
  let dragging = false, startX = 0, startScroll = 0, dragMoved = false;
  track.addEventListener("mousedown", (e) => {
    dragging = true; dragMoved = false;
    startX = e.clientX; startScroll = track.scrollLeft;
    track.classList.add("grabbing");
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) dragMoved = true;
    track.scrollLeft = startScroll - dx;
  });
  window.addEventListener("mouseup", () => { dragging = false; track.classList.remove("grabbing"); });
}

const ootdMeta = document.getElementById("ootdMeta");
if (ootdMeta) {
  ootdMeta.innerHTML = `
    共 <b>${social.ootdTotal.count}</b> 篇穿搭笔记 ·
    累计 <b>❤️ ${social.ootdTotal.likes}</b> · 涵盖旅游 / 通勤 / 周末
  `;
}

/* ============================================================
   作品页：三大板块 · 点击作品打开详情弹窗
   ★ 板块结构写在 works.html，这里只负责按 data-id 找到项目数据
   ============================================================ */
const workSections = document.getElementById("workSections");
if (workSections) {
  workSections.addEventListener("click", (e) => {
    const item = e.target.closest(".wc-item");
    if (!item || item.classList.contains("tbd")) return;
    if (item.dataset.link) { window.open(item.dataset.link, "_blank", "noopener"); return; }
    const p = projects.find(x => x.id === item.dataset.id);
    if (p) openModal(p);
  });
}


/* ---------- 项目详情弹窗 ---------- */
const mask = document.getElementById("modalMask");
const modalContent = document.getElementById("modalContent");

/* ---------- 档案区渲染（资料分类整理） ---------- */
function archiveHTML(a) {
  if (!a) return "";
  const no = n => `<span class="pb-no">${n}</span>`;
  const head = (zh, en) => `<div class="pb-sec-head"><b>${zh}</b><i>${en}</i></div>`;

  let html = `<div class="pb">
    <div class="pb-band">
      <div class="pb-band-l">
        <span class="pb-kicker">PROJECT ARCHIVE · 剧目档案</span>
        <p class="pb-band-lead">${a.synopsis.lead}</p>
      </div>
      <div class="pb-stub" aria-hidden="true">
        <span class="pb-stub-no">NO.06</span>
        <span>PSY · DRAMA</span>
        <span>2025 秋演</span>
        <span>ADMIT ONE</span>
      </div>
      <div class="pb-seal" aria-hidden="true"><span>市二等奖</span><b>·</b><span>校一等奖</span></div>
    </div>`;

  /* 01 剧本简介 — 双栏 + 首字下沉 */
  html += `<section class="pb-sec pb-synopsis">${no("01")}<div class="pb-sec-inner">
    ${head("剧本简介", "SYNOPSIS")}
    <div class="pb-cols">${a.synopsis.paras.map((t, i) => `<p class="${i === 0 ? 'drop' : ''}">${t}</p>`).join("")}</div>
  </div></section>`;

  /* 02 主题与背景 — 错落双卡 */
  html += `<section class="pb-sec pb-theme">${no("02")}<div class="pb-sec-inner">
    ${head("主题与背景", "THEME")}
    <p class="pb-lead">${a.theme.lead}</p>
    <div class="pb-theme-grid">
      <div class="pb-callout"><span>THEME / 主旨</span><p>${a.theme.theme}</p></div>
      <div class="pb-callout shift"><span>BACKGROUND / 背景设定</span><p>${a.theme.background}</p></div>
    </div>
  </div></section>`;

  /* 03 人物设定 — 演员表网格 */
  html += `<section class="pb-sec pb-cast">${no("03")}<div class="pb-sec-inner">
    ${head("人物设定", "CAST · 角色表")}
    <div class="pb-cast-grid">${a.cast.map(c => `
      <article class="pb-char">
        <div class="pb-char-top"><b>${c.n}</b><span>${c.tag}</span></div>
        <p class="pb-char-d">${c.d}</p>
        <p class="pb-char-note">${c.note}</p>
      </article>`).join("")}</div>
  </div></section>`;

  /* 04 宣传物料 — 海报做视觉锚点（原 06，前移填补被删的 04/05） */
  html += `<section class="pb-sec pb-promo">${no("04")}<div class="pb-sec-inner">
    ${head("宣传物料", "PROMOTION")}
    <div class="pb-promo-stage">
      <figure class="pb-poster">
        <img src="${a.promo.poster}" alt="《申公豹之玉虚风云》主视觉海报" data-zoom="1">
        <figcaption>主视觉海报 · 编剧兼设计：曾玲</figcaption>
      </figure>
      <div class="pb-promo-note">
        <span class="pb-note-k">POSTER NOTE / 海报说明</span>
        <p>${a.promo.posterNote}</p>
        <p class="pb-promo-lead">${a.promo.lead}</p>
      </div>
    </div>
  </div></section>`;

  /* 07 现场记录 — 拍立得手账拼贴 */
  html += `<section class="pb-sec pb-gallery">${no("05")}<div class="pb-sec-inner">
    ${head("现场记录", "ON SITE")}
    <p class="pb-lead">${a.gallery.lead}</p>
    <div class="pb-photos">${a.gallery.imgs.map((g, i) => `
      <figure class="pb-photo r${i % 4}">
        <img src="${g.src}" alt="${g.cap}" loading="lazy" data-zoom="1">
        <figcaption>${g.cap}</figcaption>
        <span class="pb-tape"></span>
      </figure>`).join("")}</div>
  </div></section>`;

  /* 08 获奖 — 盖章 */
  html += `<section class="pb-sec pb-awards">${no("06")}<div class="pb-sec-inner">
    ${head("获奖情况", "AWARDS")}
    <div class="pb-stamps">${a.awards.map(w => `
      <div class="pb-stamp">
        <div class="pb-stamp-ring"><span class="pb-stamp-lv">${w.level}</span><span class="pb-stamp-star">★</span></div>
        <div class="pb-stamp-body"><b>${w.name}</b><span>${w.note}</span></div>
      </div>`).join("")}</div>
  </div></section>`;

  html += `</div>`;
  return html;
}

/* ---------- 档案区调度：按 type 选渲染器 ---------- */
function renderArchive(a) {
  if (!a) return "";
  if (a.type === "video") return videoArchiveHTML(a);
  if (a.type === "qcc") return qccArchiveHTML(a);
  if (a.type === "game") return gameArchiveHTML(a);
  return archiveHTML(a);
}

/* ---------- 品管圈档案区（心桥圈 等 QCC 项目） ---------- */
function qccArchiveHTML(a) {
  if (!a) return "";
  const no = n => `<span class="pb-no">${n}</span>`;
  const head = (zh, en) => `<div class="pb-sec-head"><b>${zh}</b><i>${en}</i></div>`;

  let html = `<div class="pb pb-qcc">
    <div class="pb-band">
      <div class="pb-band-l">
        <span class="pb-kicker">QCC ARCHIVE · 品管圈档案</span>
        <p class="pb-band-lead">${a.about.lead}</p>
      </div>
      <div class="pb-stub" aria-hidden="true">
        <span class="pb-stub-no">NO.08</span>
        <span>QCC · PDCA</span>
        <span>2025 春–秋</span>
        <span>康宁医院</span>
      </div>
      <div class="pb-seal" aria-hidden="true"><span>进步率 39.8%</span><b>·</b><span>达成率 156%</span></div>
    </div>

    <!-- 01 圈名与团队 -->
    <section class="pb-sec pb-qcc-about">${no("01")}<div class="pb-sec-inner">
      ${head("圈名与发起", "CIRCLE NAME · 心桥圈")}
      <p class="pb-lead">${a.about.nameNote}</p>
      <div class="pb-qcc-meta">
        <span><b>成立</b>${a.about.founded}</span>
        <span><b>周期</b>${a.about.period}</span>
        <span><b>单位</b>${a.about.org}</span>
        <span><b>圈长</b>${a.about.leader}</span>
        <span><b>辅导员</b>${a.about.advisor}</span>
        <span><b>人数</b>${a.about.members} 人（平均年龄 ${a.about.avgAge} 岁）</span>
      </div>
    </div></section>

    <!-- 02 选题与政策 -->
    <section class="pb-sec pb-qcc-theme">${no("02")}<div class="pb-sec-inner">
      ${head("选题与政策", "THEME · 政策窗口 + 评价矩阵")}
      <p class="pb-lead"><b>活动主题：</b>${a.theme.title}</p>
      <p class="pb-qcc-def"><b>名词定义 ·</b> ${a.theme.def}</p>
      <div class="pb-qcc-policy">
        <span class="pb-qcc-policy-k">POLICY BACKDROP · 政策窗口（4 项）</span>
        <ul>${a.theme.policy.map(p => `<li><b>${p.src}</b> · ${p.text}</li>`).join("")}</ul>
      </div>
      <div class="pb-qcc-matrix">
        <div class="pb-qcc-matrix-head"><b>候选主题（6 项）</b><span>上级政策</span><span>迫切性</span><span>可行性</span><span>圈能力</span><span>总分</span><span>选定</span></div>
        ${a.theme.matrix.map(m => `<div class="pb-qcc-matrix-row${m.star ? ' is-star' : ''}">
          <b>${m.n}</b><span>${m.a}</span><span>${m.b}</span><span>${m.c}</span><span>${m.d}</span><span class="pb-qcc-matrix-t">${m.t}</span><span class="pb-qcc-matrix-mark">${m.star ? '★' : '—'}</span>
        </div>`).join("")}
      </div>
    </div></section>

    <!-- 03 现状与目标 -->
    <section class="pb-sec pb-qcc-baseline">${no("03")}<div class="pb-sec-inner">
      ${head("现状与目标", "BASELINE · 现况值 40.94 → 目标 51.38")}
      <div class="pb-qcc-baseline-grid">
        <div class="pb-qcc-baseline-l">
          <div class="pb-qcc-stat"><span class="pb-qcc-stat-k">现况值</span><b>40.94</b><i>月均可及性指数</i></div>
          <p class="pb-qcc-baseline-desc">${a.baseline.currentDesc}</p>
          <div class="pb-qcc-formula"><b>TARGET FORMULA · 目标值公式</b><p>${a.baseline.formula}</p></div>
          <div class="pb-qcc-stat pb-qcc-stat-target"><span class="pb-qcc-stat-k">目标值</span><b>51.38</b><i>+25.5% 改善期望</i></div>
        </div>
        <figure class="pb-qcc-chart"><img src="${a.baseline.img}" alt="目标设定柱状图" data-zoom="1"><figcaption>目标设定原图 · 现况 40.94 / 目标 51.38</figcaption></figure>
      </div>
    </div></section>

    <!-- 04 真因解析 -->
    <section class="pb-sec pb-qcc-analysis">${no("04")}<div class="pb-sec-inner">
      ${head("真因解析", "ANALYSIS · 鱼骨图 + 柏拉图锁定真因")}
      <div class="pb-qcc-analysis-grid">
        <figure class="pb-qcc-chart"><img src="${a.analysis.fishboneImg}" alt="鱼骨图" data-zoom="1"><figcaption>解析—鱼骨图 · ${a.analysis.fishboneNote}</figcaption></figure>
        <figure class="pb-qcc-chart"><img src="${a.analysis.paretoImg}" alt="柏拉图" data-zoom="1"><figcaption>真因确认—柏拉图 · ${a.analysis.paretoNote}</figcaption></figure>
      </div>
      <div class="pb-qcc-truths">
        <span class="pb-qcc-truths-k">4 项真因（柏拉图累计 80.46%）</span>
        <ul>${a.analysis.truths.map(t => `<li>${t}</li>`).join("")}</ul>
      </div>
    </div></section>

    <!-- 05 对策实施与检讨 -->
    <section class="pb-sec pb-qcc-measures">${no("05")}<div class="pb-sec-inner">
      ${head("对策实施与检讨", "PDCA · 3 项选定对策")}
      <div class="pb-qcc-pdca">
        ${a.measures.map(m => `<article class="pb-qcc-pdca-card">
          <div class="pb-qcc-pdca-head"><span class="pb-qcc-pdca-n">对策${m.n}</span><b>${m.title}</b></div>
          <div class="pb-qcc-pdca-meta">
            <span><b>主要因</b>${m.cause}</span>
            <span><b>负责人</b>${m.who}</span>
            <span><b>时间</b>${m.when}</span>
          </div>
          <p class="pb-qcc-pdca-content">${m.content}</p>
          <div class="pb-qcc-pdca-verify"><b>效果确认</b><span>${m.verify}</span></div>
        </article>`).join("")}
      </div>
    </div></section>

    <!-- 06 效果确认 -->
    <section class="pb-sec pb-qcc-results">${no("06")}<div class="pb-sec-inner">
      ${head("效果确认", "RESULTS · 有形成果 + 无形效果")}
      <div class="pb-qcc-headline">
        ${a.results.headline.map(h => `<div class="pb-qcc-hl"><b>${h.num}<i>${h.unit}</i></b><span>${h.label}</span></div>`).join("")}
      </div>
      <div class="pb-qcc-results-grid">
        <figure class="pb-qcc-chart"><img src="${a.results.tangibleImg}" alt="有形成果" data-zoom="1"><figcaption>有形成果 · ${a.results.tangibleNote}</figcaption></figure>
        <figure class="pb-qcc-chart"><img src="${a.results.intangibleImg}" alt="无形效果" data-zoom="1"><figcaption>无形效果 · ${a.results.intangibleNote}</figcaption></figure>
      </div>
    </div></section>

    <!-- 07 标准化与总结 -->
    <section class="pb-sec pb-qcc-summary">${no("07")}<div class="pb-sec-inner">
      ${head("标准化与总结", "STANDARDIZE · 标准化 + 检讨 + 下一期")}
      <div class="pb-qcc-std">
        <span class="pb-qcc-std-k">STANDARDIZATION · 标准化产出</span>
        <p>${a.summary.standardize}</p>
      </div>
      <div class="pb-qcc-lessons">
        <div class="pb-qcc-lessons-head"><b>活动项目</b><span>优点</span><span>今后努力方向</span></div>
        ${a.summary.lessons.map(l => `<div class="pb-qcc-lessons-row"><b>${l.item}</b><span>${l.pros}</span><span>${l.cons}</span></div>`).join("")}
      </div>
      <div class="pb-qcc-next">
        <span class="pb-qcc-next-k">NEXT THEME · 下一期主题</span>
        <p>${a.summary.nextTheme}</p>
      </div>
    </div></section>
  </div>`;
  return html;
}

/* ---------- 认知训练游戏档案区（game 等体感游戏项目） ---------- */
function gameArchiveHTML(a) {
  if (!a) return "";
  const no = n => `<span class="pb-no">${n}</span>`;
  const head = (zh, en) => `<div class="pb-sec-head"><b>${zh}</b><i>${en}</i></div>`;
  const stat = (s) => `<div class="pb-game-stat"><b>${s.n}</b><span class="pb-game-stat-u">${s.u}</span><i>${s.l}</i></div>`;

  let html = `<div class="pb pb-game">
    <div class="pb-band">
      <div class="pb-band-l">
        <span class="pb-kicker">GAME ARCHIVE · 认知训练游戏档案</span>
        <p class="pb-band-lead">${a.overview.lead}</p>
      </div>
      <div class="pb-stub" aria-hidden="true">
        <span class="pb-stub-no">NO.04</span>
        <span>GAME · COG</span>
        <span>2024</span>
        <span>老年认知</span>
      </div>
      <div class="pb-seal" aria-hidden="true"><span>留存 82.5%</span><b>·</b><span>能力 +24%</span></div>
    </div>

    <!-- 01 项目概览 -->
    <section class="pb-sec pb-game-about">${no("01")}<div class="pb-sec-inner">
      ${head("项目概览", "OVERVIEW · 8 大特点 + 运行环境")}
      <div class="pb-game-features">
        ${a.overview.features.map(f => `<div class="pb-game-feat"><b>${f.k}</b><span>${f.d}</span></div>`).join("")}
      </div>
      <div class="pb-game-env">
        <span class="pb-game-env-k">运行环境 ENVIRONMENT</span>
        <div class="pb-game-env-grid">${a.overview.env.map(e => `<div class="pb-game-env-row"><b>${e.k}</b><span>${e.v}</span></div>`).join("")}</div>
      </div>
    </div></section>

    <!-- 02 五大认知范式 -->
    <section class="pb-sec pb-game-games">${no("02")}<div class="pb-sec-inner">
      ${head("五大认知范式", "GAMES · 5 经典范式 × 5 超市场景")}
      <p class="pb-lead">5 类游戏 × 3 档难度 × 3 关卡 = 45 个训练单元，每类靶向一项老年认知衰退最显著的维度。</p>
      <div class="pb-game-cards">${a.games.map(g => `
        <article class="pb-game-card">
          <div class="pb-game-card-h">
            <span class="pb-game-card-no">${g.no}</span>
            <b>${g.name}</b>
            <span class="pb-game-card-pm">${g.paradigm}</span>
          </div>
          <figure class="pb-game-card-fig"><img src="${g.frame}" alt="${g.name}" data-zoom="1"><figcaption>${g.scene}</figcaption></figure>
          <div class="pb-game-card-tags"><span>${g.ability}</span><i>${g.scene}</i></div>
          <p>${g.brief}</p>
        </article>`).join("")}
      </div>
    </div></section>

    <!-- 03 心理学原理 -->
    <section class="pb-sec pb-game-theories">${no("03")}<div class="pb-sec-inner">
      ${head("心理学原理", "THEORIES · 7 大理论支撑每一个设计决策")}
      <p class="pb-lead">"心理学不是装饰品，而是游戏设计的底层操作系统。"——本项目每一个机制背后都有明确的理论依据。</p>
      <div class="pb-game-theory-wall">${a.theories.map(t => `
        <div class="pb-game-theory">
          <div class="pb-game-theory-h"><b>${t.k}</b><span>${t.en}</span></div>
          <div class="pb-game-theory-ref">${t.ref}</div>
          <p><b>设计应用 ·</b>${t.design}</p>
          <div class="pb-game-theory-proof"><span>验证数据</span><i>${t.proof}</i></div>
        </div>`).join("")}
      </div>
    </div></section>

    <!-- 04 难度梯度与迭代 -->
    <section class="pb-sec pb-game-tuning">${no("04")}<div class="pb-sec-inner">
      ${head("难度梯度与迭代", "TUNING · 3 档心流通道 + 3 项关键迭代")}
      <p class="pb-lead">${a.tuning.lead}</p>
      <div class="pb-game-levels">
        ${a.tuning.levels.map((l, i) => `<div class="pb-game-level${i === 1 ? ' is-core' : ''}">
          <span class="pb-game-level-k">${l.k}</span>
          <div class="pb-game-level-rel">${l.rel}</div>
          <p>${l.state}</p>
          <i>${l.vars}</i>
        </div>`).join("")}
      </div>
      <div class="pb-game-iter">
        <span class="pb-game-iter-k">3 项关键迭代（设计 → 数据验证）</span>
        <div class="pb-game-iter-grid">${a.tuning.iter.map(x => `
          <div class="pb-game-iter-row">
            <b>${x.k}</b>
            <span class="pb-game-iter-before">${x.before}</span>
            <span class="pb-game-iter-arrow">→</span>
            <span class="pb-game-iter-after">${x.after}</span>
          </div>`).join("")}
        </div>
      </div>
    </div></section>

    <!-- 05 实地测试洞察 -->
    <section class="pb-sec pb-game-field">${no("05")}<div class="pb-sec-inner">
      ${head("实地测试洞察", "FIELD TEST · 机构驻场观察 × 设计迭代启示")}
      <p class="pb-lead">${a.field.lead}</p>
      <div class="pb-game-scenes">
        ${a.field.scenes.map(s => `<div class="pb-game-scene"><b>${s.k}</b><p>${s.d}</p></div>`).join("")}
      </div>
      <div class="pb-game-insights">
        <div class="pb-game-insights-h"><b>设计预期</b><b>实地观察</b><b>迭代启示</b></div>
        ${a.field.insights.map(x => `<div class="pb-game-insight-row">
          <span>${x.expect}</span><span>${x.actual}</span><span class="pb-game-insight-l">${x.lesson}</span>
        </div>`).join("")}
      </div>
      <div class="pb-game-photos">
        <span class="pb-game-photos-k">现场实录 FIELD RECORDS · 7 张实地照片（机构驻场观察真实记录）</span>
        <div class="pb-game-photos-grid">${a.field.photos.map(p => `
          <figure class="pb-game-photo">
            <img src="${p.src}" alt="${p.cap}" loading="lazy" data-zoom="1">
            <figcaption>${p.cap}</figcaption>
          </figure>`).join("")}
        </div>
      </div>
    </div></section>

    <!-- 06 数据采集与评估 -->
    <section class="pb-sec pb-game-eval">${no("06")}<div class="pb-sec-inner">
      ${head("数据采集与评估", "DATA · 通用 7 项 + 6 大结论")}
      <p class="pb-lead">${a.evaluation.lead}</p>
      <div class="pb-game-common">
        <span class="pb-game-common-k">通用数据采集项（5 游戏通用，部分跨游戏适用）</span>
        <div class="pb-game-common-grid">${a.evaluation.common.map(c => `<div class="pb-game-common-row"><b>${c.k}</b><span>${c.d}</span></div>`).join("")}</div>
      </div>
      <div class="pb-game-outcomes">${a.evaluation.outcomes.map(s => stat(s)).join("")}</div>
    </div></section>

    <!-- 07 演示与手册 -->
    <section class="pb-sec pb-game-demo">${no("07")}<div class="pb-sec-inner">
      ${head("演示与手册", "DEMO · 实拍 6 帧 + 6 动作规范 + 项目总览")}
      <p class="pb-game-demo-lead">${a.demo.lead}</p>
      <div class="pb-game-frames">${a.demo.frames.map(g => `
        <figure class="pb-game-frame">
          <img src="${g.src}" alt="${g.cap}" loading="lazy" data-zoom="1">
          <figcaption>${g.cap}</figcaption>
        </figure>`).join("")}
      </div>
      <div class="pb-game-actions">
        <span class="pb-game-actions-k">6 大体感动作 ACTION SPEC</span>
        <div class="pb-game-actions-grid">${a.demo.actions.map(ac => `
          <div class="pb-game-action"><span class="pb-game-action-ic">${ac.ic}</span><b>${ac.k}</b><i>${ac.d}</i></div>`).join("")}
        </div>
      </div>
      <div class="pb-game-specs">${a.demo.specs.map(s => `<div class="pb-game-spec"><b>${s.k}</b><span>${s.v}</span></div>`).join("")}</div>
    </div></section>
  </div>`;
  return html;
}


function videoArchiveHTML(a) {
  if (!a) return "";
  const no = n => `<span class="pb-no">${n}</span>`;
  const head = (zh, en) => `<div class="pb-sec-head"><b>${zh}</b><i>${en}</i></div>`;

  let html = `<div class="pb pb-video">
    <div class="pb-band">
      <div class="pb-band-l">
        <span class="pb-kicker">${a.band.kicker}</span>
        <p class="pb-band-lead">${a.band.lead}</p>
      </div>
      <div class="pb-stub" aria-hidden="true">
        <span class="pb-stub-no">${a.band.no}</span>
        <span>SCI-COM</span>
        <span>2024 秋赛</span>
        <span>MV</span>
      </div>
      <div class="pb-seal" aria-hidden="true"><span>${a.band.seal1}</span><b>·</b><span>${a.band.seal2}</span></div>
    </div>`;

  /* 01 创作缘起 */
  html += `<section class="pb-sec pb-origin">${no("01")}<div class="pb-sec-inner">
    ${head("创作缘起", "WHY THIS TOPIC")}
    <p class="pb-lead">${a.origin.lead}</p>
    <div class="pb-cols">${a.origin.paras.map((t, i) => `<p class="${i === 0 ? 'drop' : ''}">${t}</p>`).join("")}</div>
    <div class="pb-theme-grid">
      <div class="pb-callout"><span>CONCEPT / 概念</span><p>${a.origin.concept}</p></div>
      <div class="pb-callout shift"><span>BACKGROUND / 学术背景</span><p>${a.origin.background}</p></div>
    </div>
  </div></section>`;

  /* 02 歌词脚本 */
  const chorusLines = a.lyrics.chorus.map(l => `<span class="pb-lyr-line">${l}</span>`).join('<span class="pb-lyr-sep">/</span>');
  const versesHTML = a.lyrics.verses.map(v => `
      <div class="pb-lyr-v">
        <span class="pb-lyr-no">${v.no}</span>
        <div class="pb-lyr-vbody"><b>${v.t}</b><p>${v.d.split('\n').join('<br>')}</p></div>
      </div>`).join("");
  const outroHTML = a.lyrics.outro.map((l, i) => `<span>${l}</span>${i < a.lyrics.outro.length - 1 ? '<i>·</i>' : ''}`).join("");
  html += `<section class="pb-sec pb-lyrics">${no("02")}<div class="pb-sec-inner">
    ${head("歌词脚本", "LYRICS · 口水歌版")}
    <p class="pb-lead">${a.lyrics.lead}</p>
    <div class="pb-lyr-chorus">${chorusLines}</div>
    <div class="pb-lyr-verses">${versesHTML}</div>
    <div class="pb-lyr-outro">${outroHTML}</div>
  </div></section>`;

  /* 03 视频作品 */
  html += `<section class="pb-sec pb-video-sec">${no("03")}<div class="pb-sec-inner">
    ${head("视频作品", "WATCH · " + a.video.duration)}
    <p class="pb-lead">${a.video.lead}</p>
    <figure class="pb-player">
      <video controls preload="metadata" poster="${a.video.poster}">
        <source src="${a.video.src}" type="video/mp4">
      </video>
      <figcaption>点击播放 · ${a.video.duration} · 校园实拍 + 歌词字幕卡</figcaption>
    </figure>
    <div class="pb-photos pb-photos-wide">${a.video.frames.map((g, i) => `
      <figure class="pb-photo r${i % 4}">
        <img src="${g.src}" alt="${g.cap}" loading="lazy" data-zoom="1">
        <figcaption>${g.cap}</figcaption>
        <span class="pb-tape"></span>
      </figure>`).join("")}</div>
  </div></section>`;

  /* 04 获奖情况 */
  html += `<section class="pb-sec pb-awards">${no("04")}<div class="pb-sec-inner">
    ${head("获奖情况", "AWARDS")}
    <div class="pb-stamps">${a.awards.map(w => `
      <div class="pb-stamp">
        <div class="pb-stamp-ring"><span class="pb-stamp-lv">${w.level}</span><span class="pb-stamp-star">★</span></div>
        <div class="pb-stamp-body"><b>${w.name}</b><span>${w.note}</span></div>
      </div>`).join("")}</div>
  </div></section>`;

  html += `</div>`;
  return html;
}

/* ---------- 图片放大 ---------- */
function ensureLightbox() {
  if (document.getElementById("lbMask")) return;
  const d = document.createElement("div");
  d.id = "lbMask";
  d.className = "lb-mask";
  d.innerHTML = `<button class="lb-close" aria-label="关闭">×</button><img id="lbImg" src="" alt=""><span class="lb-cap" id="lbCap"></span>`;
  document.body.appendChild(d);
  const close = () => d.classList.remove("open");
  d.addEventListener("click", e => { if (e.target === d || e.target.classList.contains("lb-close")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}
function openLightbox(src, cap) {
  ensureLightbox();
  const d = document.getElementById("lbMask");
  document.getElementById("lbImg").src = src;
  document.getElementById("lbCap").textContent = cap || "";
  d.classList.add("open");
}

function openModal(p) {
  modalContent.innerHTML = `
    <button class="close" id="modalClose" aria-label="关闭">×</button>
    <img class="hero" src="${p.img}" alt="${p.title}">
    <div class="body">
      <div class="cat">${p.catName}${p.award ? " · 🏆 " + p.award : ""}</div>
      <h2>${p.title}</h2>
      <div class="yr">${p.year} · ${p.role || ""}${p.team ? " · 团队：" + p.team : ""}</div>
      <h4>品牌概述 / OVERVIEW</h4>
      <p>${p.brief}</p>
      <h4>核心价值 / VALUES</h4>
      <div class="value-row">
        ${p.values.map(v => `<div class="v"><b>${v.k}</b><span>${v.en}</span></div>`).join("")}
      </div>
      <h4>项目故事 / STORY</h4>
      <p>${p.story}</p>
      ${p.link ? `<a class="view-link" href="${p.link}" target="_blank" rel="noopener">🔗 查看完整项目页（在线版）</a>` : ""}
      ${renderArchive(p.archive)}
    </div>`;
  mask.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").addEventListener("click", closeModal);
  mask.querySelector(".modal").scrollTop = 0;

  /* 档案区图片点击放大 */
  modalContent.querySelectorAll("img[data-zoom]").forEach(img => {
    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt || img.closest("figcaption") && "");
    });
  });
}

function closeModal() {
  mask.classList.remove("open");
  document.body.style.overflow = "";
}

if (mask) {
  mask.addEventListener("click", (e) => { if (e.target === mask) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

/* ============================================================
   渲染：简历页
   ============================================================ */
const resumeRoot = document.getElementById("resumeRoot");
if (resumeRoot) {
  const r = resume;
  const experiencesHTML = r.experiences.map(exp => `
    <article class="exp">
      <header>
        <h3>${exp.org}</h3>
        <span class="role">${exp.role}</span>
        <span class="period">${exp.period}</span>
      </header>
      ${exp.bullets ? `<ul>${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
    </article>
  `).join("");

  resumeRoot.innerHTML = `
    <div class="resume-card">
      <header class="resume-head">
        <div>
          <h1>${r.name}</h1>
          <div class="title">${r.title}</div>
        </div>
        <a class="dl" href="resume.pdf" download>📄 下载 PDF 简历</a>
      </header>
      <div class="resume-meta">
        ${r.meta.map(m => `<span>${m}</span>`).join("")}
      </div>

      <section class="resume-section">
        <div class="kicker">SUMMARY / 自我评价</div>
        <p class="lead">${r.summary}</p>
      </section>

      <section class="resume-section">
        <div class="kicker">EDUCATION / 教育背景</div>
        ${r.education.map(e => `
          <div class="edu">
            <div><b>${e.school}</b> · ${e.major}（${e.degree}） · ${e.period} · ${e.gpa}</div>
            <div class="sub">主修课程：${e.courses}</div>
          </div>
        `).join("")}
      </section>

      <section class="resume-section">
        <div class="kicker">EXPERIENCE / 实习经历</div>
        ${experiencesHTML}
      </section>

      <section class="resume-section">
        <div class="kicker">PROJECTS / 关键项目</div>
        <ul class="proj-list">
          ${projects.map(p => `<li><b>《${p.title}》</b> · ${p.year}${p.award ? " · 🏆 " + p.award : ""}<br><span>${p.brief}</span>${p.link ? `<br><a href="${p.link}" target="_blank" rel="noopener" style="color:var(--red);font-size:12.5px;">🔗 查看在线版项目页</a>` : ""}</li>`).join("")}
        </ul>
      </section>

      <section class="resume-section">
        <div class="kicker">AWARDS / 所获荣誉</div>
        <div class="awards">
          ${r.awards.map(a => `<span class="chip">${a}</span>`).join("")}
        </div>
      </section>

      <section class="resume-section">
        <div class="kicker">SKILLS / 个人技能</div>
        <div class="skills">${r.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div>
      </section>
    </div>
  `;
}