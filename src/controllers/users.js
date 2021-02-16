import {Users} from "../models";
import {validateJWT} from "../middlewares/jwt";

export const verifyUsers = async (req, res) => {
    let bearerToken = req.header('authorization')
    const token = bearerToken.split(' ')[1]
    if(await validateJWT(token)===true){
        const results = await Users.findAll();
        return res.status(201).json(results);
    }
    else{
        return res.status(401).json({
            message:"token no valido"
        })
        }
}

export const verifyUsersId = async (req, res) => {
    let bearerToken = req.header('authorization')
    const token = bearerToken.split(' ')[1]
    console.log(token)
    if(await validateJWT(token)===true){
        let idNum=Number(req.params.id)
        console.log(idNum)
        const results = await Users.findOne({where: {id:idNum},atributtes:"lastName"});
        console.log(typeof req.params.id)
        return res.json(results);
    }else{
        return res.status(401).json({
            message:"token no valido"
        })
        }
}

module.exports = {
    verifyUsers,
verifyUsersId}