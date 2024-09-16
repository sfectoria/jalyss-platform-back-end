export class Stock {}

export class FiltersStock {
  take: number;
  skip: number;
  text: string;
}

export class ReceiptNote {}

export class FiltersReceipt {
  take: number;
  skip: number;
  stocksIds: number[];
}

export class TransferNote {}

export class ExitNote {}

export class FiltersExit {
  take: number;
  skip: number;
  stocksIds: number[];
  salesChannelsIds: number[];
}

export class ReturnNote {}

export class Movements {}

export class FiltersMovement {
  take: number;
  skip: number;
  stocksIds: number[];
}
