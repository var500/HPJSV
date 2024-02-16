"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Path from "@/components/Path";
import { Button, Typography } from "@material-tailwind/react";
import { Input } from "@/components/ui/input";
import AccountDetails from "@/components/AccountDetails";
import ChargesSummary from "@/components/ChargesSummary";
import Note from "@/components/Note";
import PaymentSlip from "@/components/PaymentSlip";

export default function OnlineBill() {
  return (
    <div className="px-20 py-10">
      <Card className="bg-[#f9f9f9] shadow-lg">
        <div className="px-2">
          <Path tab={"citizen services / pay water bill"} />
        </div>
        <CardHeader>
          <CardTitle>Water Bill Payment</CardTitle>
        </CardHeader>
        <CardContent className="ml-32 flex flex-col justify-start gap-4 ">
          <div className="flex flex-row justify-between items-center my-10">
            <div className="flex flex-row items-center gap-4">
              <Typography
                placeholder={undefined}
                className="text-blue-800 font-normal"
              >
                Account Number <span className="text-red-600">#</span>
              </Typography>
              <Input placeholder="Account Number" className="w-72" />
              <Button
                size="md"
                variant="gradient"
                color="blue"
                placeholder={undefined}
              >
                Get <span className="ml-1">{">>"}</span>
              </Button>
            </div>
            <div>
              <em className="text-red-700 "># fields are mandatory</em>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-1">
              <AccountDetails />
            </div>
            <div className="col-span-2">
              <ChargesSummary />
            </div>
          </div>
          <Note />
          <PaymentSlip />
        </CardContent>
      </Card>
    </div>
  );
}
