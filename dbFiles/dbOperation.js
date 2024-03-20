const config                    = require('./dbConfig')
      sql                       = require('mssql'); 

const getSets = async() => {
    try {
        let pool = await sql.connect(config);
        let sets = await pool.request().query(`SELECT * from romance_dawn`);
        console.log(sets);
        return sets;
    }
    catch(error) {
        console.log(error);
    }
}

// const createSet = async(Set) => {
//     try {
//         let pool = await sql.connect(config);
//         let sets = pool.request()
//         .query(`INSERT INTO sets VALUES
//         ('${Set.id}', '${Set.name}')
//         `)
//         return sets;
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

module.exports = {
// createSet,
    getSets
}