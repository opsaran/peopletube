const mongoose = require('mongoose')
const PeopleModel = require('../models.js')

mongoose.Promise = global.Promise

const createPeople = (req, res)=>{
    const {person } = req.body;
    
    const man = new PeopleModel({name:person})
    man.save()
        .then(()=>{
            
            res.status(200).json({success: true,  person:person})
    })
        .catch((err)=>console.log(err))  
    }

//get the whole collection
const getPeople = (req, res)=> {
    
    PeopleModel.find()
        .then((people)=>{
            res.status(200).json(people)
            
        })
        .catch((err)=>console.log(err))
    
}

//put request, basically updating some names

const updatePeople = (req, res)=>{
    const {user} = req.query
    console.log(user)
    const {person} = req.body
    PeopleModel.findOneAndUpdate({ name: user }, {$set:{name: person}}, {new:true})
        .then((data)=>{
            if(data===null){

                return res.status(400).json({success:false, msg:`couldn't find the user: ${user}`})
            }
            
            res.status(201).json({success:true, data: data})
        })
        .catch((err)=>{
            res.status(500).json({success:false, msg:err})
        })

}

const deletePeople = (req, res)=>{
    
        PeopleModel.findOneAndDelete({name:req.params.name})
            .then((data)=>{
                return res.status(200).json({success:true, data:data})
            })
            .catch((err)=>{
                res.status(500).json({success:false, msg:err})
                })
}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}