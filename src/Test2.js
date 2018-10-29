import React, { Component } from 'react';

class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log('paso en el test2')
    }
    render() { 
        return ( <div>ESTO ES TEST2</div> );
    }
}
 
export default Test2;