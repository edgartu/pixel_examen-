import React , {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


import Normalize from 'normalize-css'
import styles from './App.css'

import Formulario from '../form'

class App extends Component {


render () {


	return (
<div className= {styles.root}> 

<Formulario></Formulario>
					 			
 </div>	

 
		)

}
}

export default App