import Iridescence from './Iridescence'

function BackgroundEffects() {
  return (
    <>
      {/* Iridescence 彩虹色动态背景 */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: -2 }}>
        <Iridescence
          color={[0.5, 0.6, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1}
        />
      </div>
    </>
  )
}

export default BackgroundEffects
