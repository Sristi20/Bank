import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisComponent } from './permis/permis.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PermisComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
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
  
     ])

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
