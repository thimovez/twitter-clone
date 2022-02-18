import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SingupComponent, PopupLogin} from './singup/singup.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginWindowComponent } from './login-window/login-window.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const routes: Routes = [
  { path: '', component: SingupComponent, children: [
      { path: 'singup', component: RegisterModalComponent },
    ], },
  { path: 'login', component: LoginWindowComponent },
  { path: 'singup', component: RegisterModalComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginWindowComponent,
    ErrorComponent,
    RegisterModalComponent,
    PopupLogin

  ],
    imports: [
        BrowserModule,
        [RouterModule.forRoot(routes)],
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
