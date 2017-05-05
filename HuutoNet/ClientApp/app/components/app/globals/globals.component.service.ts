import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {BaseCategory} from "../../../Models/BaseCategory";

@Injectable()
export class GlobalsComponentService {
    public categoryVisited = new Subject<BaseCategory>();
}