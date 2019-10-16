/**
 * @author GuangHui
 * @description 文章控制器
 */

import { Request, Response } from 'express'

class PostController {
  /**
   * 获取文章列表
   *
   * @static
   * @memberof PostController
   */
  static getPostList = async (req: Request, res: Response) => {}

  /**
   * 根据id查询文章详情
   *
   * @static
   * @memberof PostController
   */
  static getPostDetailById = async (req: Request, res: Response) => {}

  /**
   * 根据id编辑文章信息
   *
   * @static
   * @memberof PostController
   */
  static editPostById = async (req: Request, res: Response) => {}
}

export default PostController
