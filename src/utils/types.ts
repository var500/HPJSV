interface Consumer {
    name: string;
    address1: string;
    ward: string;
    contactNumber: string;
}

interface AccountDetails {
    meterNo: string;
    accountNo: string;
}

interface Usage {
    oldReading: string;
    newReading: string;
    netReadingM3: string;
    netReadingLtr: string;
}

interface ChargesSummary {
    prevBalance: string;
}

interface BillingInfo {
    billNo: string;
    billDate: string;
    dueDate: string;
    billMonth: string;
    sewerage: string;
}

export interface BillingData {
    id: string;
    Consumer: Consumer;
    AccountDetails: AccountDetails;
    Usage: Usage;
    chargesSummary: ChargesSummary;
    BillingInfo: BillingInfo;
}
