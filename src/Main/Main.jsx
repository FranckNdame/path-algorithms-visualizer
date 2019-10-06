import React, {Component} from 'react'
import Node from './Node/Node'
import './Main.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                Foo
                <Node></Node>
            </div>
        )
    }
}