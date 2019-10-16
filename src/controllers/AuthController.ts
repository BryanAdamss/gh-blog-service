/**
 * @author GuangHui
 * @description 权限控制器
 */

import { Request, Response } from 'express'

class AuthController {
  /**
   * 登录
   *
   * @static
   * @memberof AuthController
   */
  static login = async (req: Request, res: Response) => {}

  /**
   * 修改密码
   *
   * @static
   * @memberof AuthController
   */
  static changePassword = async (req: Request, res: Response) => {}
}

export default AuthController
