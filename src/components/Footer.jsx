function Footer() {
  return (
    <footer className="w-full py-16 bg-background-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-black text-white font-headline tracking-tighter uppercase">
          王雨莹
        </div>
        
        <div className="flex gap-12 font-label text-[11px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="text-foreground-muted hover:text-accent transition-colors">
            设计
          </a>
          <a href="#" className="text-foreground-muted hover:text-accent transition-colors">
            研究
          </a>
          <a href="#" className="text-foreground-muted hover:text-accent transition-colors">
            流程
          </a>
        </div>
        
        <div className="font-label text-[11px] uppercase tracking-[0.2em] font-bold text-foreground-muted">
          © 2024 王雨莹 版权所有
        </div>
      </div>
    </footer>
  )
}

export default Footer
