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