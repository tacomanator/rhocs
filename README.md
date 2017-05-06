# rhoc

React higher-order components for development (debugging & troubleshooting).

Especially good for use with higher-order components or stateless functions.

## Example

```jsx
import React from "react";

const Widget = props => (
  <div>....</div>
);

// Widget props will be output to console.log
export default require('rhocs').logProps()(Widget);
```

## Available HOCs

### logProps([selector])

logs the component's props. A props selector may optionally be passed as can be a string (`'prop1'`), array of strings (`['prop1', 'prop2']`), or function (`(props) => R.omit(['prop1'], props)`). The following example logs only the `name` prop.

```
export default require('rhocs').logProps('name')(Widget)
```

### logRerenderedCount

logs a count of the times the component was rerendered (updated from the outside). Example:

## Installation

Use npm/yarn.

## More

Originally written about [in this post](https://medium.com/@tacomanator/react-helper-order-components-ab657aa1d9eb).
