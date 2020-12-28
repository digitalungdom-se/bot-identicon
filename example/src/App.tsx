import '@digitalungdom-se/bot-identicon/dist/index.css'

import BotIdenticon, {
  HashedBotIdenticon
} from '@digitalungdom-se/bot-identicon'

import React from 'react'

const App = () => {
  return (
    <div>
      <BotIdenticon />
      <BotIdenticon face='laughing' />
      <HashedBotIdenticon identifier='Eli Adelhult' background />
      <HashedBotIdenticon identifier='Douglas Bengtsson' background />
      <HashedBotIdenticon identifier='Simon Sondén' background />
      <HashedBotIdenticon identifier='Kelvin Szolnoky' background />
    </div>
  )
}

export default App
