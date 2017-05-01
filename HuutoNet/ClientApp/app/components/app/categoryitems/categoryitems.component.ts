import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {CategoryItemsService} from "../../../Services/categoryitems.service";
import {CategoryItems} from "../../../Models/CategoryItems";

@Component({
    selector: 'category-items',
    template: require('./categoryitems.component.html')
})
export class CategoryItemsComponent {
    categoryItems: CategoryItems;
    categoryId: number;
    pageNumber: number;
    previousPage: number;
    nextPage: number;

    constructor(http: Http,
        private activatedRoute: ActivatedRoute,
        private categoryItemsService: CategoryItemsService
    ) {
        
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                if (params && params['id'] || params['pageNumber']) {
                    this.pageNumber = params['pageNumber'];
                    this.categoryId = params['id'];
                    this.getCategoryItems(this.categoryId, this.pageNumber);
                    this.previousPage = parseInt(this.pageNumber.toString()) - 1;
                    this.nextPage = parseInt(this.pageNumber.toString()) + 1;
                }
            }
        );
    }

    private getCategoryItems(id: number, pageNumber:number) {
        this.categoryItemsService.getCategoryItems(id, pageNumber)
            .then((data: CategoryItems) => {
                this.categoryItems = data;
            }).catch(er => {
                
            });
    }
}