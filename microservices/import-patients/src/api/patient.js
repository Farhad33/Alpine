const patientService = require('../services/patient-service');


module.exports = (app) => {
    //import-patients
    app.post('/', async (req,res,next) => {
        let patients = await patientService.importPatients()
        res.json(patients)
    });
}
