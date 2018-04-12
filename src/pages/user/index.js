import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
import '../../style/index.scss'


const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
    rootElement
)