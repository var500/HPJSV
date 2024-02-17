import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function PaymentInfo() {
  return (
    <div className="flex flex-col md:flex-row gap-12 mt-10">
      <div className="max-w-md">
        <div className="text-base md:text-lg font-bold mb-2 md:mb-4">
          Payment Information
        </div>
        <Table>
          <TableBody className="border-2 text-xs md:text-base">
            <TableRow>
              <TableCell className="font-medium">Slip No:</TableCell>
              <TableCell className="text-right">5248</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Payment Date:</TableCell>
              <TableCell className="text-right">5385</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Payment Amount:</TableCell>
              <TableCell className="text-right">137</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Total Outstanding:</TableCell>
              <TableCell className="text-right">0.00</TableCell>
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
