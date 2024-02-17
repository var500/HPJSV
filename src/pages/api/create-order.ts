import { NextApiRequest, NextApiResponse } from "next";
import { razorpay } from "@/utils/razorpay";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  if (req.method === "POST") {
    const payment_capture = 1;
    const amount = body.amount;
    const currency = "INR";
    const options = {
      amount: (amount*100).toString(),
      currency,
      receipt: `bill_rcptid_${body.billNo}`,
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
