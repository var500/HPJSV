"use Client";
import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { BillingData } from "@/utils/types";
import Data from "@/utils/dummyData.json";
import { useToast } from "@/components/ui/use-toast";
import { initial } from "@/utils/consts";

export default function BillSearch({
  onFilterData,
}: {
  onFilterData: (details: BillingData) => void;
}) {
  const [account, setAccount] = useState();
  const { toast } = useToast();
  function handleAccountSearch() {
    const BillingDetails = Data.filter(
      (item) => item.AccountDetails.accountNo === account
    );
    if (BillingDetails.length > 0) {
      onFilterData(BillingDetails[0]);
    } else {
      onFilterData(initial);
      toast({
        variant: "destructive",
        title: "Account Not found",
      });
    }
  }

  useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 my-10">
      <Typography
        placeholder={undefined}
        className="text-blue-800 font-normal text-xs md:text-sm"
      >
        Account Number <span className="text-red-600">#</span>
      </Typography>
      <Input
        value={account}
        onChange={(e: any) => setAccount(e.target.value)}
        placeholder="Account Number"
        className="w-32 md:w-72 text-xs md:text-sm"
      />
      <Button
        variant="gradient"
        color="blue"
        className="h-8 w-20 md:h-10 md:w-24 p-2"
        placeholder={undefined}
        onClick={handleAccountSearch}
      >
        Get <span className="ml-1">{">>"}</span>
      </Button>

      <div className="flex justify-end">
        <em className="text-red-700 text-right text-xs md:text-sm">
          # fields are mandatory
        </em>
      </div>
    </div>
  );
}
