import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Input } from "../ui/input";

export default function BillSearch() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 my-10">
      <Typography
        placeholder={undefined}
        className="text-blue-800 font-normal text-xs md:text-sm"
      >
        Account Number <span className="text-red-600">#</span>
      </Typography>
      <Input
        placeholder="Account Number"
        className="w-32 md:w-72 text-xs md:text-sm"
      />
      <Button
        variant="gradient"
        color="blue"
        className="h-8 w-20 md:h-10 md:w-24 p-2"
        placeholder={undefined}
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
