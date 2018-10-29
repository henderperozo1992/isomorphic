import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../server/routes';
import Navbar from './Components/Navbar';
import NoMatch from './NoMatch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    // componentDidMount(){
    //     console.log('paso en el Did')

    // }
    // handleClick(e){
    //     let id = e.target.getAttribute('id')
    //     console.log(id)
    // }
    componentWillMount(){
        console.log('paso en el Will')
    }
    render() {
        return (<div>
            <Navbar/>
            <Switch>
            {routes.map(({path, exact, component:C, ...rest})=>
                    <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={(props)=>(
                        <C {...props} {...rest}/>
                    )}
                    />
            )}
            <Route render={(props)=><NoMatch {...props}/>}/>
            </Switch>
        </div>);
    }
}

export default App;
