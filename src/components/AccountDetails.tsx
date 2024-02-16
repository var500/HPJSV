import React from "react";
import Data from "@/app/utils/dummyData.json";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function AccountDetails() {
  return (
    <div className="max-w-xl">
      <div className="text-xl font-bold mb-4">Usage Summary</div>
      <Table>
        <TableBody className="border-2">
          <TableRow>
            <TableCell className="font-medium">Old Reading:</TableCell>
            <TableCell>5248</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">New Reading:</TableCell>
            <TableCell>5385</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net Reading(in M3):</TableCell>
            <TableCell>137</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Net Reading(in Ltr):</TableCell>
            <TableCell>13700</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
