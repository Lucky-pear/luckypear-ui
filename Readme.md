<br />
<p align="center">
  <a href="https://github.com/Lucky-pear/luckypear-landing">
    <img src="https://raw.githubusercontent.com/Lucky-pear/luckypear-landing/master/public/logo512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lucky Pear UI</h3>

  <p align="center">
    This is lucky pear's design system
    <br />
    <br />
    <a href=""><del>View Demo</del></a>
    ·
    <a href="https://github.com/Lucky-pear/luckypear-ui/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/Lucky-pear/luckypear-ui/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>
</p>


## Lucky Pear Design System
```
 We will drive you to the best practice for UI/UX
```

### Dev notes
* [Journal](https://www.notion.so/luckypear/Storybook-8de0ed2c866b46998396813569ae8eaa)


### Built With
* React.js
* TypeScript
* Storybook
* Emotion
* Rollup

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* yarn
```sh
  yarn add luckypear-ui @emotion/core
```
* npm
```sh
  npm install luckypear-ui @emotion/core
```
we are installing @emotion/core because it is in peerDependency.

<!-- USAGE EXAMPLES -->
## Usage

### Text

```tsx
  import { Text } from 'luckypear-ui'
  
  const App: React.FC = () => {
    return (
      <>
        <Text type="title">
          We support lazy devlopers.
        </Text>
        <Text type="subtitle" color="grey">
          We write codes to write less codes.
          Focus on your code, rest will be done by us.
        </Text>
      </>
    );
  }
```

> The link below will be updated after storybook build bundle is deployed

Please refer to [Storybook]()