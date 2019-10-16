/**
 * @author GuangHui
 * @description 管理系统相关控制器
 */

import { Request, Response } from 'express'

class AdminController {
  /**
   * 登录
   *
   * @static
   * @memberof AdminController
   */
  static login = async (req: Request, res: Response) => {}

  /**
   * 修改密码
   *
   * @static
   * @memberof AdminController
   */
  static changePassword = async (req: Request, res: Response) => {}
}

export default AdminController
