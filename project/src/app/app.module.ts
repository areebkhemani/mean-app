import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

import {StartupService} from './services/startup.service';
import {DonationService} from './services/donation.service';
import { AuthService } from './services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AuthGuard } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SignupComponent } from './signup/signup.component';
import { NoaccessComponent } from './noaccess/noaccess.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ListpostComponent } from './listpost/listpost.component';
import { DonateComponent } from './donate/donate.component';

import { MypostsComponent } from './myposts/myposts.component';

import { ViewdonationsComponent } from './viewdonations/viewdonations.component';
import { MydonationsComponent } from './mydonations/mydonations.component';
import { MakestartupComponent } from './makestartup/makestartup.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapPanelComponent,
    NavbarComponent,
    DonateComponent,
    
    SignupComponent,
    LoginComponent,
    NoaccessComponent,
    PostComponent,
    ListpostComponent,
    
    MypostsComponent,

    ViewdonationsComponent,
    MydonationsComponent,
    MakestartupComponent
 

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'signup',
        component:SignupComponent
      },

      {
        path:'donate',
        component:DonateComponent
      },

      {
        path:'donate/:id',
        component:DonateComponent
      },

      {
        path:'viewdonation',
        component:ViewdonationsComponent
      },
      {
        path:'viewdonation/:id',
        component:ViewdonationsComponent
      },

      {
        path:'mydonation',
        component:MydonationsComponent
      },

      {
        path:'makestartup',
        component:MakestartupComponent
      },
      {
        path:'makestartup/:id',
        component:MakestartupComponent
      },
    

     
    



      {
        path:'myposts',
        component:MypostsComponent,
       
      },

      {
        path:'Post',
        component:PostComponent
      },

      {
        path:'List',
        component:ListpostComponent
      },

      
    


      {
        path:'login',
        component:LoginComponent
      },

      {
        path:'noaccess',
        component:NoaccessComponent
      }
    ])
    
  ],
  providers: [
    UserService,
    PostService,
    StartupService,
    
    DonationService,
    AuthService,
    AuthGuard,
   
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
