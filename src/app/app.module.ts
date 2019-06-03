import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProductsComponent } from './layout/products/products.component';
import { AllProductsComponent } from './layout/products/all-products/all-products.component';
import { TransfersComponent } from './layout/products/transfers/transfers.component';
import { InventoryComponent } from './layout/products/inventory/inventory.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { SettingComponent } from './layout/setting/setting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ImportedModules } from './share/import-moudle.module';
import { RoutingModule } from './router-module.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    AllProductsComponent,
    TransfersComponent,
    InventoryComponent,
    CustomersComponent,
    SettingComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    ImportedModules,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
