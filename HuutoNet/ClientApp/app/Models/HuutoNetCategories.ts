import {Link} from "./Link";
import {Category} from "./Category";
import {BaseCategory} from "./BaseCategory";

export class HuutoNetCategories extends BaseCategory{
    updated: Date;
    links: Link;
    categories: Category[];
}