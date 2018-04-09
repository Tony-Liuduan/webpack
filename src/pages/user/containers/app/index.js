import React from 'react'
import { userName } from '../../components/feature1'
import ImgUser from './img/icon.png'
import './index.scss'

const App = props => {
    return <div>
        <p><a href="/index.html">返回主页</a></p>
        <p>用户姓名：{userName}</p>
        <p>用户头像：<img src={ImgUser} alt="" /></p>
    </div>
}

export default App
