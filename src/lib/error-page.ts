export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Erro inesperado</title>
    <style>
      :root {
        color-scheme: dark;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #05030b;
        color: #ffffff;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        padding: 24px;
      }
      .wrap {
        max-width: 420px;
        text-align: center;
      }
      h1 { font-size: 1.5rem; margin: 0 0 0.5rem; }
      p { color: #929292; margin: 0 0 1.5rem; line-height: 1.5; }
      .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      button {
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.13);
        background: #111111;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 8px;
        font-size: 0.95rem;
      }
      button:hover { background: #171717; }
      button.primary { background: #ff0000; border-color: #ff0000; }
      button.primary:hover { background: #b80000; border-color: #b80000; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>Algo deu errado</h1>
      <p>Não foi possível carregar esta página. Tente novamente ou volte para o início.</p>
      <div class="actions">
        <button class="primary" onclick="window.location.href='/'">Voltar ao início</button>
        <button onclick="window.location.reload()">Tentar novamente</button>
      </div>
    </div>
  </body>
</html>`;
}
