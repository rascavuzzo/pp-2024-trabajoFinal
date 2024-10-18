const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const usuarioRouter = require("./routes/personaRoutes");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/usuarios", usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en puerto ${PORT}`);
})