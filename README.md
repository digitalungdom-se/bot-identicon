# @digitalungdom/bot-identicon

<img src="preview.png" width="200"/>

# Bot Identicon

A React component that deterministically generates robot icons based on the given input. See example code below.

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@digitalungdom/bot-identicon.svg)](https://www.npmjs.com/package/@digitalungdom-se/bot-identicon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @digitalungdom/bot-identicon
```

## Usage

```tsx
import React, { Component } from 'react'

import BotIdenticon from '@digitalungdom/bot-identicon'

class Example extends Component {
  render() {
    return <BotIdenticon identifier='john von neumann' size={500} />
  }
}
```

## Props

- `identifier` - the default is an empty string
- `size` - the size of the icon, default is 200px
- `color` - manually set the color `[h, s, l]`
- `face` - manually set the face int in interval `[0..7]`
  they come in this order:
  cool, evil, kiss, incognito, normal,
  laughing, happyEyes, heartEyes.

## Dependencies

[Crypto-js](https://www.npmjs.com/package/crypto-js) is needed to hash the identifier.

## Credit

The original robot design is by @charlesmaddock and @digitalungdom. The code for this repo was originally developed by @adelhult.

## License

MIT © [digitalungdom-se](https://github.com/digitalungdom-se)
