import { Request, Response } from "express"
import { inject } from "inversify"
import { controller, httpGet } from "inversify-express-utils"
import { ICouponController } from "../interfaces/ICouponController"
import { ICouponService } from "../interfaces/ICouponService"

@controller("/coupon")
export class CouponController implements ICouponController {
  constructor(@inject("CouponService") private couponService: ICouponService) {}

  @httpGet("")
  generateCoupons(_: Request, response: Response): void {
    const result = this.couponService.getCoupons()
    response.send(result)
  }
}
