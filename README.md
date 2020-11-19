<img src="https://raw.githubusercontent.com/adelhult/BotIdenticon/main/preview.png" width="200"/>

# Bot Identicon
A React component that deterministically generates robot icons based on the given input. See example code below:
```jsx
<BotIdenticon 
  identifier="john von neumann"
  size={500}
/>
```
## Dependencies
[Crypto-js](https://www.npmjs.com/package/crypto-js) is needed to hash the identifier.

## Props
* `identifier` - the default is an empty string
* `size`       - the size of the icon, default is 200px

## Credit
The original robot design is by @charlesmaddock and @digitalungdom-se
