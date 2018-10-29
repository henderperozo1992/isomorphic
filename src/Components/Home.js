import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data:this.props.data }
    }
    render() { 
        return (
           <div>Hola Mundo</div>
          );
    }
}
 
export default Home;