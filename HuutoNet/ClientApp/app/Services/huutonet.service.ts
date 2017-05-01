import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HuutoNetCategories } from "../Models/HuutoNetCategories";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HuutoNetService {

    constructor(private http: Http) { }

    getAllCategories(): Promise<HuutoNetCategories> {
        return this.http.get("/api/HuutoNet/")
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