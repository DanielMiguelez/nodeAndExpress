const express = require("express");
const app = express();
app.use(express.json());

 const productos =  [
    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
  ]

  app.get("/productos", (req, res) => {
    res.send({msg:"Aqui tienes los prrroductos",results:productos});
  });

  app.get("/id/:id", (req, res) => {
    const found = productos.some(producto => producto.id == req.params.id)//para saber si existe lo que busco
    if(found){
        res.send(productos.filter(producto => producto.id == req.params.id))
        //filtramos y devolvemos el miembro que buscamos
    }else{
        //si el miembro que buscamos no existe devovlemos un notfound
        res.status(404).send({msg:`product with id ${req.params.id} not found`})
    }
});

app.post("/productos",(req,res)=>{
    const newProduct ={
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    productos.push(newProduct)
    res.status(201).send({productos})
})

//Para actualizar el producto deseado

app.put("/id/:id",(req,res)=>{
    const found = productos.some(producto => producto.id == req.params.id)//para saber si existe lo que busco
    if(found){
        productos.forEach(producto=>{
            if(producto.id == req.params.id){
                producto.nombre = req.body.nombre ? req.body.nombre : producto.nombre,
                producto.precio = req.body.precio ? req.body.precio : producto.precio
                res.send(producto)
            }
        })
    }else{
        //si el miembro que buscamos no existe devovlemos un notfound
        res.status(404).send({msg:`Product with id ${req.params.id} not found`})
    }
})

/*{
            "id": 5,
            "nombre": "Skin daniel",
            "precio": 555
}*/

app.delete("/id/:id",(req,res)=>{
    const found = productos.some(producto => producto.id == req.params.id)//para saber si existe lo que busco
    if(found){
     //eliminar un member
     res.send(productos.filter(producto => producto.id != req.params.id))
    }else{
        //si el miembro que buscamos no existe devovlemos un notfound
        res.status(404).send({msg:`Producto with id ${req.params.id} not found`})
    }
})

/*{
    "id":2
}*/

//Crear filtro por precio de producto


  app.get("/producto/:precio", (req, res) => {
    const found = productos.some(producto => producto.precio== req.params.precio)//para saber si existe lo que busco
    if(found){
        res.send(productos.filter(producto => producto.precio == req.params.precio))
        //filtramos y devolvemos el miembro que buscamos
    }else{
        //si el miembro que buscamos no existe devovlemos un notfound
        res.status(404).send({msg:`product with precio ${req.params.price} not found`})
    }
});

//filtro por precios entre 50 y 250

 app.get("/precio", (req, res) => {
        res.send(productos.filter((producto) => producto.precio >= 50 && producto.precio <= 250))
});

app.get("/id/:id", (req, res) => {
    res.send(productos.filter(producto => producto.id == req.params.id))
});

app.get("/productos/:nombre", (req, res) => {
    res.send(productos.filter(producto => producto.nombre == req.params.nombre))
});








app.listen("8080", () => {
    console.log("Servidor levantado en el puerto 8080");
  });
  

