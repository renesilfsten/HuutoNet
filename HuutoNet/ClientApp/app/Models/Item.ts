import {ItemLinks} from "./ItemLinks";
import {ItemImageLinks} from "./ItemImageLinks";

export class Item {
    links: ItemLinks;
    id: number;
    title: string;
    category: string;
    seller: string;
    sellerId: number;
    currentPrice: number;
    buyNowPrice: number;
    saleMethod: string;
    listTime: Date;
    postalCode: string;
    location:string;
    closingTime:Date;
    bidderCount:number;
    offerCount: number;
    hasReservePrice: boolean;
    hasReservePriceExceeded:boolean;
    upgrades: any[];
    images: ItemImageLinks[];
}