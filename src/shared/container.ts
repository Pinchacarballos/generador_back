import { Container } from "inversify"
import { CouponController } from "../coupon/controller/couponController"
import { ICouponController } from "../coupon/interfaces/ICouponController"
import { ICouponService } from "../coupon/interfaces/ICouponService"
import { CouponService } from "../coupon/service/couponService"

const container = new Container()

container.bind<ICouponController>("CouponController").to(CouponController)
container.bind<ICouponService>("CouponService").to(CouponService)

export default container
