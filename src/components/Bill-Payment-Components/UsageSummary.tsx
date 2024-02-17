import React from "react";
import Data from "@/app/utils/dummyData.json";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function AccountDetails() {
  return (
    <div className="max-w-xl">
      <div className="text-base md:text-xl  font-bold mb-2 md:mb-4">Usage Summary</div>
      <Table>
        <TableBody className="border-2 text-xs md:text-base">
          <TableRow>
            <TableCell className="font-medium">Old Reading:</TableCell>
            <TableCell className="text-right">5248</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">New Reading:</TableCell>
            <TableCell className="text-right">5385</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net Reading(in M3):</TableCell>
            <TableCell className="text-right">137</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net Reading(in Ltr):</TableCell>
            <TableCell className="text-right">13700</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
