import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    ProductsComponent,
    AllProductsComponent,
    TransfersComponent,
    InventoryComponent,
    CustomersComponent,
    SettingComponent,
    LoginComponent,
    SignupComponent
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
