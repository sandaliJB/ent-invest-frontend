// src/interfaces/InvestorInterfaces.ts

export interface InvestorData {
    userId: string;
    investorName: string;
    investorJob: string;
    investorInterest: string;
    otherDetails: string;
    budgetLimit: string;
    address: string;
    telNumber: string;
    imageName: string;
    imageData: File | null;
    contentType: string;
}
  