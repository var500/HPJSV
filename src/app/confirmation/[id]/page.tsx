import BillHeader from "@/components/Bill-Payment-Components/BillHeader";
import ChargesSummary from "@/components/Bill-Payment-Components/ChargesSummary";
import AccountDetails from "@/components/Bill-Payment-Components/UsageSummary";
import Path from "@/components/Common/Path";
import PaymentSlip from "@/components/Payment-Slip-Components/PaymentSlip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BillingData } from "@/utils/types";
import React from "react";
import Data from "@/utils/dummyData.json";

export default function Confirmation({ params }: { params: { id: string } }) {
  const Fethdata = Data.filter(
    (item) => item.AccountDetails.meterNo === params.id
  ) as BillingData[];
  return (
    <div className="px-10 md:px-20 py-10 place-content-center">
      <Card className="bg-[#f9f9f9] shadow-lg">
        {/* Nav */}
        <div className="px-2">
          <Path tab={"citizen services / pay water bill"} />
        </div>
        <CardHeader>
          <CardTitle>Water Bill Payment Recipt</CardTitle>
        </CardHeader>
        <CardContent className="ml-0 md:ml-32 flex flex-col justify-start gap-4 pr-10 md:pr-40">
          {Fethdata && (
            <>
              <BillHeader data={Fethdata[0]} />

              <div className="grid grid-col-1 xl:grid-cols-3 gap-16">
                <div className="col-span-1">
                  <AccountDetails data={Fethdata[0]} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <ChargesSummary data={Fethdata[0]} />
                </div>
              </div>
            </>
          )}

          <div className="border-dashed border-t-2 border-black mt-10" />
          <PaymentSlip data={Fethdata[0]} />
        </CardContent>
      </Card>
    </div>
  );
}
