```javascript
// pages/index.js

export default function Index() {
  return (
    <div>Hello, Next.js!</div>
  );
}
```

**Explanation:**

The original example used `export default function Home(){...}` which caused issues. The solution renames the default export to `Index` which directly reflects the file name (`pages/index.js`).  Next.js relies on this convention for routing.