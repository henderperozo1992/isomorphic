import Home from '../src/Components/Home'
import Grid from '../src/Components/Grid'
import {fetchPopularRepos} from './api/index'

const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/popular/:id',
        component:Grid,
        fetchInitialData: (path = '') =>  fetchPopularRepos(path.split('/').pop()) ,
       
    }
    
]

export default routes;