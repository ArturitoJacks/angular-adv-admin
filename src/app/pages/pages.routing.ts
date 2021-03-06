import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { 
        // dashboard/progres
        // dashboard/grafical
        path: 'dashboard', 
        component: PagesComponent,
        children:[
            { path: '', component: DashboardComponent, data: { titulo:'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { titulo:'PoressBar'}  },
            { path: 'grafical', component: GraficalComponent, data: { titulo:'Grafica'}  },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo:'Ajustes'}  },
            { path: 'promesas', component: PromesasComponent, data: { titulo:'Promesas'}  },
            { path: 'rxjs', component: RxjsComponent, data: { titulo:'Rxjs'}  },
            
            
        ]
  },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
