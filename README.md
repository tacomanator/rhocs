# rhoc

A collection of React higher-order components for useful for development.

Especially useful with other higher-order components and stateless functions.

## Example

```jsx
import React from "react";
import { props } from "rhocs";

const Widget = props => (
  <div>....</div>
);

// Widget's props will be output to console on each rerender
export default props()(Widget);
```

Alternatively, require it inline to make it easy to remove when finished:

```jsx
export default require('rhocs').props()(Widget)
```

## Available HOCs

### changedProps

Logs object containing all props that changed since the last rerender (using shallow comparison).

### props([selector])

Logs all of the component's props. A props selector may optionally be passed as can be a string (`'prop1'`), array of strings (`['prop1', 'prop2']`), or function (`(props) => R.omit(['prop1'], props)`). The following example logs only the `name` prop.

```jsx
export default require('rhocs').logProps('name')(Widget)
```

### rerenderEvent

Log each rerender (updated from the outside) event.

### rerenderCount

Similar to `rerenderEvent` but also keeps track of and logs the count. Useful when there is more than one instance of element type logging rerender events.

## Installation

Use npm/yarn (usually with --dev)

## More

Originally written about [in this post](https://medium.com/@tacomanator/react-helper-order-components-ab657aa1d9eb).
