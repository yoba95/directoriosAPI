const express = require('express');
const app = express();
const conect = require('./models/index'); 
const { validationResult } = require('express-validator');
const cors = require('cors');
const PORT = parseInt(process.env.PORT) || 7000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require('./routers/User_routes'));
app.use(require('./routers/Role_routes'));
app.use(require('./routers/Employee_routes'));
app.use(require('./routers/School_routes'));
app.use(require('./routers/Regiones_routes'));
app.use(require('./routers/Municipio_routes'));
app.use(require('./routers/Localidad_routes'));
app.use(require('./routers/Director_routes'))
app.use(require('./routers/Supervisor_routes'));
app.use(require('./routers/Sare_routes'));

app.listen(PORT, function(){
     try {
     console.log('servidor corriendo en el puerto: ' +PORT);    
     conect.sequelize.sync({ force:true}).then(() => {
     console.log("Se ha establecido la conexión");
    })
    } catch (error) {
     console.log('Se ha producido un error', error)
    }
})