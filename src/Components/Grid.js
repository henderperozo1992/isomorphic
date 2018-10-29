import React, { Component } from 'react';

class Grid extends Component {
    constructor(props) {
        super(props);
       let repos

       if(__isBrowser__){
           repos = window.__INITIAL_DATA__
           delete window.__INITIAL_DATA__
       }else{
           repos = this.props.staticContext.data
       }

       this.state = {
           repos,
       }
    }
    render() {
        const {repos} = this.state
        return ( 
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                {repos.map((el, key) =>
                        <li key={key} style={{ margin: 30 }}>
                            <ul>
                                <li><a href={el.html_url}>{el.name}</a></li>
                                <li>@{el.owner.login}</li>
                                <li>{el.stargazers_count}</li>
                            </ul>
                        </li>

                    )}
            </ul>
         );
    }
}

export default Grid;