import React from "react";
import Data from "@/app/utils/dummyData.json";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ChargesSummary() {
  return (
    <div className="max-w-2xl">
      <div className="text-base md:text-xl font-bold mb-2 md:mb-4">Charges Summary</div>
      <Table>
        <TableBody className="border-2 text-xs md:text-base">
          <TableRow>
            <TableCell className="font-medium">Previous Balance</TableCell>
            <TableCell className="text-right">0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Current Water Charges:
            </TableCell>
            <TableCell className="text-right">1898.82</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Swerage Charges:</TableCell>
            <TableCell className="text-right">569.65</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Total Amount Payble:</TableCell>
            <TableCell className="text-right">2468.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Surcharge Amount After Due Date:
            </TableCell>
            <TableCell className="text-right">246.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Total Amount payable After Due Date:
            </TableCell>
            <TableCell className="text-right">2715.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
