import React, { Component } from 'react';

class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log('paso en el test1')
    }
    render() {
        return (<div>ESTO ES TEST1</div>);
    }
}

export default Test1;