export function renderErrorPage(message = "Something went wrong.") {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Error</title>
</head>
<body style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #f8fafc;">
  <div style="text-align: center; padding: 2rem;">
    <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">Oops!</h1>
    <p style="opacity: 0.8;">${message}</p>
  </div>
</body>
</html>`;
}
