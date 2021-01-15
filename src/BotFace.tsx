import React from 'react'

export type Face =
  | 'cool'
  | 'evil'
  | 'kiss'
  | 'incognito'
  | 'normal'
  | 'laughing'
  | 'happyEyes'
  | 'heartEyes'
  | 'celebrate'

export interface BotFaceProps {
  face?: Face
}

export const faces: Face[] = [
  'cool',
  'evil',
  'kiss',
  'incognito',
  'normal',
  'laughing',
  'happyEyes',
  'heartEyes',
  'celebrate'
]

const BotFace = ({ face }: BotFaceProps) => {
  switch (face) {
    case 'normal':
      return (
        <g id='normal'>
          <path
            display='inline'
            fill='none'
            stroke='#C3D1E9'
            strokeWidth='3.5'
            strokeLinecap='round'
            strokeMiterlimit='10'
            d='
            M166.9,184.6c1.3,8,8,13.8,15.4,13.9c8.5,0.2,16.1-7.1,16.2-16.4'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M141.7,112.5c0,0-0.6-10.4,13.5-10.2c14.2,0.2,13.2,9.6,13.2,9.6s5.3,45.4-4,50
            c-7.1,3.5-12.1,2.5-12.1,2.5s-9.3-0.2-9.6-7.9S141.7,112.5,141.7,112.5z'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M198.5,118c0,0-0.5-9.3,11.7-9.1s11.4,8.6,11.4,8.6s4.6,40.5-3.5,44.6
            c-6.1,3.1-10.4,2.2-10.4,2.2s-8-0.2-8.3-7.1C199,150.4,198.5,118,198.5,118z'
          />
        </g>
      )

    case 'happyEyes':
      return (
        <g id='happyEyes'>
          <path
            display='inline'
            fill='none'
            stroke='#C3D1E9'
            strokeWidth='3.5'
            strokeLinecap='round'
            strokeMiterlimit='10'
            d='
            M166.9,184.6c1.3,8,8,13.8,15.4,13.9c8.5,0.2,16.1-7.1,16.2-16.4'
          />
          <g display='inline'>
            <path
              fill='#C3D1E9'
              d='M197.1,152.4c5.1-8.2,9.7-16.7,13.7-25.6c-2.5,0-5,0-7.6,0c3.9,8.1,8.3,15.9,13.3,23.3
                c1.3,1.9,3.9,2.9,6,1.6c1.9-1.2,2.9-3.9,1.6-6c-5-7.4-9.4-15.2-13.3-23.3c-1.3-2.8-6.2-2.9-7.6,0c-4,8.8-8.5,17.4-13.7,25.6
                c-1.2,1.9-0.5,4.9,1.6,6C193.3,155.1,195.8,154.4,197.1,152.4L197.1,152.4z'
            />
          </g>
          <g display='inline'>
            <path
              fill='#C3D1E9'
              d='M140.3,150.6c5.1-8.2,9.7-16.7,13.7-25.6c-2.5,0-5,0-7.6,0c3.9,8.1,8.3,15.9,13.3,23.3
                c1.3,1.9,3.9,2.9,6,1.6c1.9-1.2,2.9-3.9,1.6-6c-5-7.4-9.4-15.2-13.3-23.3c-1.3-2.8-6.2-2.9-7.6,0c-4,8.8-8.5,17.4-13.7,25.6
                c-1.2,1.9-0.5,4.9,1.6,6C136.5,153.3,139,152.6,140.3,150.6L140.3,150.6z'
            />
          </g>
        </g>
      )

    case 'laughing':
      return (
        <g id='laughing'>
          <path
            display='inline'
            fill='#C5D1EB'
            d='M142.3,177.4c-0.2-1.4-0.6-8.2,10.5-3.6c0.2,0.1,0.3,0.1,0.5,0.1
        c13.6,2.4,45,7.4,61.9-3.2c0.4-0.3,0.9-0.4,1.5-0.4c0,0,0,0,0.1,0c1.6,0.1,2.7,1.7,2.3,3.3c-2,7.2-10.5,31.6-36.3,38.1
        c-0.4,0.1-0.8,0.1-1.2,0.1c-6-0.6-28.7-0.9-39.2-34C142.3,177.7,142.3,177.5,142.3,177.4z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M156.6,140.7c-6.5,0.3-7.4,8.4-14.5,8.8c-2.9,0.2-6.4-0.9-8.4-3.4
        c-4.8-6.1,1.3-19.1,9.2-26c2.5-2.2,5.1-4.4,9.1-5.1c11.3-1.9,22.8,11,24.7,21.7c0.2,1.3,1.3,7.1-1.3,8.7c-1.3,0.8-2.9,0.2-4.4-0.3
        C162.3,142.2,157.9,140.7,156.6,140.7z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M207.2,141.4c-5.4-0.4-7.5,5.9-12.4,5c-3-0.6-4.6-3.4-4.7-3.7c-1.9-3.6,0.3-7.8,1.4-9.9
        c0.5-0.9,6.6-12.5,16.3-11.5c5.4,0.5,8.9,4.7,11.4,7.8c0.7,0.8,4.7,5.8,4.8,12.5c0.1,2.3-0.4,3.3-1,3.8c-1.6,1.5-4.8,0.5-7.8-0.4
        C209.6,143.2,209.9,141.6,207.2,141.4z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M219.1,144.3c0,0-4.4,29.4,12.1,22.2C247.7,159.2,219.1,144.3,219.1,144.3z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M226.9,118.9c-5.7-1.6-6.9-12.1-14-15.1c-4.6-1.9-8.6,0.4-11-2.7c-0.7-1-1.5-2.6-0.9-3.6
        c0.6-0.9,2.3-0.7,4-0.5c6.8,0.9,10,2.6,11.6,3.5c2.4,1.4,4.3,2.4,7.7,6.8c0,0,2,2.6,4.2,7.6c0.8,1.7,1.3,3.2,0.7,3.8
        C228.7,119.4,227.4,119,226.9,118.9z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M157.9,92.9c0,0-20,7.6-28.9,23.3c0,0.1-0.1,0.1-0.1,0.2c-0.3,0.4-0.6,0.8-0.9,1.2
        c-1.5,1.9-4.6,1.1-4.9-1.3c0,0,0-0.1,0-0.1c-0.1-0.6,0-1.2,0.3-1.7c3.4-6.5,13.2-19.5,23.1-23.8c0.4-0.2,2.4-0.8,2.8-1
        c6.3-1.9,6.8-1.9,8.4-1.9c0.7,0,1.4,0.3,2,0.8C160.7,89.8,161.9,91.8,157.9,92.9z'
          />
        </g>
      )

    case 'heartEyes':
      return (
        <g id='heartEyes'>
          <path
            display='inline'
            fill='#F07B9A'
            d='M150.5,156.7c-10.9-11.6-46.9-53.5-14.2-67c0.8-0.3,1.7-0.5,2.6-0.3
            c4.5,0.6,11.9,4.1,12.5,12.6c0,0.5,0.1,1.1,0,1.6c-0.1,10.8-4.3-12.8,14.3-12.1c9.1,0.2,10.9,14.3,11.3,18.2c0.1,0.6,0,1.3-0.1,1.9
            c-1,5.6-6.6,35.7-19.3,45.7C155.5,159,152.4,158.7,150.5,156.7z'
          />
          <path
            display='inline'
            fill='#F07B9A'
            d='M208.8,158.7c-5.9-7.2-41.3-52.1-8.4-61.9c0.2-0.1,0.5-0.1,0.7-0.1
            c3.8,0.4,11.1,4,11,12.1c0,0.5,0,0.9-0.1,1.4c-0.9,9.5-2.8-11.5,13.4-9.5c7.8,0.9,8.5,13,8.6,16.6c0,0.7-0.1,1.3-0.2,1.9
            c-1.4,5.5-9.5,34.5-22.9,39.9C210.2,159.5,209.3,159.3,208.8,158.7z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M143,176.9c-0.2-1.4-0.6-8.2,10.5-3.6c0.2,0.1,0.3,0.1,0.5,0.1c13.6,2.4,45,7.4,61.9-3.2
            c0.4-0.3,0.9-0.4,1.5-0.4c0,0,0,0,0.1,0c1.6,0.1,2.7,1.7,2.3,3.3c-2,7.2-10.5,31.6-36.3,38.1c-0.4,0.1-0.8,0.1-1.2,0.1
            c-6-0.6-28.7-0.9-39.2-34C143.1,177.1,143,177,143,176.9z'
          />
        </g>
      )

    case 'incognito':
      return (
        <g id='incognito'>
          <path
            display='inline'
            fill='#C5D1EB'
            d='M112.6,134h1.1h26.6c0,0,35.8,14.1,73.2,6c27.8,2.4,28.5,2.5,28.5,2.5s-23.1,10-61.8,10
        S112.6,134,112.6,134z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M156.3,84.7c-0.9-0.5-1.9-0.1-2.3,0.8c-2.2,5.3-9,22-9.4,33.5c0,0.8,0.6,1.6,1.4,1.7
        c8.7,1.2,54.5,7.5,64.3,4.6c0.8-0.2,1.3-1.1,1.1-1.9c-1.7-8.8-6.2-34.3-8.4-34.3l-34,2.4L156.3,84.7z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M141.5,152.4c5.8,1.7,23.2,6.5,31.9,6.4c0.8,0,1.5,0.7,1.4,1.6
        c-0.9,12.4-0.9,12.9-2.5,16.4c-1.4,2.9-6.7,9.3-11.5,11.4c-1.7,0.7-3.6,0.7-5.2-0.1c-7.4-3.4-14.9-9-15.5-23.2l-0.4-11.1
        C139.6,152.8,140.5,152.1,141.5,152.4z'
          />
          <path
            display='inline'
            fill='#C5D1EB'
            d='M190,158.8c5.4-0.3,21.1-1.2,27.8-2.5c1.1-0.2,2.1,0.7,2,1.8
        c-0.7,13.6-1.7,27.2-13.8,29.1c-0.1,0-0.2,0-0.2,0c-12,0.8-15.2-11-15.4-12.1c0-0.1,0-0.1,0-0.2l-2-14.3
        C188.2,159.8,189,158.9,190,158.8z'
          />
        </g>
      )

    case 'kiss':
      return (
        <g id='kiss'>
          <g display='inline'>
            <path
              fill='#C3D1E9'
              d='M170.8,179.5c1.6,0.1,3.2,0.6,4.6,1.3c0.8,0.4,1.7,0.9,2.4,1.5c0.2,0.1,1.8,1.6,1.7,1.7c0,0,0-0.2,0-0.2
            c0.1-0.4,0.1-0.4-0.2,0.1c-0.1,0.1-0.2,0.2-0.3,0.3c-0.5,0.5-1.3,0.9-1.9,1.2c-1.7,0.8-3.5,1.5-5.3,2.2c-1.1,0.4-2,1.2-2.1,2.5
            c-0.1,1.1,0.3,2.5,1.4,3c1.8,0.8,3.6,1.7,5.4,2.8c0.8,0.5,1.6,1,2.4,1.5c0.2,0.1,0.6,0.4,0.7,0.5c0-0.1-0.1-0.5,0,0
            c0,0.3-0.1,0.6-0.4,1c-0.4,0.5-1,0.9-1.5,1.3c-1.4,1.1-2.9,1.9-4.6,2.2c-1.6,0.3-2.5,2.2-2.1,3.7c0.5,1.7,2.1,2.4,3.7,2.1
            c2.6-0.5,4.9-1.9,7-3.6c2.1-1.6,3.8-3.7,3.9-6.5c0.2-3.1-1.9-4.9-4.2-6.4c-2.3-1.5-4.7-2.7-7.1-3.8c-0.2,1.8-0.5,3.7-0.7,5.5
            c2.6-1,5.5-1.9,7.9-3.4c2.6-1.7,5.1-4.7,3.8-8c-1-2.6-3.7-4.6-6-5.9c-2.6-1.5-5.4-2.3-8.4-2.5c-1.6-0.1-3,1.5-3,3
            C167.8,178.2,169.2,179.3,170.8,179.5L170.8,179.5z'
            />
          </g>
          <path
            display='inline'
            fill='#F07B9A'
            d='M207.6,207.8c0,0-23-39.6,4.3-47.1c6.2,1,8.9,0.3,8.8,11.4c-0.1,11.1-2.8-5.4,8.8-4.4
        c7.5,4.1,6.8,13.8,4.8,16.6C232.3,187,217.3,207.3,207.6,207.8z'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M218.8,149.1c-3.8-2.6-9.6-4.1-12.8-4.3c-1.6-0.1-4.8,0.9-11.3,2.8
        c-2.2,0.6-3.8,1.2-6,0.7c-1.8-0.4-4.9-1.6-5.5-3.8c-0.8-3.2,3.6-6.6,6.1-8.5c1.6-1.2,6.3-4.8,13.4-5.3c5.7-0.4,9.9,1.3,11,1.7
        c1.4,0.6,4.4,1.9,7,4.9c1.5,1.7,3.8,4.3,3.5,7.7c-0.2,2-1.3,4.5-3,4.9C220.2,150.1,219.2,149.4,218.8,149.1z'
          />
          <g display='inline'>
            <path
              fill='#C3D1E9'
              d='M189.1,122.4c4.2-5.4,10.1-8,16.7-7.5c1.6,0.1,3.3,0.5,5.1,1c1.9,0.6,3.7,1.3,5.5,2.1
            c3.9,1.8,7.6,4,11.2,6.3c3.3,2,6.3-3.2,3-5.2c-7.7-4.7-15.9-9.6-25.1-10.2c-8-0.5-15.7,3-20.6,9.3c-1,1.3-1.2,3,0,4.2
            C185.9,123.4,188.1,123.7,189.1,122.4L189.1,122.4z'
            />
          </g>
          <path
            display='inline'
            fill='#C3D1E9'
            d='M159.4,107.5l-11.2,0.4c0,0-6.3-0.6-7.3,5.9c-0.4,6.8-0.6,41.9,1.5,42.9
        c4.5-1.9,6.9-2.6,12.5-2.4c5.5,0.1,9.2,3.4,9.2,3.4s3.5-13.2,3.5-28.2c0.9-15-3.7-19.3-3.7-19.3S162,107.9,159.4,107.5z'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M169.1,94c0,0-14-2.1-26.3,6.6S122.8,116,122.8,116s-5.3,2.8-4.8-4.2
        c5.7-7.2,16.9-23.4,30.2-25.6c13.1-0.9,20.1-0.1,22.2,1.3S174.3,92.2,169.1,94z'
          />
        </g>
      )

    case 'evil':
      return (
        <g id='evil'>
          <path
            fill='#C3D1E9'
            d='M140.2,112.5c0,0-0.6-10.4,13.5-10.2c14.2,0.2,13.2,9.6,13.2,9.6s5.3,45.4-4,50c-7.1,3.5-12.1,2.5-12.1,2.5
        s-9.3-0.2-9.6-7.9S140.2,112.5,140.2,112.5z'
          />
          <path
            fill='#C3D1E9'
            d='M195.4,114.7c0,0-0.5-9.3,11.7-9.1c12.2,0.2,11.4,8.6,11.4,8.6s4.6,40.5-3.5,44.6
        c-6.1,3.1-10.4,2.2-10.4,2.2s-8-0.2-8.3-7.1C195.9,147.1,195.4,114.7,195.4,114.7z'
          />
          <path
            fill='none'
            stroke='#C3D1E9'
            strokeWidth='3.5'
            strokeLinecap='round'
            strokeMiterlimit='10'
            d='M163.8,183.1
        c1.3,8,8,13.8,15.4,13.9c8.5,0.2,16.1-7.1,16.2-16.4'
          />
          <path
            fill='#C3D1E9'
            d='M130.6,87.6c6.7,0,34.3-9.7,45.9,31.8c1.1,3.9-3.7,4.6-5.7,1.1c-0.1-0.3-1.4-2.7-1.5-3
        c-1.8-4.1-23.3-20.9-39.7-23.1c-1.1-0.2-2.1-0.8-2.6-1.9c-0.8-1.6-0.2-2.9,1.3-4.1C128.9,87.9,129.7,87.6,130.6,87.6z'
          />
          <path
            fill='#C3D1E9'
            d='M188.8,118.5c2.2-5.4,8.7-22.9,35-20.5c0.3,0,0.5,0.1,0.7,0.2c2.5,1.1,2.2,3,1.9,3.9
        c-0.1,0.3-0.4,0.6-0.8,0.7c-4,0.7-30.3,5.6-33.5,19.3c-0.1,0.5-0.9,1.1-1.9,0.5C190.3,122.6,187.5,121.6,188.8,118.5z'
          />
        </g>
      )

    case 'cool':
      return (
        <g id='cool'>
          <path
            display='inline'
            fill='none'
            stroke='#C3D1E9'
            strokeWidth='3.5'
            strokeLinecap='round'
            strokeMiterlimit='10'
            d='
        M166,189.7c1.3,8,8,13.8,15.4,13.9c8.5,0.2,16.1-7.1,16.2-16.4'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M192.3,165.3c-1-7.7-2-23.6-2.3-28.5c-0.1-1.1-0.6-2.1-1.4-2.8c-1.9-1.5-5.9-3.5-11-0.3
        c-1.1,0.7-1.8,1.8-1.8,3.1c-0.2,5.6-1.1,21.2-1.3,25.7c0,0.9-0.4,1.7-0.6,2.5c-1.4,5.4-8.9,17.9-18,16c-3.1,0.5-17.3-4.7-19-17.8
        c0-0.2,0-0.3,0-0.5c-0.3-13.7-1.1-27.9-1.1-27.9c-0.1-2.3-4.8-5.2-9.7-7.8c-0.6-0.3-1-0.7-1.4-1.2c-0.1-0.1-0.1-0.2-0.2-0.3
        c-1.9-3.1,1.3-6.8,4.7-5.6l8.5,3.1c0.6,0.2,1.3,0.3,2,0.2c4.4-0.7,22.5-3.3,31.1,1.4c0.7,0.4,1.4,0.5,2.2,0.4
        c4.9-0.5,6.3-1.8,11.2-1.1c5.3,0.7,6.9,2.5,10.4,2.2c3.5-0.3,11.4-4.8,28.4,1c0.7,0.2,1.5,0.3,2.2,0.1c3-0.8,5.2-1.4,6.5-1.8
        c1-0.3,2-0.2,2.9,0.3c1.4,0.8,2.8,2.3,0.4,4.8c-0.2,0.2-0.4,0.4-0.7,0.5c-4.9,3.2-8.2,5.1-8.2,6.9l-1,24c0,0.7-0.2,1.5-0.5,2.2
        c-1.6,3.7-7.5,15.6-16.1,15.6c-8.9,0-14.7-10.8-16-13.5C192.4,166.2,192.3,165.8,192.3,165.3z'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M123.4,96.6c0,0,34.9-20.9,54.5,20.7c-0.3,5.5-3.7,6.6-8.8,0.6
        c-3.8-5.3-15.2-13.4-23.8-13.4c-8.6,0-20.6-0.7-20.6-0.7S118.9,101.7,123.4,96.6z'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M188.7,120.7c0,0,2.3-27.8,36.5-21.2c5,1.6,6.5,4,6.5,4s1.3,3.1-1.5,3.6
        c-4.6,0.6-23.5-1.2-31.8,9.2c-6.2,7-6.1,6.7-6.1,6.7S188.3,124.6,188.7,120.7z'
          />
        </g>
      )
    case 'celebrate':
      return (
        <g id='celebrate'>
          <path
            d='m 135.53661,149.51379 c 0,0 -2.04745,-29.48326 17.60756,-36.0351 19.65551,-6.55184 30.71124,39.72 21.29347,36.58108 -9.41816,-3.13942 -10.78273,-6.82483 -15.8336,-5.73285 -5.05038,1.09197 -12.5577,13.51266 -17.47157,11.05572 -4.91388,-2.45694 -5.59635,-5.86935 -5.59635,-5.86935 z'
            fill='#c2d2eb'
          />
          <path
            d='m 190.19524,142.90395 c 0,0 3.9834,-21.36846 17.28157,-22.91343 15.63361,-1.81675 19.11053,36.77708 12.2567,32.65119 -6.85293,-4.12539 -7.03493,-8.3449 -11.19772,-8.37479 -4.1631,-0.03 -11.32772,8.85277 -14.85863,6.18254 -3.54582,-2.68183 -3.48212,-7.54551 -3.48212,-7.54551 z'
            fill='#c2d2eb'
          />
          <path
            d='M 227.42969 168.11719 C 227.42969 168.11719 216.29833 169.13632 212.17383 171.53125 C 208.04923 173.926 208.38672 182.49219 208.38672 182.49219 L 172.02539 179.41211 L 170.78516 178.80078 C 170.78516 178.80078 167.8644 178.74269 164.125 178.91797 C 160.38562 179.09327 159.91797 182.13281 159.91797 182.13281 L 159.91797 188.5 C 159.91797 188.5 161.02799 192.53175 164.00781 192.70703 C 166.98764 192.88232 169.79367 193.0576 170.72852 192.70703 C 171.6633 192.35642 172.74609 191.40039 172.74609 191.40039 L 215.74219 192.92578 C 215.74219 192.92578 228.89398 188.34091 230.66797 187.36523 C 232.44195 186.38955 233.9928 182.97379 233.2832 177.60742 C 232.57351 172.24096 227.42969 168.11719 227.42969 168.11719 z M 214.91797 174.0918 C 215.74591 174.16995 216.61378 174.8988 217.37109 176.16602 C 218.23584 177.61352 218.88719 179.64756 219.17969 181.82031 C 219.47294 183.99306 219.38434 186.1255 218.93359 187.75 C 218.48284 189.3745 217.70614 190.35717 216.77539 190.48242 C 215.84539 190.60692 214.8362 189.86352 213.9707 188.41602 C 213.10595 186.96777 212.45461 184.93372 212.16211 182.76172 C 211.86886 180.58897 211.95745 178.45653 212.4082 176.83203 C 212.85895 175.20753 213.63566 174.22411 214.56641 174.09961 C 214.68266 174.08395 214.79969 174.08063 214.91797 174.0918 z'
            fill='#c2d2eb'
          />
          <path
            d='m 143.66641,162.92345 c 0.67564,-0.25336 20.23549,33.16617 -3.13323,48.47279 -7.832,0.24818 0.78852,-4.68088 4.44099,-18.80653 2.65534,-10.26974 -2.83792,-18.60954 -5.82335,-28.65228 1.98645,-3.93901 5.27757,-0.2928 4.51549,-1.01367 z'
            fill='#c2d2eb'
          />
          <ellipse
            cx='242.46393'
            cy='53.136204'
            rx='10.582736'
            ry='9.9587507'
            fill='#703bea'
          />
          <ellipse
            cx='69.72049'
            cy='253.31961'
            rx='9.9380999'
            ry='10.384756'
            fill='#ff0000'
          />
          <path
            d='m 33.425164,220.885 c 0,0 11.908702,0.97006 20.316492,-4.15389 2.044849,-1.24628 12.39769,8.45879 12.39769,8.45879 0,0 -10.707732,11.44871 -29.98325,8.0382 -1.754556,-0.31047 -1.58396,-4.63489 -1.58396,-4.63489 z'
            fill='#da5ee1'
          />
          <path
            d='m 221.88445,93.0052 c 0,0 5.35337,14.36964 17.32857,20.42749 11.9747,6.05784 23.38642,5.35336 24.51339,3.8037 1.12697,-1.54966 1.26787,-5.63516 0.70439,-7.04392 -0.56348,-1.40876 -0.70439,-2.39494 -2.53584,-5.49426 -1.83145,-3.09932 -9.29806,-0.28175 -15.9196,-4.64899 -6.62154,-4.367225 -14.51064,-15.073618 -14.51064,-15.214617 0,-0.140888 -9.57975,8.170995 -9.57975,8.170995 z'
            fill='#f8ff29'
          />
          <path
            d='m 70.766231,73.545687 c 0,0 14.374639,-4.201795 18.576536,-9.951552 C 93.544665,57.844379 97.303965,48.9985 97.303965,48.9985 l 12.383695,0.221145 c 0,0 3.31722,14.37464 -11.499715,26.316342 -14.816632,11.941698 -21.893453,9.288071 -21.893453,9.288071 z'
            fill='#f1613f'
          />
          <path
            d='m 223.6444,240.03653 c 0,0 0.92514,13.18267 12.14271,19.08052 11.21757,5.89785 20.35248,4.27869 20.35248,4.27869 l 1.15638,-10.40774 c 0,0 -10.04676,-2.01665 -15.14862,-5.20387 -4.82478,-3.01383 -6.13915,-13.09667 -7.51662,-12.60468 -6.47583,2.31284 -10.98573,4.85688 -10.98573,4.85688 z'
            fill='#04c066'
          />
        </g>
      )
    default:
      return (
        <g id='normal'>
          <path
            display='inline'
            fill='none'
            stroke='#C3D1E9'
            strokeWidth='3.5'
            strokeLinecap='round'
            strokeMiterlimit='10'
            d='
        M166.9,184.6c1.3,8,8,13.8,15.4,13.9c8.5,0.2,16.1-7.1,16.2-16.4'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M141.7,112.5c0,0-0.6-10.4,13.5-10.2c14.2,0.2,13.2,9.6,13.2,9.6s5.3,45.4-4,50
        c-7.1,3.5-12.1,2.5-12.1,2.5s-9.3-0.2-9.6-7.9S141.7,112.5,141.7,112.5z'
          />
          <path
            display='inline'
            fill='#C3D1E9'
            d='M198.5,118c0,0-0.5-9.3,11.7-9.1s11.4,8.6,11.4,8.6s4.6,40.5-3.5,44.6
        c-6.1,3.1-10.4,2.2-10.4,2.2s-8-0.2-8.3-7.1C199,150.4,198.5,118,198.5,118z'
          />
        </g>
      )
  }
}

export default BotFace
