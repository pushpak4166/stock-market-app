import { StockPrice } from "./StockPrice";

export interface Company {
  id?: number;
  name?: string;
  turnover?: string;
  ceo?: string;
  boardOfDirectors?: string;
  sectorname?: string;
  companyBrief?: string;
  stockPrice?:Array<StockPrice>;
}
