import {CategoryItemsLinks} from "./CategoryItemsLinks";
import {Item} from "./Item";

export class CategoryItems {
    totalCount:number;
    updated:Date;
    links: CategoryItemsLinks;
    items: Item[];
}