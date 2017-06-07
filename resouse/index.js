import React from 'react'
import ReactDOM from 'react-dom'
import node from '../node/index'
import {BrowserRouter,Router,HashRouter,Route,browserHistory,Link} from 'react-router-dom';
const App = ({ match })=>(
<div>
{console.log(match)}
	 <Link to={`${match.url}about`}>
          about
       </Link>
</div>
)
const About = ({ match })=>(
<div>{console.log(match)}
	 <Link to='/'>
          index
       </Link>
</div>
)
ReactDOM.render((
  <BrowserRouter  history={browserHistory}>
  	<div>
    <Route exact path="/" component={App}/>
    <Route exact path="/about" component={About}/>
    </div>
  </BrowserRouter>
), document.getElementById('content'));
