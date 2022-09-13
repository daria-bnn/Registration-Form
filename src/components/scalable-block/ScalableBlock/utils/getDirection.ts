import TBlockCoords from "../types/types"

const getDirection = (
  event: React.MouseEvent,
  coords: TBlockCoords,
  element: React.RefObject<HTMLDivElement>,
  size: number
): string | undefined => {
  if (!element.current) {
    return undefined
  }

  const width = element.current.clientWidth
  const height = element.current.clientHeight

  const isTop = event.clientY - coords.y1 < size
  const isLeft = event.clientX - coords.x1 < size
  const isBottom = coords.y1 + height - event.clientY < size
  const isRight = coords.x1 + width - event.clientX < size

  if (isTop && isLeft) {
    return 'topLeft'
  }

  if (isTop && isRight) {
    return 'topRight'
  }

  if (isBottom && isRight) {
    return 'bottomRight'
  }

  if (isBottom && isLeft) {
    return 'bottomLeft'
  }

  return undefined
}

export default getDirection
