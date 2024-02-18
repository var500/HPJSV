import React from "react";
import Card from "./card";
import { Banknote, Laptop, ListTodoIcon, Users, Waves } from "lucide-react";
export default function CardContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
      <Card
        icon={<Waves className="size-6 lg:size-12" />}
        heading={"eSameeksha"}
        content={
          "An e-Governance Initiative of Government Himachal Pradesh for effective monitoring of the Schemes"
        }
        url={"https://esameeksha.hp.nic.in/"}
      />
      <Card
        icon={<Users className="size-6 lg:size-12" />}
        heading={"Manav Sampda"}
        content={
          "A Green Governance tool for Human Resource and Financial Management"
        }
        url={"https://genpmis.hp.nic.in/"}
      />
      <Card
        icon={<Laptop className="size-6 lg:size-12" />}
        heading={"Samgr eSamadhan"}
        content={"Comprehensive Online Public Grievance System"}
        url={"https://esamadhan.nic.in/"}
      />
      <Card
        icon={<ListTodoIcon className="size-6 lg:size-12" />}
        heading={"eTender"}
        content={"eProcurement System of Himachal Pradesh"}
        url={"https://hptenders.gov.in/nicgep/app"}
      />
      <Card
        icon={<Banknote className="size-6 lg:size-12" />}
        heading={"eBudget"}
        content={"Budget Estimates, List of Schemes and Works"}
        url={"https://ebudget.hp.nic.in/BudHome.aspx"}
      />
      <Card
        icon={<Banknote className="size-6 lg:size-12" />}
        heading={"Himkosh"}
        content={
          "HOD Budget Allocation & Expediture DDO Allocation/Expediture HOD Allocation/Expediture"
        }
        url={"https://himkosh.hp.nic.in/echallan/"}
      />
    </div>
  );
}
