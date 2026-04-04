function Contact() {
  const contactMethods = [
    {
      icon: 'chat_bubble',
      label: '微信',
      value: 'wangyuying_design',
      action: 'arrow_forward',
    },
    {
      icon: 'alternate_email',
      label: '邮箱',
      value: 'contact@wangyuying.com',
      action: 'content_copy',
    },
  ]

  return (
    <div className="relative pt-32 pb-32 px-6">
      <div className="max-w-[700px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <header className="w-full mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-gradient mb-4">
            联系方式
          </h1>
        </header>

        {/* Contact Card */}
        <section className="glass-card bg-white/5 p-12 rounded-xl w-full border border-accent/10 flex flex-col items-center gap-12 transition-all duration-300">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted">
              头像
            </span>
            <div className="w-20 h-20 rounded-full border border-accent/50 flex items-center justify-center bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 blur-lg" />
              <span className="material-symbols-outlined text-4xl text-accent relative z-10">
                person
              </span>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-lg font-medium text-foreground">联系方式</h2>
            
            <div className="flex flex-col gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-4 bg-white/3 rounded-xl border border-accent/10 hover:border-accent/30 hover:bg-gradient-to-r hover:from-accent-cyan/5 hover:to-accent-purple/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-accent rounded-lg bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 group-hover:from-accent-cyan/20 group-hover:to-accent-purple/20 transition-all">
                      <span className="material-symbols-outlined text-accent">
                        {method.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground-muted">{method.label}</span>
                      <span className="text-base font-medium text-foreground">{method.value}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-foreground-muted group-hover:text-accent transition-colors">
                    {method.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="w-full pt-8 border-t border-accent/10 text-center">
            <p className="text-sm text-foreground-muted italic font-body leading-relaxed">
              "设计不仅仅是外观和感觉，设计是它如何工作。"
            </p>
          </div>
        </section>

        {/* Bottom Visual Anchor */}
        <div className="mt-16 opacity-30">
          <svg width="200" height="2" viewBox="0 0 200 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="1" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2C7CFD" stopOpacity="0" />
                <stop offset="0.3" stopColor="#2C7CFD" />
                <stop offset="0.7" stopColor="#8B10BF" />
                <stop offset="1" stopColor="#8B10BF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Contact
