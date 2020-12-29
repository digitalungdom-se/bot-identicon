import '@digitalungdom/bot-identicon/dist/index.css'
import './style.css'

import {
  BotIdenticon,
  HashedBotIdenticon,
  faces
} from '@digitalungdom/bot-identicon'

import React from 'react'

/**
 * Source: Stackoverflow https://stackoverflow.com/questions/8495687/split-array-into-chunks#comment110270875_24782004
 * @param array
 * @param chunkSize
 */
function chunk<T>(array: T[], chunkSize: number): T[][] {
  const R = []
  for (let i = 0, len = array.length; i < len; i += chunkSize)
    R.push(array.slice(i, i + chunkSize))
  return R
}

const App = () => {
  var numberArray = []

  for (var i = 1; i <= 20; i++) {
    numberArray.push(i)
  }
  const partitionedNumberArray = chunk(numberArray, 5)
  const partitionedFaces = chunk(faces, 3)
  return (
    <div>
      <div className='outer'>
        {partitionedFaces.map((array) => (
          <div className='middle'>
            {array.map((face) => (
              <div className='inner'>
                <BotIdenticon
                  style={{ verticalAlign: 'top' }}
                  face={face}
                  background
                  size='inherit'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='outer'>
        {partitionedNumberArray.map((array) => (
          <div className='middle'>
            {array.map((i) => (
              <div className='inner'>
                <HashedBotIdenticon
                  style={{ verticalAlign: 'top' }}
                  identifier={i}
                  background
                  size='inherit'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
