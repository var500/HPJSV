import Razorpay from "razorpay";
import { getRazorpayKey, getRazorpaySecret } from "./consts";

const razorpayKey = getRazorpayKey();
const razorpaySecret = getRazorpaySecret();

export const razorpay = new Razorpay({
  key_id: razorpayKey,
  key_secret: razorpaySecret,
});
