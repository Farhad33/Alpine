const patientService = require('../services/patient-service');


module.exports = (app) => {
    
    //patients
    app.get('/', async (req,res,next) => {
        const  patientInserted = await patientService.getAllPatients()
        res.send(patientInserted)
    });

}
