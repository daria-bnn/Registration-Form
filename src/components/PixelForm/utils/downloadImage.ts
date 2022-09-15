const downloadImage = (ref: React.RefObject<HTMLCanvasElement>) => {
  const canvas = ref.current

  if (!canvas) {
    return
  }

  const url = canvas.toDataURL('image/png')
  const pixel = document.createElement('a')

  pixel.href = url
  pixel.download = 'pixel.png'
  document.body.appendChild(pixel)
  pixel.click()

  document.body.removeChild(pixel)
}

export default downloadImage