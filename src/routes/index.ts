/**
 * @author GuangHui
 * @description 路由入口
 */

import { Router, Request, Response } from 'express'
import auth from './auth'
import admin from './admin'

const routes = Router()

routes.use('/auth', auth)
routes.use('/admin', admin)

export default routes
