const db = require('../connection')

// Dealing with data base operations
module.exports = {

    insertPatient(patient){
        const SQL = `
            INSERT INTO patient (
                client_id, 
                date_testing, 
                date_birthdate, 
                gender, 
                ethnicity, 
                creatine, 
                chloride, 
                fasting_glucose, 
                potassium, 
                sodium, 
                total_calcium, 
                total_protein, 
                creatine_unit, 
                chloride_unit, 
                fasting_glucose_unit, 
                potassium_unit, 
                sodium_unit, 
                total_calcium_unit, 
                total_protein_unit
            ) 
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19 )
        `
        return db.query(SQL, [
            patient.client_id,
            patient.date_testing,
            patient.date_birthdate,
            patient.gender,
            patient.ethnicity,
            patient.creatine,
            patient.chloride,
            patient.fasting_glucose,
            patient.potassium,
            patient.sodium,
            patient.total_calcium,
            patient.total_protein,
            patient.creatine_unit,
            patient.chloride_unit,
            patient.fasting_glucose_unit,
            patient.potassium_unit,
            patient.sodium_unit,
            patient.total_calcium_unit,
            patient.total_protein_unit,
        ])
    },

    deleteAllPatients() {
        const SQL = `
            DELETE FROM patient
        `
        return db.query(SQL)
    },

}