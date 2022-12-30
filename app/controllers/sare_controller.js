const db = require('../models'); //prueba exitosa pero con difine
module.exports = {
async createSare(req, res) {
    
    const {idSare, nameSare, nameJefeSare, telefono, email, longitud, latitud, localidadId, region } = req.body;
 
    try {

        const sare = await db.sare.create({
        idSare,
        nameSare,
        nameJefeSare,
        telefono,
        email,
        longitud,
        latitud,
        localidadId,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    //succesfull 
    await sare.addRegion(region, { through: { selfGranted: false }});
       
    return res.status(200).json(sare);
    } catch (error) {
        console.log(error);
        return res.status(500).json("error del servidor"); 
    }
   
},

async allSare (req,res) {
    try {
         const sares = await db.sare.findAll({
          // include: [{all: true}]
          include: ['regions','localidad',{
                association: db.sare.associations.localidad,
                include: [ 'municipio',
            {
                association: db.localidad.associations.municipio,
                include: ['region'] 
            } ]}]
         }
         );
         return res.status(200).json({sares :sares});
      } catch (error) {
          console.log(error);
           return res.status(500).json("error del servidor");
      }
   
},

async addRegionSare(req, res){
    const {id} = req.params;
    const regiones = req.body;
    try {
        const sares = await db.sare.findOne({
            where: {
                id: id
            },
           //include: [{all:true}]
           include: ['regions']

           
        }
        );
        
        const [results, metadata] = await sequelize.query('delete from regionsares where "sareId" ='+id);
        
        const addR = await sares.addRegion(regiones, { through: { selfGranted: false }});
        
        const n = await db.sare.findOne({
            where: {
                id: id
            },
           //include: [{all:true}]
           include: ['regions']
        });
            return res.status(200).json({regiones : n});
        
        
     } catch (error) {
         console.log(error);
          return res.status(500).json({error: "error del servidor"});
     }
},


async deleteSare (req, res){

    const {id} = req.params;

    try {
        const sares = await db.sare.findByPk(id);
         if (!sares){
            return res.status(404).json( "No Existe La Region");
         } else{
            await db.sare.destroy({
            where:{id}
        });
        return res.status(200).json( "La Region Ha Sido Eliminada ");
         }
    

    } catch (error) {
          console.log(error);
            return res.status(500).json( "error del servidor"); 
    }
},




}