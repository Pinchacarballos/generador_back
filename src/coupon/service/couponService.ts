import { injectable } from "inversify"
import { ICouponService } from "../interfaces/ICouponService"
import { CONSTANTS, COUPON_GENERATION } from "./../../config/constants"

@injectable()
export class CouponService implements ICouponService {
  getCoupons(): string[] {
    let response
    if (COUPON_GENERATION === CONSTANTS.SEQUENCIAL_GENERATION) {
      response = this.getSequenceCoupons()
    } else if (COUPON_GENERATION === CONSTANTS.RANDOM_GENERATION) {
      response = this.getRandomCoupons()
    }
    return response
  }
  private generateCouponRandom(coupons: string[]): string {
    const couponNumber = Math.random() * (CONSTANTS.COUPONS_NUMBER - 1)
    const coupon = this.formatCoupon(couponNumber)
    if (coupons.indexOf(coupon) >= 0) {
      return this.generateCouponRandom(coupons)
    }
    return coupon
  }

  private getSequenceCoupons(): string[] {
    const coupons = []
    for (let i = 0; i < CONSTANTS.COUPONS_NUMBER; i++) {
      const coupon = this.formatCoupon(i)
      coupons.push(coupon)
    }
    return coupons
  }
  private getRandomCoupons(): string[] {
    const coupons = []
    for (let i = 0; i < CONSTANTS.COUPONS_NUMBER; i++) {
      const coupon = this.generateCouponRandom(coupons)
      coupons.push(coupon)
    }
    return coupons
  }

  private formatCoupon(couponNumber: number): string {
    const coupon = couponNumber
      .toFixed()
      .padStart(CONSTANTS.COUPON_LENGTH, CONSTANTS.COUPON_PAD)
    return coupon
  }
}
