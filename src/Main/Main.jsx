import React, {Component} from 'react'
import Node from './Node/Node'
import './Main.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        }
    }

    componentDidMount() {
        const nodes = [];
        for (let row = 0; row < 15; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                const currentNode = {
                    col, row
                }
                currentRow.push(currentNode);
            }
            nodes.push(currentRow)
        }
        this.setState({nodes})
    }

    render() {
        const { nodes } = this.state;
        
        return(
            <div className="grid">
                {nodes.map((row, key) => {
                    return <div>{row.map((node, nodeIdx) => <Node></Node>)}</div>
                })}
            </div>
        )
    }
}