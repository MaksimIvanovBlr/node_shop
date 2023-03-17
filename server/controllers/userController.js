const ApiError = require('../error/ApiError')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


const genereateJwt = (id, email, role) =>{
  return jwt.sign(
    {id, email, role}, 
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
    )
 }

class UserController {

    async registration(req, res) {
        console.log(process.env.SECRET_KEY)
        const {email, password,role} = req.body
        if (!email || !password) {
            return next(ApiError.bedRequest('incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.bedRequest('the user already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = genereateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('incorrect password'))
        }
        const token = genereateJwt(user.id, user.email, user.role )
        return res.json({token})

    }

    async check(req, res, next) {
        const token = genereateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}


module.exports = new UserController()



