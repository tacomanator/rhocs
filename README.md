# rhoc

React higher-order components for development (debugging & troubleshooting).

Especially good for use in React apps that use many higher-order components or stateless functions.

## Example

```jsx
import React from "react";

const Widget = props => (
  <div>....</div>
);

// Widget props will be output to console.log
export default require('rhocs').logProps()(Widget);
```

## Installation

Use npm/yarn.

## More

Originally written about [in this post](https://medium.com/@tacomanator/react-helper-order-components-ab657aa1d9eb).
