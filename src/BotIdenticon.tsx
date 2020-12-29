import * as React from 'react'

import BotFace, { BotFaceProps } from './BotFace'

import BotShape from './BotShape'

export interface BaseBotIdenticonProps {
  style?: React.CSSProperties
  size?: number | 'inherit'
  background?: boolean
}

export interface BotIdenticonProps extends BotFaceProps, BaseBotIdenticonProps {
  color?: [number, number, number]
}

export const BotIdenticon = ({
  background,
  color,
  face,
  size,
  style
}: BotIdenticonProps) => {
  return (
    <svg
      version='1.1'
      baseProfile='tiny'
      x='0px'
      y='0px'
      viewBox='0 0 300 300'
      overflow='visible'
      width={size === 'inherit' ? undefined : size === undefined ? 200 : size}
      style={style}
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
