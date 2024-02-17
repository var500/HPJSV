import { BillingData } from "./types";

export const initial: BillingData = {
  id: "",
  Consumer: {
    name: "",
    address1: "",
    ward: "",
    contactNumber: "",
  },
  AccountDetails: {
    meterNo: "",
    accountNo: "",
  },
  Usage: {
    oldReading: "",
    newReading: "",
    netReadingM3: "",
    netReadingLtr: "",
  },
  chargesSummary: {
    prevBalance: "",
  },
  BillingInfo: {
    billNo: "",
    billDate: "",
    dueDate: "",
    billMonth: "",
    sewerage: "",
  },
};

export const getRazorpayKey = () => {
  const Razorpay_Key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;

  if (!Razorpay_Key) {
    throw new Error("ENV variables not found");
  }

  return Razorpay_Key;
};

export const getRazorpaySecret = () => {
  const Razorpay_Secret = process.env.NEXT_PUBLIC_RAZORPAY_SECRET;
  if (!Razorpay_Secret) {
    throw new Error("ENV variables not found");
  }

  return Razorpay_Secret;
};
