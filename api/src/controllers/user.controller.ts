import { Request, Response} from 'express'

import { UserServices } from '../services/user.service'

const getUsers = async(req: Request, res: Response) => {
    res.send('Todos los users')
}
const getUser = async() => {}
const insertUser = async() => {}
const updateUser = async() => {}
const deleteUser = async() => {}

export {
    getUser,
    getUsers,
    insertUser,
    updateUser,
    deleteUser
}