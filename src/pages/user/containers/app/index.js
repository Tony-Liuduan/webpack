import React from 'react'
import { userName } from '../../components/feature1'
import ImgUser from './img/icon.png'
import './index.scss'


console.log(Promise)
const App = props => {
    Object.assign({}, {a:1})
    // array index
    const assets = [1,3];
    for (const [value, key] of assets.entries()) {
        console.log(value, key)
    }
    [1, 2, 3].includes(3)
    return <div>
        <p><a href="/index.html">返回主页</a></p>
        <p>用户姓名：{userName}</p>
        <p>用户头像：<img src={ImgUser} alt="" /></p>
    </div>
}

export default App
