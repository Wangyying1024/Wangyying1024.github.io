import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-xl z-50 flex justify-between items-center px-8 h-20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
      <Link to="/" className="text-xl font-bold tracking-tighter text-white font-headline">
        王雨莹
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 font-headline tracking-tighter font-semibold">
        <Link 
          to="/" 
          className={`${isActive('/') ? 'text-white border-b-2 border-accent pb-1' : 'text-foreground-muted hover:text-accent'} transition-colors`}
        >
          作品
        </Link>
        <Link 
          to="/about" 
          className={`${isActive('/about') ? 'text-white border-b-2 border-accent pb-1' : 'text-foreground-muted hover:text-accent'} transition-colors`}
        >
          关于
        </Link>
        <Link 
          to="/projects" 
          className={`${isActive('/projects') ? 'text-white border-b-2 border-accent pb-1' : 'text-foreground-muted hover:text-accent'} transition-colors`}
        >
          归档
        </Link>
        <Link 
          to="/contact" 
          className={`${isActive('/contact') ? 'text-white border-b-2 border-accent pb-1' : 'text-foreground-muted hover:text-accent'} transition-colors`}
        >
          联系
        </Link>
        <button className="ml-4 px-6 py-2 btn-gradient text-white text-sm font-semibold rounded-lg hover:scale-95 transition-all active:scale-90">
          简历
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {mobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background-deep/98 backdrop-blur-xl border-t border-white/5 md:hidden">
          <div className="flex flex-col py-4">
            <Link 
              to="/" 
              className="px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              作品
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              关于
            </Link>
            <Link 
              to="/projects" 
              className="px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              归档
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              联系
            </Link>
            <div className="px-8 py-4">
              <button className="w-full px-6 py-3 btn-gradient text-white font-semibold rounded-lg">
                简历
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
