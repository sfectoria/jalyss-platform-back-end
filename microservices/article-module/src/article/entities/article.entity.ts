export class Article {}

export class Filters {
  take: number;
  skip: number;
  publishingHousesIds: number[];
  authorsIds: number[];
  text: string;
  archived ?: boolean | string;
}
