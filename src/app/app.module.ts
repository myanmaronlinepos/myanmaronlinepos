import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { DetailFormComponent } from './signup/forms/detail-form/detail-form.component';
import { NewCategoryComponent } from './layout/products/new-category/new-category.component';
import { MatTableModule } from '@angular/material';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';
import { AssignproductComponent } from './layout/assignproduct/assignproduct.component';
import { SellStockComponent } from './layout/sell/sell-stock/sell-stock.component';
import { SellTableComponent } from './layout/sell/sell-table/sell-table.component';
import { AddProductComponent } from './layout/products/add-product/add-product.component';

import {TagComponent} from './layout/products/tag/tag.component';
import { NewTagsComponent } from './layout/products/new-tags/new-tags.component';
import { DetailProductComponent } from './layout/products/detail-product/detail-product.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    OrderComponent,
    NavBarComponent,
    NewCategoryComponent,
    AssignproductComponent,
    DetailFormComponent,
    HomeNavbarComponent,
    HomeBodyComponent,
    SellStockComponent,
    SellTableComponent,
    AddProductComponent,
    TagComponent,
    NewTagsComponent,
    DetailProductComponent
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatTableModule,
    ImportedModules,
    ReactiveFormsModule
  ],
  entryComponents:[
    NewCategoryComponent,
    AssignproductComponent,
    NewTagsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
