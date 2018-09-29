import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component'; 
import { InterlinkService } from './interlink.service';
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
	  HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InterlinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
