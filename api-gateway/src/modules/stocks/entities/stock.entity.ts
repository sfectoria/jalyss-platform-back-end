export class Stock {}

export class FiltersStock {
    take: number;
    skip: number;
    text: string;
  }

export class ReceiptNote {}

export class FiltersReceipt {
  take:number
  skip:number
  stocksIds:number[]
}

export class TransferNote {}

export class ExitNote {}

export class FiltersExit {
  take:number
  skip:number
  stocksIds:number[]
}

export class ReturnNote {}
