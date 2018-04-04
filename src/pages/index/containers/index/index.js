import React from 'react'
import { Link } from 'react-router'
import './index.scss'
import Icon from './img/icon.png'
import MiddleImg from './img/react生命周期.jpg'

const Main = props => (
    <div className="hello">
        <Link to="/list">mains 1sss</Link>
        <img src={Icon} alt=""/>
        <img src={MiddleImg} height="200" width="50" alt=""/>
    </div>
)

export default Main