import { GenerateBill } from "@/utils/generatePayment";
import { BillingData } from "@/utils/types";
import React from "react";

export default function BillHeader({ data }: { data: BillingData }) {
  const { totalPayable } = GenerateBill(data.Usage.netReadingM3);
  return (
    <>
      <div className="flex justify-end">
        <p className="font-semibold text-xs md:text-base">
          Meter No: {data.AccountDetails.meterNo} | Account No:{" "}
          {data.AccountDetails.accountNo}
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-between mt-4 mb-10 text-sm gap-4">
        <div className="flex flex-col">
          <p className="font-semibold"> JAL SHAKTI VIBHAG</p>
          <p> SUB DIV NO. 1 GANDHI NAGAR</p>
          <p> KULLU</p>
          <p> HIMACHAL PRADESH</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold"> Consumer Information</p>
          <p> {data.Consumer.name}</p>
          <p> {data.Consumer.address1}</p>
          <p> {data.Consumer.ward ? `Ward No: ${data.Consumer.ward}` : ""}</p>
          <p> {data.Consumer.contactNumber}</p>
        </div>
        <div className="flex flex-col font-semibold">
          <p className=""> Billing Information</p>
          <p>
            Bill no:{" "}
            <span className="font-normal">{data.BillingInfo.billNo}</span>
          </p>
          <p>
            Bill Date:{" "}
            <span className="font-normal">{data.BillingInfo.billDate}</span>
          </p>
          <p>
            Due Date:{" "}
            <span className="font-normal">{data.BillingInfo.dueDate}</span>
          </p>
          <p>
            Bill Month:{" "}
            <span className="font-normal">{data.BillingInfo.billMonth}</span>
          </p>
          <p>
            Swerage:{" "}
            <span className="font-normal">{data.BillingInfo.sewerage}</span>
          </p>
          <p>
            Amount Payble:{" "}
            <span className="font-normal">{totalPayable.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </>
  );
}
