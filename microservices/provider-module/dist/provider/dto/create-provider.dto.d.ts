declare class CreateReceiptNoteDto {
    receiptDate: Date;
    numReceiptNote: number;
    subTotalAmount?: number;
    totalAmount?: number;
}
export declare class CreateProviderDto {
    nameProvider: string;
    phoneNumber: string;
    adresse: string;
    email: string;
    registrationNumber: string;
    receiptNotes: CreateReceiptNoteDto[];
}
export {};
