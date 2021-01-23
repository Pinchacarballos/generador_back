import { Request, Response } from "express"
import { interfaces } from "inversify-express-utils"

export interface ICouponController extends interfaces.Controller {
  generateCoupons(request: Request, response: Response): void
}
