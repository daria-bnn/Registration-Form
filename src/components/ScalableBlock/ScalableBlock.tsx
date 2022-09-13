import React, { FC, useEffect, useRef, useState } from 'react'

import cnScalableBlock from './ScalableBlock.classname'
import TBlockCoords from './types/types'
import getDirection from './utils/getDirection'

import './ScalableBlock.css'

type ScalableBlockProps = {
  classname: string
}

const ScalableBlock: FC<ScalableBlockProps> = ({ classname }) => {
  const [blockCoords, setBlockCoords] = useState<TBlockCoords | undefined>(
    undefined
  )
  const [isResizing, setIsResizing] = useState(false)
  const [direction, setDirection] = useState<string | undefined>(undefined)

  const refBlock = useRef<HTMLDivElement>(null)

  const MIN_SIZE = 20

  useEffect(() => {
    const node = refBlock.current

    if (!node) {
      return
    }

    const coords = node.getBoundingClientRect()

    setBlockCoords({
      x1: coords.left,
      y1: coords.top,
      x2: coords.right,
      y2: coords.bottom,
    })
  }, [refBlock])

  const handleMouseMove = (e: MouseEvent) => {
    if (!blockCoords?.x1) {
      return
    }

    if (!refBlock.current) {
      return
    }

    if (direction === 'topLeft') {
      const width = blockCoords.x2 - e.clientX
      const height = blockCoords.y2 - e.clientY

      if (width > MIN_SIZE && height > MIN_SIZE) {
        refBlock.current.style.width = `${width}px`
        refBlock.current.style.height = `${height}px`

        refBlock.current.style.top = `${e.clientY}px`
        refBlock.current.style.left = `${e.clientX}px`
      }
    }

    if (direction === 'topRight') {
      const width = e.clientX - blockCoords.x1 + 1
      const height = blockCoords.y2 - e.clientY + 1

      if (width > MIN_SIZE && height > MIN_SIZE) {
        refBlock.current.style.width = `${width}px`
        refBlock.current.style.height = `${height}px`

        refBlock.current.style.top = `${e.clientY}px`
      }
    }

    if (direction === 'bottomRight') {
      const width = e.clientX - blockCoords.x1 + 5
      const height = e.clientY - blockCoords.y1 + 5

      if (width > MIN_SIZE && height > MIN_SIZE) {
        refBlock.current.style.width = `${width}px`
        refBlock.current.style.height = `${height}px`
      }
    }

    if (direction === 'bottomLeft') {
      const width = blockCoords.x2 - e.clientX + 1
      const height = e.clientY - blockCoords.y1 + 1

      if (width > MIN_SIZE && height > MIN_SIZE) {
        refBlock.current.style.width = `${width}px`
        refBlock.current.style.height = `${height}px`

        refBlock.current.style.left = `${e.clientX}px`
      }
    }
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    if (blockCoords) {
      const position = getDirection(event, blockCoords, refBlock, 10)
      setDirection(position)

      setIsResizing(true)
    }
  }

  const handleMouseUp = () => {
    setIsResizing(false)

    const node = refBlock.current

    if (!node) {
      return
    }

    const coords = node.getBoundingClientRect()

    setBlockCoords({
      x1: coords.left,
      y1: coords.top,
      x2: coords.right,
      y2: coords.bottom,
    })
  }

  useEffect(() => {
    if (isResizing) {
      document.body.addEventListener('mousemove', handleMouseMove)
      document.body.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])

  return (
    <div
      onMouseDown={handleMouseDown}
      aria-label="scale-block"
      role="button"
      tabIndex={0}
      ref={refBlock}
      className={cnScalableBlock(null, [classname])}
    />
  )
}

export default ScalableBlock
