import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient-accent animate-gradient-shift">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            页面未找到
          </h2>
          <p className="text-foreground-muted text-lg max-w-md mx-auto">
            您访问的页面不存在或已被移动。
          </p>
        </div>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-lg hover:scale-95 transition-all duration-300"
        >
          <span className="material-symbols-outlined">home</span>
          返回首页
        </Link>
      </div>
    </div>
  )
}

export default NotFound
