/**
 * @author GuangHui
 * @description 路由入口
 */

import { Router, Request, Response } from 'express'
import auth from './auth'
import post from './post'

const routes = Router()

routes.use('/auth', auth)
routes.use('/post', post)

export default routes
