import ColorBends from './ColorBends'

function BackgroundEffects() {
  return (
    <>
      {/* ColorBends 动态背景 - 蓝紫渐变 */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: -2 }}>
        <ColorBends
          colors={["#2C7CFD", "#9F2AD2", "#8B10BF"]}
          rotation={0}
          speed={0.15}
          scale={1.2}
          frequency={1}
          warpStrength={0.8}
          mouseInfluence={0.5}
          parallax={0.3}
          noise={0.1}
          transparent={true}
          autoRotate={0.02}
        />
      </div>

      {/* Cinematic Background */}
      <div className="cinematic-bg" style={{ zIndex: -1 }} />
      
      {/* Grid Overlay */}
      <div className="grid-overlay" style={{ zIndex: -1 }} />
      
      {/* Noise Texture */}
      <div className="fixed inset-0 noise-texture" style={{ zIndex: -1 }} />
      
      {/* Ambient Glow Blobs - 荧光蓝紫渐变 */}
      <div className="fixed -top-[400px] -left-[200px] w-[900px] h-[1400px] rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple opacity-[0.08] blur-[120px] animate-float pointer-events-none" style={{ zIndex: -1 }} />
      <div className="fixed top-[20%] -right-[300px] w-[800px] h-[1200px] rounded-full bg-gradient-to-bl from-accent-purple to-accent-bright opacity-[0.06] blur-[150px] animate-float pointer-events-none" style={{ zIndex: -1, animationDelay: '2s' }} />
      <div className="fixed bottom-[10%] left-[10%] w-[600px] h-[900px] rounded-full bg-gradient-to-tr from-accent-cyan via-accent-bright to-transparent opacity-[0.05] blur-[140px] animate-float pointer-events-none" style={{ zIndex: -1, animationDelay: '4s' }} />
    </>
  )
}

export default BackgroundEffects
