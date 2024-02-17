"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Path from "@/components/Common/Path";
import AccountDetails from "@/components/Bill-Payment-Components/UsageSummary";
import ChargesSummary from "@/components/Bill-Payment-Components/ChargesSummary";
import Note from "@/components/Common/Note";
import PaymentSlip from "@/components/Payment-Slip-Components/PaymentSlip";
import BillHeader from "@/components/Bill-Payment-Components/BillHeader";
import BillSearch from "@/components/Bill-Payment-Components/BillSearch";
import { BillingData } from "@/utils/types";
import RazorpayButton from "@/components/Bill-Payment-Components/RazorpayButton";

export default function OnlineBill() {
  const [data, setData] = useState<BillingData>();

  const handleFilterData = (data: BillingData) => {
    setData(data);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="px-10 md:px-20 py-10">
      <Card className="bg-[#f9f9f9] shadow-lg">
        {/* Nav */}
        <div className="px-2">
          <Path tab={"citizen services / pay water bill"} />
        </div>

        <CardHeader>
          <CardTitle>Water Bill Payment</CardTitle>
        </CardHeader>

        <CardContent className="ml-0 md:ml-32 flex flex-col justify-start gap-4 pr-10 md:pr-40">
          <BillSearch onFilterData={handleFilterData} />
          {data && (
            <>
              <BillHeader data={data} />

              <div className="grid grid-col-1 xl:grid-cols-3 gap-16">
                <div className="col-span-1">
                  <AccountDetails data={data} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <ChargesSummary data={data} />
                </div>
              </div>
              <div className="flex justify-end w-full">
                <RazorpayButton data={data} />
              </div>
            </>
          )}
          <Note />

          {/* <div className="border-dashed border-t-2 border-black" />
          <PaymentSlip /> */}
        </CardContent>
      </Card>
    </div>
  );
}
