import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CategoryItems} from "../Models/CategoryItems";

@Injectable()
export class CategoryItemsService {

    constructor(private http: Http) { }

    getCategoryItems(id: number): Promise<CategoryItems> {
        return this.http.get("https://api.huuto.net/1.1/categories/" + id + "/items")
            .toPromise()
            .then(this.handleResponseData)
            .catch(this.handleError);
    }

    handleResponseData(response: Response): any {
        let body;
        if (response != null) {
            let contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1 && response.text()) {
                body = response.json() as any[];
            }
        }
        return body || null;
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}