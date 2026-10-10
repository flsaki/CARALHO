# Floresta do Crepúsculo

Versão estática do site, pronta para GitHub Pages. Não precisa de servidor, banco de dados, login ou variáveis secretas. O visual e as páginas do manual foram mantidos.

## Como abrir e editar no Visual Studio Code

1. Extraia o ZIP em uma pasta.
2. Abra essa pasta no Visual Studio Code (**Arquivo → Abrir Pasta**).
3. Abra **Terminal → Novo Terminal**.
4. Instale o [Node.js 22](https://nodejs.org/) se ainda não tiver instalado.
5. Rode `npm install` e depois `npm run dev`.
6. Abra o endereço local que aparecer no terminal.

## Como publicar no GitHub Pages (uma vez só)

1. Crie um repositório no GitHub.
2. No Visual Studio Code, abra **Controle do Código-Fonte** (ícone de ramificação à esquerda).
3. Clique em **Publicar no GitHub** ou inicialize o repositório e envie os arquivos para a branch `main`.
4. No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** como fonte de publicação.
5. Pronto. O workflow incluído publica o site automaticamente a cada envio para `main` ou `master`. Veja o endereço em **Settings → Pages** ou na aba **Actions**.

## Importante sobre fichas e reclamações

Sem servidor, os dados ficam no `localStorage` do navegador em que foram cadastrados. Eles não são enviados ao GitHub e não aparecem automaticamente para outras pessoas ou outros dispositivos. Limpar os dados do navegador também pode apagá-los. O conteúdo do manual e o design não dependem desses dados.
