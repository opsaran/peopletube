const express = require('express')
const router = express.Router();

const {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
} = require('./controllers/router_controllers.js')

router.get('/', getPeople)
router.post('/', createPeople)
router.put('/update', updatePeople)
router.delete('/:name', deletePeople) 

module.exports = router