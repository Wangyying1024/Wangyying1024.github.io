function BackgroundEffects() {
  return (
    <>
      {/* Cinematic Background */}
      <div className="cinematic-bg" />
      
      {/* Grid Overlay */}
      <div className="grid-overlay" />
      
      {/* Noise Texture */}
      <div className="fixed inset-0 z-[-1] noise-texture" />
      
      {/* Ambient Glow Blobs - 荧光蓝紫渐变 */}
      <div className="fixed -top-[400px] -left-[200px] w-[900px] h-[1400px] rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple opacity-[0.08] blur-[120px] animate-float pointer-events-none z-[-1]" />
      <div className="fixed top-[20%] -right-[300px] w-[800px] h-[1200px] rounded-full bg-gradient-to-bl from-accent-purple to-accent-bright opacity-[0.06] blur-[150px] animate-float pointer-events-none z-[-1]" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-[10%] left-[10%] w-[600px] h-[900px] rounded-full bg-gradient-to-tr from-accent-cyan via-accent-bright to-transparent opacity-[0.05] blur-[140px] animate-float pointer-events-none z-[-1]" style={{ animationDelay: '4s' }} />
    </>
  )
}

export default BackgroundEffects
