import express from 'express';
import cors from 'cors';
import path from 'path';
import {renderToString} from 'react-dom/server';
import App from '../src/App';
import renderFullPage from './renderFullPage';
import React from 'react';
import {matchPath} from 'react-router-dom';
import routes from './routes'
import {StaticRouter} from 'react-router-dom';

const app = express()
const port = 3000

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('*', (req, res, next)=>{
    const activeRoute = routes.find((route) => matchPath(req.url,route)) || {}

    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve()


    promise.then((data) =>{
        const context = { data }

        const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>)
    res.send(renderFullPage(html, data))
    }).catch(next)


})

app.listen(port, ()=>{
    console.log('Sevidor escuchando el puerto 3000')
})