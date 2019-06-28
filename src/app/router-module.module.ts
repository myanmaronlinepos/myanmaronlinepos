import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AllProductsComponent } from './layout/products/all-products/all-products.component';
import { ProductsComponent } from './layout/products/products.component';
import { CategoryComponent } from './layout/products/category/category.component';
import { DiscountComponent } from './layout/products/discount/discount.component';
import { InventoryComponent } from './layout/products/inventory/inventory.component';
import { SettingComponent } from './layout/setting/setting.component';
import { GeneralComponent } from './layout/setting/general/general.component';
import { ProfileComponent } from './layout/setting/profile/profile.component';
import { SellComponent } from './layout/sell/sell.component';
import { OrderComponent } from './layout/order/order.component';
import { MainFormComponent } from './signup/forms/main-form/main-form.component';
import { DetailFormComponent } from './signup/forms/detail-form/detail-form.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent, children:[
        { path: "", component: HomeBodyComponent }
    ]},
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent,children:[
        {path:"",component:MainFormComponent},
        {path:"detail",component:DetailFormComponent}
    ]},
    {
        path: "dashboard", component: LayoutComponent, children: [
            { path: "dashboard", component: DashboardComponent },
            {
                path: "products", component: ProductsComponent, children: [
                    { path: "allproducts", component: AllProductsComponent },
                    { path: "category", component: CategoryComponent },
                    { path: "discount", component: DiscountComponent },
                    { path: "inventory", component: InventoryComponent }
                ]
            },

            {
                path: "sell", component: SellComponent
            },

            {
                path: "order", component: OrderComponent
            },

            {
                path: "setting", component: SettingComponent, children: [
                    { path: "general", component: GeneralComponent },
                    { path: "profile", component: ProfileComponent }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
