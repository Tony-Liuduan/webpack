import React from 'react'
import { Link } from 'react-router'
import { Cells } from 'lm-cell'
import MiddleImg from './img/react生命周期.jpg'
import './index.scss'


const Main = props => (
    <div className="hello">
        <Link to="/list">查看详情</Link>
        <br/>
        <br/>
        <a href="/user.html">个人中心</a>
        <br/>
        <br/>
        <br/>
        <img src={MiddleImg} height="400" width="300" alt=""/>
        <Cells>Cells</Cells>
    </div>
)

export default Main