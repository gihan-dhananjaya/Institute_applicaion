const connectionPool = require('../db/databaseConnection');

const showRegistrationForm = (req,resp)=>{
    resp.render('registrationForm');
}
const createRegistration = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        const {studentId,programId,payment} = req.body;
        connection.query('INSERT INTO registration (st_id, pro_id, payment) VALUES (?, ?, ?)',[studentId,programId,payment],(error,result)=>{

            connection.release();
            if(!error){
                resp.render('successPage');
            }else{
                console.log(error);
            }
            console.log(result);
        })
    })
}
module.exports = {
    showRegistrationForm,
    createRegistration
};