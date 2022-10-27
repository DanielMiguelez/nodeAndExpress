const express = require("express");
const app = express();
app.use(express.json())

app.get('/',(req, res) => {
  res.send("Mensaje de bievenida");
});

app.get('/products/:name',(req, res) => {
    res.send("lista de productos");
  });

app.post('/products',(req, res) => {
    res.send("lista de productos");
  });


app.put('/products',(req, res) => {
      res.send("actualizar producto");
    });

app.delete('/products',(req, res) => {
    res.send("delete product");
    });

app.get('/usuarios',(req, res) => {
    res.send("get usuarios");
    });

app.post('/usuarios',(req, res) => {
    res.send("listado de usuario");
    });

app.put('/usuarios',(req, res) => {
    res.send("crear un usuario");
    });

app.delete('/usuarios',(req, res) => {
    res.send("borrar un usuario");
    });



app.listen("8080", () => {
  console.log("Servidor levantado en el puerto");
});
