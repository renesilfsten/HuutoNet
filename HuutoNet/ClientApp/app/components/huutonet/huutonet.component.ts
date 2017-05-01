import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HuutoNetCategories} from "../../Models/HuutoNetCategories";
import {HuutoNetService} from "../../Services/huutonet.service";

@Component({
    selector: 'huutonet',
    template: require('./huutonet.component.html')
})
export class HuutoNetComponent {
    public huutoNetCategories: HuutoNetCategories;

    constructor(http: Http, public huutoNetService: HuutoNetService) {
        
    }

    ngOnInit() {
        this.huutoNetService.getAllCategories()
            .then((data:HuutoNetCategories) => {
                this.huutoNetCategories = data;
            })
            .catch(er => {
                console.log("Error : " + er);
            });
    }
}