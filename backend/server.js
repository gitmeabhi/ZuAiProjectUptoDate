import express, { json } from "express"
import cors from "cors"
import { createConnection } from "mysql"

import { genSalt, hash as _hash, compare } from "bcrypt"
const app = express()
 
const salt = genSalt(10)

app.use(json())
app.use(cors())

const db = createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "test"
})

app.get("/posts", (req, res) =>{
    const sql = "SELECT * FROM posts"
    db.query(sql, (err, data) =>{
     if(err) return res.json(err)
     return res.json(data)
    })
 })

app.get("/posts/:id", (req, res) =>{
    
   const sql = "SELECT * FROM posts WHERE id = ? "
   const id =req.params.id
   db.query(sql,[id], (err, data) =>{
    if(err) return res.json(err)
    return res.json(data)
   })
})

app.post("/posts", (req, res) =>{
    const sql = "INSERT INTO posts(`title`, `description`, `imgaeUrl`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.imgaeUrl
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.put("/posts/:id", (req, res) =>{
    const sql = "update posts set `title` = ?, `description` = ?,`imgaeUrl` = ? where id = ?"
    const values = [
        req.body.title,
        req.body.description,
        req.body.imgaeUrl
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) =>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.delete("/posts/:id", (req,res) =>{
    const sql = "DELETE FROM posts WHERE id = ?"
    const id = req.params.id
    db.query(sql,[id],(err, data) =>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})


  app.post("/registers", (req, res) =>{
    const sql = "INSERT INTO logins (`name`, `email`, `password`) VALUES(?)"
    _hash(req.body.password.toString(), salt, (err, hash) =>{
        if(err) return res.json("error")
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) =>{
            if(err) return res.json("Error")
            return res.json("success")
        })      
    })
})



app.post("/login", (req, res) =>{
    const sql = "SELECT * FROM logins WHERE name = ? "
    db.query(sql,[req.body.name], (err, data) =>{
        if(err) return res.json("Error")
            console.log(data)
        if(data.length > 0){
            compare(req.body.password.toString(), data[0].password, (err, response) =>{
                console.log(data[0].password)
                console.log(req.body.password.toString())
                
                if(err) return res.json("error")
                if(response){
                    return res.json({Status:"success"})
                }else{
                    return res.json({Error : "server Error..."})
                }
            })
        }else{
            return res.json("Error")
        }
    })  

})



app.listen(3001, () =>{
    console.log("running...")
})