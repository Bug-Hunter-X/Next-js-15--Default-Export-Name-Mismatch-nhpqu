```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello, Next.js!</div>
  );
}
```

This simple Next.js 15 app might unexpectedly throw an error if there's a mismatch between the file name (`pages/index.js`) and the default export's name within the file.  For example, if the export is named something other than `Home`, it'll cause issues.  This is a subtle error because the syntax may appear correct at first glance.