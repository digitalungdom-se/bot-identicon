import BotIdenticon, { BotIdenticonProps } from './BotIdenticon'
import { Face, faces } from './BotFace'

import React from 'react'
import md5 from 'crypto-js/md5'

export interface HashedBotIdenticonProps extends BotIdenticonProps {
  identifier?: string | number
}

export function HashedBotIdenticon({
  identifier,
  face,
  color,
  ...props
}: HashedBotIdenticonProps) {
  let hashedColor: [number, number, number] | undefined = color
  let hashedFace: Face | undefined = face
  const hash: string = md5(identifier?.toString() || '').toString()
  if (Boolean(face) === false)
    hashedFace = faces[(parseInt(hash.substring(9, 10), 16) % faces.length) + 1]
  if (Boolean(color) === false) {
    const hue = parseInt(hash.substring(0, 3), 16) % 361
    const saturation = (parseInt(hash.substring(3, 6), 16) % 51) + 50
    const lightness = (parseInt(hash.substring(6, 9), 16) % 41) + 20
    hashedColor = [hue, saturation, lightness]
  }

  return <BotIdenticon color={hashedColor} face={hashedFace} {...props} />
}

export default HashedBotIdenticon
