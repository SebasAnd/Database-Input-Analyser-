const express = require('express');
const { query } = require('express');
const app = express();
const fs = require('fs');
var bodyParser = require('body-parser');

function addElementsToDb(jsonfile){
  const { Client } = require('pg');

  const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'crm',
      password: 'anddan',
      port: 5432,
  });
  for(var i = 0; i < jsonfile.nombres.length;i++){
    client.connect();
    client.query('INSERT into campania (nombres, apellidos, telefonos, direcciones,codigo_camp) VALUES($1, $2, $3,$4,$5)',
                [jsonfile.nombres[i],jsonfile.apellidos[i],jsonfile.telefonos[i],jsonfile.direcciones[i],jsonfile.codigo_camp],(err, res) => {
                  if (err) {
                      console.error(err);
                      return;
                  }    
              });
  }
  console.log('Data insert successful');
}

ShowDb = function (code) {
  return new Promise(function (resolve, reject) {
    const { Client } = require('pg');

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'crm',
        password: 'anddan',
        port: 5432,
    });
    client.connect();
    client.query('SELECT * FROM campania WHERE codigo_camp = $1',[code],(err, res) => {
      
      if (err) {
          console.error(err);
          reject(err);
          return;
      }
      let result = [];
  
      for (let row of res.rows) {
        result.push(row);
        }
  
      resolve(result);
    
    });
  });

};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
  
});
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/save', (req, res) => {

  addElementsToDb(req.body);
  res.json({'message': 'Datos guardados correctamente'});
});
app.get('/getDb', (req, res) => {

  ShowDb(req.query.code).then(function (result) {
    res.json({'results': result});
});
  
});
app.listen(3000, () => {
  console.log('App listening on port 3000!')
});






 
