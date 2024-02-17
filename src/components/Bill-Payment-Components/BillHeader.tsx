import React from "react";

export default function BillHeader() {
  return (
    <>
      <div className="flex justify-end">
        <p className="font-semibold text-xs md:text-base">
          Meter No: 2197785 | Account No: 91-R
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
          <p> Smt. Sita Devi</p>
          <p> Akhara Bazar Kullu</p>
          <p> Ward No. 3</p>
          <p> 9418613277</p>
        </div>
        <div className="flex flex-col font-semibold">
          <p className=""> Billing Information</p>
          <p>
            Bill no: <span className="font-normal">42212</span>
          </p>
          <p>
            Bill Date: <span className="font-normal">2023-12-14</span>
          </p>
          <p>
            Due Date: <span className="font-normal">2023-12-26</span>
          </p>
          <p>
            Bill Month: <span className="font-normal">December</span>
          </p>
          <p>
            Swerage: <span className="font-normal">Yes</span>
          </p>
          <p>
            Amount Payble: <span className="font-normal">2468.00</span>
          </p>
        </div>
      </div>
    </>
  );
}
