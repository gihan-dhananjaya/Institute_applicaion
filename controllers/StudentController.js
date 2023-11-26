const connectionPool = require('../db/databaseConnection');

const initializeUi = (req,resp)=>{
    resp.render('home');
}

const showStudent=(req,resp)=>{
    connectionPool.getConnection((error, connection)=>{
        if(error){
            throw error;
        }

        const sql ="SELECT * FROM student";
        connection.query(sql,(err,rows)=>{

            connection.release();

            if(!err){
                resp.render('showStudentdetails',{rows});
            }else{
                console.log(err);
            }

            console.log(rows);

        });

    });
    
}

const addStudent=(req,resp)=>{
    resp.render('addStudentForm')
}

const createNewStudent = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        const {id,name,address,gender} = req.body;
        
        connection.query('INSERT INTO student VALUES(?,?,?,?)',[id,name,address,gender],(error,result)=>{
            connection.release();
            if(!error){
                resp.render('addStudentForm',{result})
            }else{
                console.log(error);
            }
            console.log(result);
        });
    });
}

const updateStudent = (req,resp)=>{
    connectionPool.getConnection((error,connection)=>{
        connection.query('SELECT * FROM student WHERE st_id=?',[req.params.id],(err,rows)=>{
            connection.release();

            const data = rows[0];
            if(!err){
                resp.render('updateStudentForm',{student:data})
            }else{
                console.log(err);
            }
            console.log(data);
        })
    })
}

const modifyStudent = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err
        }
        const {id,name,address} = req.body;
        connection.query('UPDATE student SET st_name=?,st_address=? WHERE st_id=? ',[name,address,id],(error,result)=>{

            connection.release();
            if(!error){
                resp.render('addStudentForm')
            }else{
                console.log(error);
            }
            console.log(result);
        })
    })
}

const deletestudent = (req,resp)=>{

    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        connection.query('DELETE FROM student WHERE st_id=?',[req.params.id],(error,result)=>{
            connection.release();
            if(!error){
                resp.render('addStudentForm')
            }else{
                console.log(error);
            }
            console.log(result);
        })
    })
}

const showStudentData = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        connection.query('SELECT * FROM student WHERE st_id=?',[req.params.id],(err,result)=>{
            connection.release();
            const data = result[0];
            if(!err){
                resp.render('showDataForm',{student:data})
            }else{
                console.log(err);
            }
            console.log(data);
        })
    })
}


module.exports = {
    initializeUi,
    showStudent,
    addStudent,
    createNewStudent,
    updateStudent,
    modifyStudent,
    deletestudent,
    showStudentData
}