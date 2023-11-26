const connectionPool = require('../db/databaseConnection');

const showAllProgram = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        connection.query('SELECT * FROM program',(error,result)=>{
            connection.release();
            if(!error){
                resp.render('showAllPrograms',{result});
            }else{
                console.log(error);
            }
            console.log(result);
        })
    })

}

const addProgram = (req,resp)=>{
    resp.render('addProgramForm');
}

const createProgram = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        const {id,name,duration,fee} = req.body;
        
        connection.query('INSERT INTO program VALUES(?,?,?,?)',[id,name,duration,fee],(error,result)=>{
            connection.release();
            if(!error){
                resp.render('addProgramForm',{result})
            }else{
                console.log(error);
            }
            console.log(result);
        });
    });
}

const updateProgram = (req,resp)=>{
    connectionPool.getConnection((error,connection)=>{
        connection.query('SELECT * FROM program WHERE pro_id=?',[req.params.id],(err,rows)=>{
            connection.release();

            const data = rows[0];
            if(!err){
                resp.render('updateProgramForm',{program:data})
            }else{
                console.log(err);
            }
            console.log(data);
        })
    })
}

const modifyProgram = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err
        }
        const {id,name,duration,fee} = req.body;
        connection.query('UPDATE program SET pro_name=?,pro_duration=?, pro_fee=? WHERE pro_id=? ',[name,duration,fee,id],(error,result)=>{

            connection.release();
            if(!error){
                resp.render('addProgramForm')
            }else{
                console.log(error);
            }
            console.log(result);
        })
    })
}

const deleteProgram = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        connection.query('DELETE FROM program WHERE pro_id=?',[req.params.id],(error,result)=>{
            connection.release();
            if(!error){
                resp.render('addProgramForm')
            }else{
                console.log(error);
            }
            console.log(result);
        })
    })
}

const findProgram = (req,resp)=>{
    connectionPool.getConnection((error, connection)=>{
        if(error){
            throw error;
        }

        let searchText =req.body.text;
        console.log(searchText);
        connection.query('SELECT * FROM program WHERE pro_name LIKE ?',['%'+searchText+'%'],(err,result)=>{

            connection.release();

            if(!err){
                resp.render('showAllPrograms',{result});
            }else{
                console.log(err);
            }

            console.log(result);

        });

    });
}

const showProgarmData = (req,resp)=>{
    connectionPool.getConnection((err,connection)=>{
        if(err){
            throw err;
        }
        connection.query('SELECT * FROM program WHERE pro_id=?',[req.params.id],(error,rows)=>{
            connection.release();
            const data = rows[0];
            if(!error){
                resp.render('showProgramDataForm',{program:data})
            }else{
                console.log(error);
            }
            console.log(data);
        })
    })
}



module.exports = {
    showAllProgram,
    deleteProgram,
    findProgram,
    updateProgram,
    modifyProgram,
    addProgram,
    createProgram,
    showProgarmData
}