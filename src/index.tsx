import * as React from 'react'

import BotFace, { BotFaceProps } from './BotFace'

import BotShape from './BotShape'

export { default as HashedBotIdenticon } from './HashedBotIdenticon.js'

interface BotIdenticonProps extends BotFaceProps {
  identifier?: string
  color?: [number, number, number]
  size?: number
  background?: boolean
}

export const BotIdenticon = ({
  background,
  color,
  face,
  size = 200
}: BotIdenticonProps) => {
  return (
    <svg
      version='1.1'
      baseProfile='tiny'
      x='0px'
      y='0px'
      viewBox='0 0 300 300'
      overflow='visible'
      width={size}
      height={size}
    >
      <BotShape
        h={color ? color[0] : undefined}
        s={color ? color[1] : undefined}
        l={color ? color[2] : undefined}
        background={background}
      />
      <BotFace face={face} />
    </svg>
  )
}

export default BotIdenticon
