import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { BrowseCoursesComponent } from "./browsecourses/browsecourses.component";
import { SectionsComponent } from "./sections/sections.component";
import { AboutusComponent } from "./dots/aboutus/aboutus.component";
import { BlogpostComponent } from "./dots/blogpost/blogpost.component";
import { BlogpostsComponent } from "./dots/blogposts/blogposts.component";
import { ContactusComponent } from "./dots/contactus/contactus.component";
import { EcommerceComponent } from "./dots/ecommerce/ecommerce.component";
import { LandingComponent } from "./dots/landing/landing.component";
// import { LoginComponent } from "./dots/login/login.component";
// import { LoginComponent } from "./auth/login/login.component";
import { ProductpageComponent } from "./dots/productpage/productpage.component";
import { ProfileComponent } from "./dots/profile/profile.component";
import { RegisterComponent } from "./dots/register/register.component";
import { NucleoiconsComponent } from "./browsecourses/nucleoicons/nucleoicons.component";
import { PricingComponent } from "./dots/pricing/pricing.component";
import { HomeComponent } from "./home/home.component";
import { ChargeCardComponent } from "./demo/charge-card/charge-card.component";
import { AuthGuard } from "./core/auth.guard";
import { SaveCardComponent } from "./demo/save-card/save-card.component";
import { SubscriptionPageComponent } from "./demo/subscription-page/subscription-page.component";
import { StripeDashboardComponent } from "./demo/stripe-dashboard/stripe-dashboard.component";
import { ConnectPageComponent } from "./demo/connect-page/connect-page.component";
import { ConnectRedirectComponent } from "./payment/connect-redirect/connect-redirect.component";

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: 'about-us', component: AboutusComponent}, //, canActivate: [AuthGuard]
  { path: 'contact-us', component: ContactusComponent },
  { path: 'people', component: LandingComponent },
  { path: 'dashboard', component: StripeDashboardComponent },

  // Stripe Connect
  { path: 'connect', component: ConnectPageComponent  },
  { path: 'redirect', component: ConnectRedirectComponent },
  
  { path: "browse-courses", component: BrowseCoursesComponent },
  { path: "sections", component: SectionsComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "examples/aboutus", component: AboutusComponent },
  { path: "examples/blogpost", component: BlogpostComponent },
  { path: "examples/blogposts", component: BlogpostsComponent },
  { path: "examples/contactus", component: ContactusComponent },
  { path: "examples/ecommerce", component: EcommerceComponent },
  { path: "examples/landing", component: LandingComponent },
  // { path: "login", component: LoginComponent },
  { path: "examples/pricing", component: PricingComponent },
  { path: "examples/productpage", component: ProductpageComponent },
  { path: "examples/profile", component: ProfileComponent },
  { path: "examples/register", component: RegisterComponent },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
