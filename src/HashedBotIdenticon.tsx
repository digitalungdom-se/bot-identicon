import { Face, faces } from './BotFace'

import BotIdenticon from './BotIdenticon'
import React from 'react'
import md5 from 'crypto-js/md5'

export interface HashedBotIdenticonProps {
  identifier?: string
  background?: boolean
}

export function HashedBotIdenticon({
  identifier,
  background = false
}: HashedBotIdenticonProps) {
  const hash = md5(identifier || '').toString()
  const hue = parseInt(hash.substring(0, 3), 16) % 361

  const saturation = (parseInt(hash.substring(3, 6), 16) % 51) + 50

  const lightness = (parseInt(hash.substring(6, 9), 16) % 41) + 20

  const face: Face = faces[parseInt(hash.substring(9, 10), 16) % faces.length]

  return (
    <BotIdenticon
      color={[hue, saturation, lightness]}
      face={face}
      background={background}
    />
  )
}

export default HashedBotIdenticon
