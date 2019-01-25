const express = require('express');
const app = express();
var mysql      = require('mysql');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// conectar con la base de datos 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pixel'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.get('/', function (req, res) {
  res.send('Hello Edgar!');
});

// Insertar un nuevo Cliente

app.post('/insert', urlencodedParser ,  (req,  res) => {

let post = {identificacion :req.body.identificacion,
		   tipo_idenficacion : req.body.tipo,
		   primer_nombre: req.body.primernombre ,
		   segundo_nombre: req.body.segundonombre ,
		   primer_apellido:req.body.primerapellido,
		   segundo_apellido : req.body.segundoapellido,
		   direccion:req.body.direccion,
		   telefonos: 3012727011,
		   email : req.body.email,
		   ocupacion: req.body.ocupacion,
		   departamento:req.body.departamento ,
		   municipio: req.body.municipio };

let sql = "INSERT INTO clientes SET  ? ";

let query = connection.query(sql, post, (err, result) => {
	 if (err) throw err;
    console.log("1 record inserted");

});

  res.send('Insertado');
});


// eliminar un cliente 


app.get('/delete',  (req, res) => {

let id = {identificacion :32767};

let sql = "DELETE FROM clientes WHERE ? ";

let query = connection.query(sql, id, (err, result) => {
	 if (err) throw err;
    console.log("1 record deleted");

});

  res.send('borrado');
});

// Listar Clientes 

app.get('/listar',  (req, res) => {

let id = {identificacion :12345};

let sql = "SELECT * FROM clientes ";

let query = connection.query(sql, id, (err, result) => {
	 if (err) throw err;
    console.log('listado');
    res.send(result);

});

  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

