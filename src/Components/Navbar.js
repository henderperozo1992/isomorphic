import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const languages = [
    {
        name:'All',
        param:'all'
    },
    {
        name:'Javascript',
        param:'javascript'
    },
    {
        name:'Ruby',
        param:'ruby'
    },
    {
        name:'Python',
        param:'python'
    },
    {
        name:'Java',
        param:'java'
    },
]

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div>
            paso
         {languages.map((el,key)=>
                    <NavLink 
                        key={key} 
                        to={'/popular/' + el.param} 
                        activeStyle={{ fontWeight: 'bold', margin:'10px' }}>
                        {el.name}
                    </NavLink>
         )}
        </div> 
        );
    }
}
 
export default Navbar;