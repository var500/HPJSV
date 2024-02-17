import React from "react";
import Data from "@/app/utils/dummyData.json";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { BillingData } from "@/utils/types";

export default function AccountDetails({data}:{data:BillingData}) {
  return (
    <div className="max-w-xl">
      <div className="text-base md:text-xl  font-bold mb-2 md:mb-4">Usage Summary</div>
      <Table>
        <TableBody className="border-2 text-xs md:text-base">
          <TableRow>
            <TableCell className="font-medium">Old Reading:</TableCell>
            <TableCell className="text-right">{data.Usage.oldReading}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">New Reading:</TableCell>
            <TableCell className="text-right">{data.Usage.newReading}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net Reading(in M3):</TableCell>
            <TableCell className="text-right">{data.Usage.netReadingM3}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net Reading(in Ltr):</TableCell>
            <TableCell className="text-right">{data.Usage.netReadingLtr}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
