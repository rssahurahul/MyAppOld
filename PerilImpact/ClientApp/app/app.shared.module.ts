import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        DashBoardComponent,
        FetchDataComponent       
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([

            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            //{ path: '**', redirectTo: 'DashBoardComponent' }
        ])
    ]
})
export class AppModuleShared {
}
