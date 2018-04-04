import React from 'react'
import { Link } from 'react-router'
import './index.scss'
import Icon from './img/icon.png'
import MiddleImg from './img/react生命周期.jpg'
import BigImg from './img/微众前端交互.png'

const Main = props => (
    <div className="hello">
        <Link to="/list">mains 1sss</Link>
        <img src={Icon} alt=""/>
        <img src={MiddleImg} height="200" width="50" alt=""/>
        <img src={BigImg} height="200" width="200" alt=""/>
    </div>
)

export default Main