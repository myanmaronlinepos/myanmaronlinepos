import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProductsComponent } from './layout/products/products.component';
import { AllProductsComponent } from './layout/products/all-products/all-products.component';
import { InventoryComponent } from './layout/products/inventory/inventory.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { SettingComponent } from './layout/setting/setting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ImportedModules } from './share/import-moudle.module';
import { RoutingModule } from './router-module.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MainFormComponent } from './signup/forms/main-form/main-form.component';
import { CategoryComponent } from './layout/products/category/category.component';
import { DiscountComponent } from './layout/products/discount/discount.component';
import { GeneralComponent } from './layout/setting/general/general.component';
import { ProfileComponent } from './layout/setting/profile/profile.component';
import { SellComponent } from './layout/sell/sell.component';
import { OrderComponent } from './layout/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    AllProductsComponent,
    InventoryComponent,
    CustomersComponent,
    SettingComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    HomeComponent,
    MainFormComponent,
    CategoryComponent,
    DiscountComponent,
    GeneralComponent,
    ProfileComponent,
    SellComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ImportedModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }