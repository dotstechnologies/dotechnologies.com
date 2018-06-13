import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { SectionsModule } from "./sections/sections.module";
import { BrowseCoursesModule } from "./browsecourses/browsecourses.module";
import { ExamplesModule } from "./dots/examples.module";

import { AppComponent } from "./app.component";
// import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

import { HomeModule } from "./home/home.module";
import { AgmCoreModule } from "@agm/core";
// import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
// import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
// import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
// import { NgxStripeModule } from "ngx-stripe";
// import { AuthService } from "./service/auth.service";
// import { AuthGuard } from "./service/auth-guard.service";
// import { RoleGuard } from "./service/role-gaurd.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBsPWdknHeIUBAW0k_oDN6pJOCesJ6AmC0"
    }),
    FormsModule,
    ReactiveFormsModule,

    RouterModule,
    AppRoutingModule,
    HomeModule,
    SectionsModule,
    BrowseCoursesModule,
    ExamplesModule,
    // AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
