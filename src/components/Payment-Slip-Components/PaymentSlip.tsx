import React from "react";
import PaymentInfo from "./PaymentInfo";
import { BillingData } from "@/utils/types";

export default function PaymentSlip({ data }: { data: BillingData }) {
  return (
    <div className="flex flex-col w-full mt-4 gap-4">
      <div className="flex justify-center">
        <p className="font-semibold text-base mb-4">Payment Slip</p>
      </div>
      <div className="flex justify-end">
        <p className="font-semibold text-xs md:text-base">
          Meter No: {data.AccountDetails.meterNo} | Account No:{" "}
          {data.AccountDetails.accountNo}
        </p>
      </div>
      <PaymentInfo data={data}/>
    </div>
  );
}
