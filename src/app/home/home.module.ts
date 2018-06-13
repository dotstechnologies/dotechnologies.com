import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AgmCoreModule } from "@agm/core";
// import { AuthService } from "../core/auth.service";
import { NgxStripeModule } from "ngx-stripe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
// import { AuthService } from "../auth/auth.service";
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgxStripeModule.forRoot("pk_test_SeHbIc4dIdUf2Abq1U70c83J"),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBsPWdknHeIUBAW0k_oDN6pJOCesJ6AmC0"
    })
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [
  
    // AuthService
    /*{
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: "6LedbFwUAAAAALEHax4H3uJQbPq8ufu4hiaRhrvS"
      } as RecaptchaSettings
    }*/
  ]
})
export class HomeModule {}
