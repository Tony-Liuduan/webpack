import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
//import ReactAddonsCssTransitionGroup from 'react-addons-css-transition-group';
import {
    IndexRedirect,
    Route,
    Router,
    Redirect,
    hashHistory
} from 'react-router'
import App from './containers/app'
import IndexComponent from './containers/index'
import { asyncComponent } from '../../components_common/asyncComponent'
import '../../style/index.scss'
//console.log(ReactAddonsCssTransitionGroup)

const rootElement = document.getElementById('root')
const ListComponent = asyncComponent(() => import(/* webpackChunkName: "list" */ "./containers/list"))
const DetailComponent = asyncComponent(() => import(/* webpackChunkName: "detail" */ "./containers/detail"))
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="index" />
            <Route path="index" component={IndexComponent} />
            {/* <Route path="list" getComponent={(location, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./containers/list').default)
                }, 'list')
            }} />
            <Route path="detail/:id" getComponent={(location, callback) => {
                require.ensure([], function (require) {
                    callback(null, require('./containers/detail').default)
                }, 'detail')
            }} /> */}
            <Route path="list" component={ListComponent} />
            <Route path="detail/:id" component={DetailComponent} />
        </Route>
        <Redirect from="*" to="/index" />
    </Router>, 
    rootElement
)