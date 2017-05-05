import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { HuutoNetCategories } from "../../Models/HuutoNetCategories";
import { HuutoNetService } from "../../Services/huutonet.service";
import { Subscription } from 'rxjs';
import {GlobalsComponentService} from "../app/globals/globals.component.service";
import {BaseCategory} from "../../Models/BaseCategory";

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent {
    categoryVisitedSubscription: Subscription;
    visitedCategories: BaseCategory[] = [];

    constructor(http: Http, public huutoNetService: HuutoNetService,
    private globalsComponentService: GlobalsComponentService) {

    }

    ngOnInit() {
        this.categoryVisitedSubscription = this.globalsComponentService.categoryVisited.subscribe(
            (category: BaseCategory) => {
                if (this.visitedCategories.filter(x => x.id === category.id).length > 0) {
                    let pos = this.visitedCategories.map(function (e) { return e.id; }).indexOf(category.id);
                    this.visitedCategories.splice(pos, 1);
                }
                    
                this.visitedCategories.unshift(category);

                if (this.visitedCategories.length === 6)
                    this.visitedCategories.pop();
            }
        );
    }

    ngOnDestroy() {
        this.categoryVisitedSubscription.unsubscribe();
    }
}