import {Users} from "../models";
import {validateJWT} from "../middlewares/jwt";

export const verifyUsers = async (req, res) => {
    var token = req.headers['authorization']
    if(await validateJWT(token)===true){
        const results = await Users.findAll();
        return res.status(201).json(results);
    }
    else{
        return res.status(401)
        }
}

export const verifyUsersId = async (req, res) => {
    var token = req.headers['authorization']
    console.log(token)
    if(await validateJWT(token)===true){
        const results = await Users.findOne({where: {id:req.params.id}});
        return res.status(200).json(results);
    }
    else{
        return res.status(401)
    }
}

module.exports = {
    verifyUsers,
verifyUsersId}