import React from 'react'
import { Link } from 'react-router'
import './index.scss'

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return <ul className="hello">
            <li><Link to="detail/1">1</Link></li>
            <li><Link to="detail/2">2</Link></li>
            <li><Link to="detail/3">3</Link></li>
            <li><Link to="detail/4">4</Link></li>
        </ul>
    }
}