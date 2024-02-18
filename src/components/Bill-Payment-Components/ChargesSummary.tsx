import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { BillingData } from "@/utils/types";
import { GenerateBill } from "@/utils/generatePayment";

export default function ChargesSummary({ data }: { data: BillingData }) {
  const prevBalance =
    parseFloat(data?.chargesSummary?.prevBalance).toFixed(2) || "0.00";
  const { currentWaterCharges, swerageCharges, totalPayable } = GenerateBill(
    data.Usage.netReadingM3
  );

  const outstanding = (
    totalPayable + parseFloat(data.chargesSummary.prevBalance)
  );
  const amountAfterDueDate = outstanding * 0.1;
  return (
    <div className="max-w-2xl">
      <div className="text-base md:text-xl font-bold mb-2 md:mb-4">
        Charges Summary
      </div>
      <Table>
        <TableBody className="border-2 text-xs md:text-base">
          <TableRow>
            <TableCell className="font-medium">Previous Balance</TableCell>
            <TableCell className="text-right">{prevBalance}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Current Water Charges:
            </TableCell>
            <TableCell className="text-right">
              {currentWaterCharges.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Swerage Charges:</TableCell>
            <TableCell className="text-right">
              {swerageCharges.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Total Amount Payble:</TableCell>
            <TableCell className="text-right">
              {outstanding.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Surcharge Amount After Due Date:
            </TableCell>
            <TableCell className="text-right">
              {amountAfterDueDate.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Total Amount payable After Due Date:
            </TableCell>
            <TableCell className="text-right">
              {Math.round(amountAfterDueDate + outstanding).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
