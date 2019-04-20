const db = require('../models')
async function getUser(id){


let user = await db.User.findById(id)
return user
}

module.exports = {getUser}