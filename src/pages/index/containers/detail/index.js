import React from 'react'
import './index.scss'

export default class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const { id } = this.props.params
        return <section>
            {`detail-${id}`}
        </section>
    }
}