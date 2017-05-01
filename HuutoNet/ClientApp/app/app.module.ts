import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {HuutoNetComponent} from "./components/huutonet/huutonet.component";
import {HuutoNetService} from "./Services/huutonet.service";
import {CategoryItemsComponent} from "./components/app/categoryitems/categoryitems.component";
import {CategoryItemsService} from "./Services/categoryitems.service";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HuutoNetComponent,
        CategoryItemsComponent
    ],
    providers: [
        HuutoNetService,
        CategoryItemsService
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'huuto-net/categories', component: HuutoNetComponent },
            { path: 'huuto-net/categories/:id', component: CategoryItemsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
