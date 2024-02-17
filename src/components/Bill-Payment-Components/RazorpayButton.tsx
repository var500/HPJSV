import { getRazorpayKey } from "@/utils/consts";
import { BillingData } from "@/utils/types";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

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

export default function RazorpayButton({data}:{data:BillingData}) {
  const { toast } = useToast();
  async function displayRazorpay(e: any) {
    const currentWaterCharges = parseFloat(data.Usage.netReadingM3) * 13.86;
    const swerageCharges = currentWaterCharges * 0.3;
    const totalPayable = Math.round(currentWaterCharges + swerageCharges);
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
      //   callback_url: "http://localhost:1769/verify",
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
    try{
      //@ts-ignore
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    }catch(err){
      toast({
        variant: "destructive",
        title: "Invalid Transaction Details",
      });
    }
  }

  return (
    <div>
      <Button color="blue" placeholder={undefined} onClick={displayRazorpay}>
        Pay Now
      </Button>
    </div>
  );
}
