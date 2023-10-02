const db = require('../connection')

// Dealing with data base operations
module.exports = {

    getAllPatients(){
        const SQL = `
            SELECT *
            FROM patient
        `
        return db.query(SQL)
    }

}