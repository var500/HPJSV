"use client";
import { getRazorpayKey } from "@/utils/consts";
import { BillingData } from "@/utils/types";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { GenerateBill } from "@/utils/generatePayment";

interface orderData {
  id: string;
  currency: string;
  amount: number;
}

function loadScript(src: any) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function RazorpayButton({ data }: { data: BillingData }) {
  const { toast } = useToast();
  const router = useRouter();
  async function displayRazorpay(e: any) {
    const { totalPayable } = GenerateBill(data.Usage.netReadingM3);

    const razorpayKey = getRazorpayKey();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const endpointData: orderData = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalPayable.toFixed(2),
        billNo: data.BillingInfo.billNo,
      }),
    }).then((t) => t.json());

    const options = {
      key: razorpayKey,
      name: "HPJSV",
      currency: endpointData.currency,
      amount: endpointData.amount,
      order_id: endpointData.id,
      description: "HPJSV Bill Payment",
      image: "https://iph.hp.nic.in/NewHomePage/assets/img/logo-f.png",
      // callback_url: "http://localhost:3000/confirmation",
      handler: function (response: Response) {
        router.push(`/confirmation/${data.AccountDetails.meterNo}`);
      },
      notes: {
        address: "SUB DIV NO. 1 GANDHI NAGAR",
      },
      theme: {
        color: "#3399cc",
      },
      prefill: {
        name: data.Consumer.name,
        email: "admin@indradhanu.online",
        contact: data.Consumer.contactNumber,
      },
    };
    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response: any) {
      toast({
        variant: "destructive",
        title: response.error.reason,
      });
    });
  }

  return (
    <div>
      <Button color="blue" placeholder={undefined} onClick={displayRazorpay}>
        Pay Now
      </Button>
    </div>
  );
}
