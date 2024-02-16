import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/logo-f.png";
export default function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-28 py-5 bg-gradient-to-r from-black to-gray-500 text-white gap-12">
      <div className="flex flex-col gap-6 col-span-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Disclamer</h1>
          <p className="text-sm text-justify">
            This web portal has been developed as a complete ERP solution to
            automate the functioning of the entire Department and also provide
            the decision makeing with sufficient online information in order to
            provide better services to citizens through proper and timely
            execution of water supply and irrigation schemes in the State of
            Himachal Pradesh. Although highest care has been taken to ensure
            security, privacy and correctness of data, Neither the Department
            nor NIC is responsible for any inadvertent errors/ mistakes for any
            reason whatsoever.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Web Information Manager</h1>
          <p className="text-sm text-justify">
            Content on this website is published and managed by Jal Shakti
            Vibhag, Himachal Pradesh. For any query regarding this website,
            please contact: SEngineer-in-Chief, Jal Shakti Vibhag, Jal Shakti
            Bhawan, Shimla.PIN - 171 005 {'('}Himachal Pradesh{')'} India
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <Image src={Logo} alt={"Jal Skati Vibhag"} />
      </div>
    </div>
  );
}
