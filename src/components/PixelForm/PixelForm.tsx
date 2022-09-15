import React, { FC, useEffect, useRef, useState } from 'react'

import createImage from './utils/createImage'
import downloadImage from './utils/downloadImage'
import cnPixelForm from './PixelForm.classname'

import './PixelForm.css'

type TParams = {
  color: string
  transparency: string
}

const PixelForm: FC = () => {
  const [params, setParams] = useState<TParams>({
    color: '#9db1cc',
    transparency: '1',
  })

  const pixelCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const previewPixelCanvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!pixelCanvasRef) {
      return
    }
    createImage(
      previewPixelCanvasRef,
      240,
      80,
      params.color,
      params.transparency
    )
    createImage(pixelCanvasRef, 1, 1, params.color, params.transparency)
  }, [params])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    setParams((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleDownload = () => {
    downloadImage(pixelCanvasRef)
  }

  return (
    <form className={cnPixelForm()}>
      <h2 className={cnPixelForm('Title')}>Битый пиксель </h2>
      <label htmlFor="InputColor" className={cnPixelForm('Field')}>
        <p className={cnPixelForm('Name')}>Выберите цвет</p>
        <input
          name="color"
          value={params.color}
          type="color"
          className={cnPixelForm('Input', { color: true })}
          onChange={handleChange}
          id="InputColor"
        />
      </label>
      <label htmlFor="InputVisibility" className={cnPixelForm('Field')}>
        <p className={cnPixelForm('Name')}>Прозрачность</p>
        <input
          name="transparency"
          value={params.transparency}
          type="range"
          min="0"
          max="1"
          step="0.1"
          className={cnPixelForm('Input', { visibility: true })}
          id="InputVisibility"
          onChange={handleChange}
        />
      </label>
      <div className={cnPixelForm('PreviewImage')}>
        <canvas
          ref={previewPixelCanvasRef}
          width={240}
          height={80}
          className={cnPixelForm('Canvas', { preview: true })}
        />
      </div>
      <button type="button" onClick={handleDownload}  className={cnPixelForm('Button')}>
        Скачать пиксель
      </button>
      <canvas
        ref={pixelCanvasRef}
        width={1}
        height={1}
        className={cnPixelForm('Canvas', { pixel: true })}
      />
    </form>
  )
}

export default PixelForm
