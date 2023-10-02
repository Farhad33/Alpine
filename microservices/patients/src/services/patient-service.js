const { patientRepository } = require("../database");
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils');

// All Business logic will be here
module.exports = {
    
    async getAllPatients() {
        return patientRepository.getAllPatients()
    },

}