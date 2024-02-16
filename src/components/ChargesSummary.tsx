import React from "react";
import Data from "@/app/utils/dummyData.json";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ChargesSummary() {
  return (
    <div className="max-w-2xl">
      <div className="text-xl font-bold mb-4">Charges Sumamry</div>
      <Table>
        <TableBody className="border-2">
          <TableRow>
            <TableCell className="font-medium">Previous Balance</TableCell>
            <TableCell>0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Current Water Charges:
            </TableCell>
            <TableCell>1898.82</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Swerage Charges:</TableCell>
            <TableCell>569.65</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Total Amount Payble:</TableCell>
            <TableCell>2468.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Surcharge Amount After Due Date:
            </TableCell>
            <TableCell>246.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Total Amount payable After Due Date:
            </TableCell>
            <TableCell>2715.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
