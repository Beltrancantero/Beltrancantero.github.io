const { Router } = require("express");
const router = Router ();

//rutas POST

router.post("/rutepost",  (req, res)  => {
    console.log("PRIMERA PRUEBA POST");
    console.log(req.body);
    res.json({
        id:"001",
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        curso: req.body.curso,
        idioma:req.body.idioma
    });
});

router.post("/rutepost2",  (req, res)  => {
    console.log("rodivres le ne adamall arto edsed ,edon ed alosnoc al ne aloh");
    res.send("rodivres le ne adamall bew anu edsed aloh");
});

router.post("/rutepostJSON",  (req, res)  => {
    console.log("hola en la app de postman, desde otra llamada en el servidor");
    res.json("hola desde otra ruta post pero esta vez sin JSON");
});

router.post("/rutepostMacarena",  (req, res)  => {
    console.log("hola en la app de postman, desde la pista de baile");
    res.send("dale a tu cuerpo alegria macarena");
});

router.post("/rutepost47",  (req, res)  => {
    console.log("hola en la app de postman, desde el numero 47");
    res.send("47");
});

//Rutas GET
router.get("/ruteGet",  (req, res)  => {
    console.log("hola en la consola de node, desde una llamada en el servidor");
    console.log(req.body);
    res.json({
        id:"001",
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        curso: req.body.curso,
        idioma:req.body.idioma
    });
});

router.get("/ruteGetInversa",  (req, res)  => {
    console.log("rodivres le ne adamall arto edsed ,edon ed alosnoc al ne aloh");
    res.send("rodivres le ne adamall bew anu edsed aloh");
});

router.get("/ruteGetJSON",  (req, res)  => {
    console.log("hola en la consola de node, desde otra llamada en el servidor");
    res.json("hola desde otra web llamada en el servidor pero esta vez con JSON");
});

router.get("/ruteGetMacarena",  (req, res)  => {
    console.log("hola en la consola de node, desde la pista de baile");
    res.send("dale a tu cuerpo alegria macarena");
});

router.get("/ruteGet47",  (req, res)  => {
    console.log("hola en la consola de node, desde el numero 47");
    res.send("47");
});


module.exports = router;