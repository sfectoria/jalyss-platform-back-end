export class Selling {}

export class FiltersChannels {
  take: number;
  skip: number;
  text: string;
}

export class PurchaseOrder {} //bon commande

export class SalesDeliveryNote {}

export class Filters {
  take: number;
  skip: number;
  clientIds: number[];
  salesChannelsIds:number[]
}

export class SalesInvioce {}

export class SalesDeliveryInvoice {}

export class Price {
  take: number;
  skip: number;
  articleIds: number[];
  salesChannelIds: number[];
}
