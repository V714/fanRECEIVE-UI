import axios from "axios";
import { apiUrl } from "../integrations/api";

interface CreateBidInterface {
  customer: number;
  bid: number;
  winner: number;
  money_amount: number;
}

class BidService {
  createBid = (bid: CreateBidInterface) => {
    return axios.post(apiUrl + "bid/create", bid);
  };
}
