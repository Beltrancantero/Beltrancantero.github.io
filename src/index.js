const express =require("express");
const app = express();
const morgan = require("morgan")

app.set("port", process.env.PORT || 8080);

//middkeware
app.use(morgan("dev"));

app.use(express.urlencoded({extended:false}));

//Routes
app.use(require("./routes/index"));


//Iniciando el servidor
app.listen(app.get("port"), ()=> {
    console.log("hola desde el puerto " + app.get("port"));
});