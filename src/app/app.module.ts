import {Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisComponent } from './permis/permis.component';
import { FilterPipe } from './filter.pipe';
import { SettlepagePipe } from './settlepage.pipe';
import { UserComponent } from './user/user.component';
import { SettlementcontentComponent } from './settlementcontent/settlementcontent.component';
import { SettlementComponent } from './settlement/settlement.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { QueriesComponent } from './queries/queries.component';
import { ProductComponent } from './product/product.component';
import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { HeaderComponent } from './header/header.component';
import { ComComponent } from './com/com.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PermisComponent,
    FilterPipe,
    SettlepagePipe,
    UserComponent,
    SettlementcontentComponent,
    SettlementComponent,
    RecoveryComponent,
    QueriesComponent,
    ProductComponent,
    LeftnavbarComponent,
    HeaderComponent,
    ComComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:"working",
        component: PermisComponent
      },
      {
        path:'',
        redirectTo:'/working',
        pathMatch:'full'
      },
      {
        path:"header",
        component: HeaderComponent
      },
      {
        path:"leftnavbar",
        component: LeftnavbarComponent
      },
      {
        path:"settle",
        component: SettlementComponent
      },
      {
        path:"settlement",
        component: SettlementcontentComponent
      },
      {
        path:"recovery",
        component:RecoveryComponent
      },
      {
        path:"com",
        component: ComComponent
      },
      {
        path:"product",
        component: ProductComponent
      },
      {
        path:"queries",
        component: QueriesComponent
      },
      {
        path:"user",
        component: UserComponent
      },
 
     
  
     ])

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
