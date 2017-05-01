import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryItemsService} from "../../../Services/categoryitems.service";
import {CategoryItems} from "../../../Models/CategoryItems";

@Component({
    selector: 'category-items',
    template: require('./categoryitems.component.html')
})
export class CategoryItemsComponent {
    categoryItems: CategoryItems;

    constructor(http: Http,
        private activatedRoute: ActivatedRoute,
        private categoryItemsService: CategoryItemsService
    ) {
        
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                if (params && params['id'])
                    this.getCategoryItems(params['id']);
            }
        );
    }

    private getCategoryItems(id: number) {
        this.categoryItemsService.getCategoryItems(id)
            .then((data: CategoryItems) => {
                this.categoryItems = data;
            }).catch(er => {
                
            });
    }
}