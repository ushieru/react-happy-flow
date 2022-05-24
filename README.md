# React Happy Flow
Make your React code more readable. Say hello to flows with components
## Install
```bash
npm i react-happy-flow
```
## Doc
### - If
Before:
```js
export default function App() {
  return condition
        ? <div>Hello World</div>
        : <div>Goodbye World</div>
}
```
After:
```js
import { If, Else } from 'react-happy-flow'

export default function App() {
  return <If condition={true}>
    <div>Hello World</div>
    <Else>
      <div>Goodbye World</div>
    </Else>
  </If>
}
```
### - Switch
Before:
```js
export default function App() {
  return condition == 0
        ? <div>Off</div>
        : condition == 1
            ? <div>On</div>
            : <div>Default</div>
}
```
After:
```js
import { Switch, Case, Default } from 'react-happy-flow'

export default function App() {
  return <Switch condition={2}>
    <Case condition={1}>On</Case>
    <Case condition={0}>Off</Case>
    <Default>Default</Default>
  </Switch>
}
```
### - For
Before:
```js
const array = [1, 2, 3]

export default function App() {
  return {
      array
      .filter((item) => item % 2 === 0)
      .map((item) => <div key={item}>{item}</div>)
  }
}
```
After:
```js
import { For } from 'react-happy-flow'

const array = [1, 2, 3]

export default function App() {
    return <For
        collection={array}
        filter={(item) => item % 2 === 0}
        map={(item, index) => <div key={index}>{item}</div>}
    />
}
```