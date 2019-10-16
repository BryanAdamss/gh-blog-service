/**
 * @author GuangHui
 * @description 文章
 */

import { Router } from 'express'
import PostController from '../controllers/PostController'
import { checkJwt } from '../middlewares/checkJwt'
import { checkRole } from '../middlewares/checkRole'

const router = Router()

// 获取文章列表
router.get('/', [checkJwt], PostController.getPostList)

// 根据id查找文章详情
router.get('/:id([0-9]+)', [checkJwt], PostController.getPostDetailById)

// 创建新文章
router.post('/', [checkJwt, checkRole(['ADMIN'])], PostController.newPost)

// 编辑文章信息
router.patch(
  '/:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  PostController.editPostById
)

// 删除文章
router.delete(
  '/:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  PostController.deletePost
)

export default router
