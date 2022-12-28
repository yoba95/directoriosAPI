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
            include: [{all: true}]
           /* include: ['localidad',{
                association: db.sare.associations.localidad,
                include: [ 'municipio',
            {
                association: db.localidad.associations.municipio,
                include: ['region'] 
            } ]}]*/
         }
         );
         return res.status(200).json({sares :sares});
        //return res.status(202).json(sares); 
      } catch (error) {
          console.log(error);
           return res.status(500).json({error: "error del servidor"});
      }
   
},

async allSareId (req, res){
    const {id} = req.params;
    try {
      const sare = await db.sare.findByPk(id); 
      
      if(!sare){
        return res.status(404).json( "La Region No Existe");
      } else return res.status(200).json({sare: sare});
    } catch (error) {
         console.log(error);
        return res.status(500).json( "error del servidor"); 
    }
},

async updateSare (req, res){
    
    const {id} = req.params;
    

    try {
        
        const sare = await db.sare.findByPk(id);

        if(!sare){
        return res.status(404).json( "La Region No Existe");
      } else 

        sare.set(req.body);
        await sare.save();

        return res.status(200).json(sare);

    } catch (error) {
         console.log(error);
        return res.status(500).json( "error del servidor");
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

async getRegioMunicipios(req, res){
    try {
        const {id} = req.params;

        const municipios = await db.municipio.findAll({
            where: {regionId: id},
            include: ['region']
        }) ;
        
        return res.status(200).json({municipios:municipios});
    } catch (error) {
        console.log(error);
        return res.status(500).json( "error del servidor"); 
    }
}


}