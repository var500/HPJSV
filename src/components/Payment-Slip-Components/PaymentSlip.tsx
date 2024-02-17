import React from "react";
import PaymentInfo from "./PaymentInfo";

export default function PaymentSlip() {
  return (
    <div className="flex flex-col w-full mt-4 gap-4">
      <div className="flex justify-center">
        <p className="font-semibold text-base mb-4">Payment Slip</p>
      </div>
      <div className="flex justify-end">
        <p className="font-semibold text-xs md:text-base">
          Meter No: 2197785 | Account No: 91-R
        </p>
      </div>
      <PaymentInfo />
    </div>
  );
}
