import React , {Component} from 'react'

import styles from './form.css'

import {render} from 'react-dom'





class form extends Component {
  constructor (props) {
    super (props)
           
    }


render () {


  
    return (



      <div className={styles.root}>
           <div className={styles.header}>
         <h1 className={styles.title}> 4to Pixel </h1>
         <h2>(Registro - Clientes)</h2>
           </div>

          <div className={styles.formulario} >
           <form method='POST'  action="http://localhost:3000/insert">

           <label htmlFor="Id">Identificación</label>
                 <input type="text" name='identificacion'/>

         <label htmlFor="">Tipo de Identificacion</label>
            <select type='text' name='tipo'>
 				 <option value="CC">CC</option>
 				 <option value="RC">RC</option>
  				<option value="TI">TI</option>
 				 <option value="AS">AS</option>
 				 <option value="MS">MS</option>
 				 <option value="PA">PA</option>

			</select>

         <label htmlFor="PrimerNombre">Primer  Nombre</label>
                 <input type="text" name='primernombre'/>

         <label htmlFor="SegundoNombre">Segundo Nombre</label>
                 <input type="text" name='segundonombre'/>

         <label htmlFor="PrimerApellido">Primer Apellido</label>
                 <input type="text" name='primerapellido'/>

          <label htmlFor="SegundoApellido">Segundo Apellido</label>
                 <input type="text" name='segundoapellido'/>

          <label htmlFor="Direccion">Dirección</label>
                 <input type="text" name='direccion'/>

            <label htmlFor="Telefono">Teléfonos</label>
                 <input type="text" name='telefono'/>

          <label htmlFor="Email">Email</label>
                 <input type="text" name='email'/>

          <label htmlFor="OCupacion">Ocupación</label>
                 <input type="text" name='ocupacion'/>

          <label htmlFor="Departamento">Departamento</label>
                 <input type="text" name='departamento'/>

          <label htmlFor="Municipio">Municipio</label>
                 <input type="text" name='municipio'/>

    <input className={styles.button} type="submit" value='registrar'/>

           </form>



          </div>
       </div>
      
      )
  
}


}



export default  form;