import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { BillingData } from "@/utils/types";
import { GenerateBill } from "@/utils/generatePayment";

export default function PaymentInfo({ data }: { data: BillingData }) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  const { totalPayable } = GenerateBill(data.Usage.netReadingM3);

  return (
    <div className="flex flex-col md:flex-row gap-12 mt-10">
      <div className="max-w-md">
        <div className="text-base md:text-lg font-bold mb-2 md:mb-4">
          Payment Information
        </div>
        <Table>
          <TableBody className="border-2 md:text-base">
            <TableRow className="text-sm font-semibold">
              <TableCell>Slip No:</TableCell>
              <TableCell className="text-left">41326</TableCell>
            </TableRow>
            <TableRow className="text-sm font-semibold">
              <TableCell>Payment Date:</TableCell>
              <TableCell className="text-left">{currentDate}</TableCell>
            </TableRow>
            <TableRow className="text-sm font-semibold">
              <TableCell>Payment Amount:</TableCell>
              <TableCell className="text-left">{totalPayable.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow className="text-sm font-semibold">
              <TableCell>Total Outstanding:</TableCell>
              <TableCell className="text-left">0.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="font-semibold">JAL SHAKTI VIBHAG</p>
          <p>HIMACHAL PRADESH</p>
        </div>

        <div>
          <p className="font-semibold mt-10 mb-4">Signature</p>
          <div className="h-16 w-3/4 bg-gray-600" />
        </div>
      </div>
    </div>
  );
}
