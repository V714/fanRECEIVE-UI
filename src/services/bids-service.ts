import Axios from "axios-observable";
import { apiUrl } from "../integrations/api";

interface CreateBidInterface {
  customer: number;
  bid: number;
  winner: number;
  money_amount: number;
}

export class BidService {
  createBid = (bid: CreateBidInterface) => {
    return Axios.post(apiUrl + "bid/create", bid);
  };
}
