import serialize from 'serialize-javascript';
export default function renderFullPage(html, name){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Your SSR REACT ROUTER NOD APP INITIALISED WITH DATA!</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="http://104.248.61.187:3000/static/css/main.4fd15187.css" rel="stylesheet">
        <script src='/bundle.js' defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
    </head>
    <body>
        <div id="root">${html}</div>
    </body>
    </html>`
}