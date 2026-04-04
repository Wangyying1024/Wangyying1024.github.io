function Projects() {
  const projects = [
    {
      category: '系统架构',
      icon: 'hub',
      title: '核心体验升级项目',
      description: '通过数据驱动的架构转变和精准聚焦的交互模型，重新设计基础用户旅程。',
    },
    {
      category: 'AI 与认知',
      icon: 'psychology',
      title: 'AI 智能助手 IP 升级',
      description: '定义下一代智能代理的视觉识别和行为模式，在实用性与个性之间架起桥梁。',
    },
    {
      category: '设计运营',
      icon: 'layers',
      title: 'UI 组件库升级',
      description: '可扩展的设计令牌和原子组件结构，专为性能、一致性和跨平台可访问性而构建。',
    },
    {
      category: '战略研究',
      icon: 'insights',
      title: '未来移动范式 2025',
      description: '专注于手势导航和情境感知界面的探索性概念设计，构建后应用时代生态系统。',
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-32 md:py-48">
      {/* Section Header */}
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tighter mb-4 text-gradient">
          精选作品
        </h1>
        <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_20px_40px_-20px_rgba(0,240,255,0.3),0_20px_40px_-20px_rgba(139,92,246,0.2)] hover:bg-white/8"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted font-label">
                {project.category}
              </span>
              <div className="w-16 h-16 rounded-xl border border-accent/30 flex items-center justify-center bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 group-hover:border-accent group-hover:from-accent-cyan/20 group-hover:to-accent-purple/20 transition-all">
                <span className="material-symbols-outlined text-accent text-3xl">
                  {project.icon}
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4 text-gradient leading-tight">
              {project.title}
            </h3>
            
            <p className="text-foreground-muted leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-accent text-sm font-semibold tracking-tighter group-hover:gap-4 transition-all">
              查看案例研究
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
