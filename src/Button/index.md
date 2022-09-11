---
nav:
  title: Button 按钮
  path: /components
  query: q=button
---

基本用法:

```tsx
import React from 'react';
import { Button } from 'shuang';

export default () => (
  <>
    <div>
      <Button type="default" size="large" >default</Button>
      <Button type="primary" size="large" >Primary</Button>
      <Button type="warning" size="large">warning</Button>
      <Button type="error" size="large">error</Button>
    </div>
    <div>
      <Button type="default" >default</Button>
      <Button type="primary" >Primary</Button>
      <Button type="warning" >warning</Button>
      <Button type="error" >error</Button>
    </div>
    <div>
      <Button type="default" size="small" >default</Button>
      <Button type="primary"size="small" >Primary</Button>
      <Button type="warning" size="small">warning</Button>
      <Button type="error" size="small">error</Button>
    </div>
    <div>
      <Button type="primary" loading>default</Button>
      <Button type="primary">default</Button>
      <Button type="link">link</Button>
      <Button ghost>ghost</Button>
    </div>
  </>
);
```

