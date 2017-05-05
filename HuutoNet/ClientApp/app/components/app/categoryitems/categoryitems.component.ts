import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryItemsService} from "../../../Services/categoryitems.service";
import {CategoryItems} from "../../../Models/CategoryItems";
import {GlobalsComponentService} from "../globals/globals.component.service";

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
    totalPages: number;

    constructor(http: Http,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private categoryItemsService: CategoryItemsService
    ) {
        
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                if (params && params['id'] && params['pageNumber']) {
                    this.pageNumber = params['pageNumber'];
                    this.categoryId = params['id'];
                    this.getCategoryItems(this.categoryId, this.pageNumber);
                }
            }
        );
    }

    private getCategoryItems(id: number, pageNumber:number) {
        this.categoryItemsService.getCategoryItems(id, pageNumber)
            .then((data: CategoryItems) => {
                if (data) {
                    this.categoryItems = data;
                    if (this.categoryItems.totalCount) {
                        this.totalPages = Math.ceil(this.categoryItems.totalCount / 50);
                        this.previousPage = this.categoryItems.links.previous != null
                            ? parseInt(this.pageNumber.toString()) - 1
                            : null;
                        this.nextPage = this.categoryItems.links.next != null && this.pageNumber < this.totalPages
                            ? parseInt(this.pageNumber.toString()) + 1
                            : null;
                    }
                } else {
                    this.categoryItems = <CategoryItems>{};
                    this.categoryItems.totalCount = 0;
                }
            }).catch(er => {
                console.log("Error: " + er);
            });
    }
}