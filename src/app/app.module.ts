import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import{NgbModule} from'@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    LoginComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [BrowserModule, NgbModule.forRoot(),
    RouterModule.forRoot([{path:'', component:HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'check-out', component:CheckOutComponent},
    {path:'my-orders', component:MyOrdersComponent},
    {path:'order-success', component:OrderSuccessComponent},
    {path:'shopping-cart', component:ShoppingCartComponent},
    {path:'login', component:LoginComponent},
    {path:'admin/products', component:AdminProductsComponent},
    {path:'admin/orders', component:AdminOrdersComponent},
]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
