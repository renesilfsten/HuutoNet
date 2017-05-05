import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HuutoNetCategories} from "../../Models/HuutoNetCategories";
import {HuutoNetService} from "../../Services/huutonet.service";
import {GlobalsComponentService} from "../app/globals/globals.component.service";
import {BaseCategory} from "../../Models/BaseCategory";

@Component({
    selector: 'huutonet',
    template: require('./huutonet.component.html')
})
export class HuutoNetComponent {
    public huutoNetCategories: HuutoNetCategories;

    constructor(http: Http, public huutoNetService: HuutoNetService,
        private globalsComponentService: GlobalsComponentService) {
        
    }

    ngOnInit() {
        this.huutoNetService.getAllCategories()
            .then((data:HuutoNetCategories) => {
                this.huutoNetCategories = data;
                this.huutoNetCategories.categories = this.huutoNetCategories.categories.filter(x => x.title !== "K-18");
            })
            .catch(er => {
                console.log("Error : " + er);
            });
    }

    addCategoryVisited(categoryId: number, categoryTitle: string) {
        let tmp: BaseCategory = {
            title: categoryTitle,
            id: categoryId
        };
        
        this.globalsComponentService.categoryVisited.next(tmp);
    }
}