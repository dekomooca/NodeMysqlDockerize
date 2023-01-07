 const express = require('express')
 const app = express()
 const port = 3000
 // Aqui faço a criaçao da conexao e implementacões para o mysql
 const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
 };
 const mysql = require('mysql')
 const connection = mysql.createConnection(config)

 const sql = `INSERT INTO people(name) values ('Andre')`
 connection.query(sql)
 connection.end()

 app.get('/', (req,res) => {
    res.send('<h1>Andre Rocha - dev</h1>')
 })

 app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
 })