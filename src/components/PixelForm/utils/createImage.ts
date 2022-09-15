const createImage = (
  ref: React.RefObject<HTMLCanvasElement>,
  width: number,
  height: number,
  color: string,
  transparency: string
) => {
  if (!ref) {
    return
  }

  const canvas = ref.current

  if (!canvas) {
    return
  }

  const context = canvas.getContext('2d')

  if (!context) {
    return
  }

  context.clearRect(0, 0, width, height)

  context.fillStyle = color
  context.globalAlpha = +transparency
  context.fillRect(0, 0, width, height)
}

export default createImage
