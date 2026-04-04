function About() {
  const skills = [
    '用户体验设计',
    '视觉系统',
    '交互原型',
    '创意指导',
    '排版架构',
    '动效设计',
    '设计工程',
  ]

  return (
    <div className="relative pt-20 pb-32 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Section Header */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-[56px] font-semibold leading-tight tracking-tighter text-gradient">
            关于我
          </h1>
        </header>

        {/* Main Content Card */}
        <section className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden border border-accent/10">
          {/* Geometric Identity */}
          <div className="mb-12 flex justify-start">
            <div className="w-[120px] h-[120px] rounded-full border border-accent/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 blur-xl" />
              <span className="text-white/20 font-black text-2xl tracking-widest">WY</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-16">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted mb-6 font-label">
              简介
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground-muted leading-relaxed">
                我是一名多学科设计师，专注于创造高保真数字体验，在人类直觉与技术精准之间架起桥梁。我的方法植根于"数字观测台"哲学——每个界面都充当一个透镜，用以澄清复杂数据，并将用户交互提升为一场电影般的旅程。
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                凭借建筑几何学和交互设计的背景，我专注于构建优先考虑结构完整性而非肤浅趋势的系统。我相信设计不仅仅是外观，更在于它在真实世界实用性压力下的表现。通过剔除不必要的元素，我为专注而有意义的互动创造空间。
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                目前正在探索空间计算与生成美学的交叉点，我致力于定义下一代视觉语言。当我不做设计时，你会发现我在分析粗野主义建筑的网格系统，或在实验程序化动画节点。
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted mb-8 font-label">
              核心能力
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 border border-accent/30 text-accent rounded-full text-[13px] font-semibold tracking-tight backdrop-blur-sm transition-all duration-300 hover:from-accent-cyan/10 hover:to-accent-purple/10 hover:border-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Accent Glow */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-accent-cyan/10 to-accent-purple/10 blur-[100px] pointer-events-none" />
        </section>
      </div>
    </div>
  )
}

export default About
