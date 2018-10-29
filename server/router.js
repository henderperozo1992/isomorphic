import {renderToString} from 'react-dom/server';
import React from 'react';
import {matchPath, StaticRouter} from 'react-router-dom';

import routes from './routes'
import renderFullPage from './renderFullPage';
import App from '../src/App.js';
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../webpack.config.js');
const app = express();

const compiler = webpack(config);




export default function router(req, res){
    
    const match = routes.reduce((acc, route)=> matchPath(req.url, {path:route, exact: true}) || acc, null);

    if(!match){
        res.status(404).send('Página no encontrada');
        return;
    }

    // const context = {}

    // const html = renderToString(
    //     <StaticRouter context={context} location={req.url}>
    //         <App />
    //     </StaticRouter>);
    app.use(webpackDevMiddleware(compiler, {
        serverSideRender: true
    }));
    app.use(webpackHotServerMiddleware(compiler));
    app.listen(3000);
        

    // return res.status(200).send(renderFullPage(html, null))
   
}