import { Link } from 'react-router-dom'
import TextType from '../components/TextType'
import GradualBlur from '../components/GradualBlur'

function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-20 pb-32">
      {/* Hero Section */}
      <section className="flex flex-col items-start text-left space-y-8 py-32">
        <div className="space-y-4 max-w-4xl">
          <p className="text-accent font-bold text-[11px] uppercase tracking-[0.4em] font-label">
            产品设计作品集
          </p>
          <div className="leading-[1.1]">
            <h1 className="text-5xl md:text-[84px] font-semibold leading-[1.1] tracking-[-0.04em] text-gradient mb-0">
              HELLO
            </h1>
            <TextType
              text={["I'm WANG YUYING"]}
              as="h1"
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={false}
              cursorCharacter="|"
              loop={false}
              className="text-5xl md:text-[84px] font-semibold leading-[1.1] tracking-[-0.04em] text-gradient my-0"
            />
            <h3 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-gradient mt-0">
              UX 设计师
            </h3>
          </div>
          <p className="text-foreground-muted text-lg md:text-xl font-body max-w-2xl leading-relaxed">
            以精准与共情打造数字体验。通过深思熟虑的架构设计和电影级视觉叙事，解决复杂问题。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link 
            to="/projects"
            className="px-8 py-4 btn-gradient text-white font-semibold rounded-lg hover:scale-95 transition-all duration-300"
          >
            查看作品
          </Link>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-transparent border border-accent text-accent font-semibold rounded-lg backdrop-blur-sm hover:bg-accent/10 transition-all duration-300"
          >
            联系我
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* View Projects Card */}
          <Link 
            to="/projects"
            className="group relative overflow-hidden glass-card bg-white/[0.05] backdrop-blur-2xl p-12 rounded-xl border border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,240,255,0.2)] flex flex-col justify-between h-[400px]"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-foreground-muted group-hover:text-accent transition-colors">
                arrow_outward
              </span>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple opacity-20 flex items-center justify-center border border-accent">
              <span className="material-symbols-outlined text-accent">grid_view</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white tracking-tighter mb-4">
                查看作品
              </h2>
              <p className="text-foreground-muted text-base leading-relaxed max-w-[280px]">
                探索专注于用户中心设计和数据驱动解决方案的精选案例研究合集。
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-accent/10 rounded-full rotate-45 group-hover:border-accent/30 transition-colors" />
          </Link>

          {/* Contact Card */}
          <Link 
            to="/contact"
            className="group relative overflow-hidden glass-card bg-white/[0.05] backdrop-blur-2xl p-12 rounded-xl border border-accent-purple/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] flex flex-col justify-between h-[400px] md:mt-16"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-foreground-muted group-hover:text-accent-bright transition-colors">
                mail
              </span>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-accent-purple/30 group-hover:border-accent-bright transition-colors">
              <span className="material-symbols-outlined text-accent-bright">alternate_email</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white tracking-tighter mb-4">
                联系我
              </h2>
              <p className="text-foreground-muted text-base leading-relaxed max-w-[280px]">
                让我们在您的下一个数字挑战上合作。开放自由职业机会和创新合作伙伴关系。
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 flex gap-2">
              <div className="w-12 h-12 border border-accent-purple/10 group-hover:border-accent-bright/30 transition-colors" />
              <div className="w-12 h-12 border border-accent-purple/10 group-hover:border-accent-bright/30 transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* Approach Section with GradualBlur */}
      <section className="mt-64 relative" style={{ height: '600px', overflow: 'hidden' }}>
        <div style={{ height: '100%', overflowY: 'auto', padding: '2rem 0' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <p className="text-foreground-muted font-bold text-[11px] uppercase tracking-[0.2em]">
                设计理念
              </p>
              <h3 className="text-4xl font-semibold text-white tracking-tight leading-tight">
                超越美学：<br />设计是功能性的工具
              </h3>
              <p className="text-foreground-muted text-lg leading-relaxed max-w-xl">
                我相信高端设计不仅关乎外观，更在于如何引导焦点。我的流程包括深入研究、严格原型设计，以及对交互细节的细致关注，让数字工具感觉无缝而专业。
              </p>
              <div className="flex gap-8 pt-4">
                <div className="flex flex-col gap-2">
                  <span className="text-white font-bold text-2xl tracking-tighter">04+</span>
                  <span className="text-foreground-muted text-[10px] uppercase font-bold tracking-widest">年经验</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white font-bold text-2xl tracking-tighter">12+</span>
                  <span className="text-foreground-muted text-[10px] uppercase font-bold tracking-widest">全球项目</span>
                </div>
              </div>
              <p className="text-foreground-muted text-lg leading-relaxed max-w-xl pt-8">
                我的设计哲学强调系统思维和细节完美主义的平衡。每个项目都从深入的用户研究开始，通过数据驱动的决策和迭代优化，最终实现卓越的用户体验。
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed max-w-xl">
                在过去的项目中，我专注于构建可扩展的设计系统，确保品牌一致性的同时保持设计的灵活性。我相信优秀的设计应该是无形的——用户不会注意到设计本身，但会感受到流畅、直观的体验。
              </p>
            </div>
            
            <div className="md:col-span-5 relative h-[300px] flex items-center justify-center">
              {/* Geometric Wireframe with gradient colors */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border border-accent/20 rounded-full animate-pulse-slow" />
                <div className="absolute inset-4 border border-accent-bright/30 rounded-full" />
                <div className="absolute inset-8 border border-accent-purple/20 rounded-full" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-bright to-transparent" />
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent-purple/40 rotate-45" />
              </div>
            </div>
          </div>
        </div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="8rem"
          strength={3}
          divCount={8}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </section>
    </div>
  )
}

export default Home
