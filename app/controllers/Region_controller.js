const db = require('../models'); //prueba exitosa pero con difine
module.exports = {

async createRegion(req, res) {
    const { nameRegion } = req.body;

    try {
         const region = await db.region.create({
        nameRegion,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return res.status(200).json(region);
    } catch (error) {
        console.log(error);
        return res.status(500).json("error del servidor"); 
    }
   
},

async allRegion(req,res){
    try {
        const regiones = await db.region.findAll();
    return res.status(200).json({regiones :regiones});
    } catch (error) {
         console.log(error);
        return res.status(500).json( "error del servidor"); 
    }
    
},

async allRegionId (req, res){
    const {id} = req.params;
    try {
      const region = await db.region.findByPk(id); 
      
      if(!region){
        return res.status(404).json( "La Region No Existe");
      } else return res.status(200).json({region: region});
    } catch (error) {
         console.log(error);
        return res.status(500).json( "error del servidor"); 
    }
},

async updateRegion (req, res){
    
    const {id} = req.params;
    const {nameRegion} = req.body;

    try {
        
        const region = await db.region.findByPk(id);

        if(!region){
        return res.status(404).json( "La Region No no Existe");
      } else 

        region.nameRegion = nameRegion;
        await region.save();

        return res.status(201).json(region);

    } catch (error) {
         console.log(error);
        return res.status(500).json( "error del servidor");
    }

},

async deleteRegion (req, res){

    const {id} = req.params;

    try {
        const regionss = await db.region.findByPk(id);
         if (!regionss){
            return res.status(404).json( "No Existe La Region");
         } else{
            await db.region.destroy({
            where:{id}
        });
        return res.status(201).json( "La Region Ha Sido Eliminado ");
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