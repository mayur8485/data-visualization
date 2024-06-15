import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NavTabComponent } from "./nav-tab/nav-tab.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'visualize',
        component: NavTabComponent,
    }
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }