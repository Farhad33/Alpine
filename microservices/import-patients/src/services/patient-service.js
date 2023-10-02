const axios = require('axios').default;
const { patientRepository } = require("../database");
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils');

// All Business logic will be here
module.exports = {

    async importPatients() {
        await patientRepository.deleteAllPatients()
        let patientCount = 0;
        
        try {
            while (patientCount < 10) {
                const response = await axios.get('https://mockapi-furw4tenlq-ez.a.run.app/data');
                const data = response.data;
                
                if (data.length === 0) {
                    // No more data to fetch
                    break;
                }
                
                for (const patient of data) {
                    await patientRepository.insertPatient(patient)
                    .then( _ => {
                        patientCount++;
                    })
                    .catch(console.log)
                    
                    if (patientCount >= 10) {
                        // Stop when you have 10 patients
                        break;
                    }
                }
            }
        } catch (error) {
            console.log('Error:', error);
        }

    },

}