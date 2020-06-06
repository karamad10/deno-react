import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import { React } from "https://unpkg.com/es-react";
import { App } from "./app.tsx";

export async function render() {
  //@ts-ignore
  let body = ReactDOMServer.renderToString(<App />);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset=utf-8>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hi from Begin!</title>
  <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
</head>
<body>
      <div id="app">${body}</div>
  <script type="module" src="/_static/browser.js"></script>
</body>
</html>
`;
}
