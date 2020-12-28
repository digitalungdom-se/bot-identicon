# @digitalungdom/bot-identicon

<img src="preview.png" width="200"/>

# Bot Identicon

A React component that deterministically generates robot icons based on the given input. See example code below.

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@digitalungdom/bot-identicon.svg)](https://www.npmjs.com/package/@digitalungdom/bot-identicon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

`BaseBotIdenticonProps`: props for all identicons
| Name | Type | Default | Description |
|------------|----------------------|---------|--------------------|
| size | `'inherit' | number` | `200` | size of the icon |
| background | `boolean` | `false` | display background |

`BotIdenticonProps`
Inherits BaseBotIdenticonProps
| Name | Type | Default | Description |
|-------|-----------------------------------------------------------------------------------------------------|----------|-----------------------|
| color | `[h: number, s: number, l: number]` | `[216, 81, 51]` | color in HSL-values |
| face | `'cool' \| 'evil' \| 'kiss' \| 'incognito' \| 'normal'\| 'laughing' \| 'happyEyes' \| 'heartEyes'` | `normal` | face of the identicon |

`<HashedBotIdenticon>`

- `identifier` - string that will deterministically create colors and a face with md5

`Face`

## Dependencies

[Crypto-js](https://www.npmjs.com/package/crypto-js) is needed to hash the identifier.

## Credit

The original robot design is by @charlesmaddock and @digitalungdom. The code for this repo was originally developed by @adelhult. The transitition to TypeScript and publishing as a reusable component was made by @nautman.

## License

MIT © [digitalungdom-se](https://github.com/digitalungdom-se)
