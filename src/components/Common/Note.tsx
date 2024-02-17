import React from "react";

export default function Note() {
  return (
    <div className="my-10 ">
      <p className="font-bold">Note</p>
      <div className="min-h-10 bg-gray-500 mt-2">
        <p className="text-xs md:text-sm font-bold p-2">
          &quot;Cash Payments will be recieved From 10:00 AM to 01:30 PM&quot;
        </p>
      </div>
    </div>
  );
}
