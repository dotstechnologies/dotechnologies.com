import {
  Component,
  OnInit,
  Inject,
  Renderer,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";
import { DOCUMENT } from "@angular/platform-browser";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { version } from "punycode";
// import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(
    private renderer: Renderer,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location,
    // public auth: AuthService,
  ) {
    // auth.handleAuthentication();
  }
  ngOnInit() {
    let navbar: HTMLElement = this.element.nativeElement.children[0]
      .children[0];
    this._router = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (this.location.path() !== "/sections") {
          if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
          } else {
            window.document.activeElement.scrollTop = 0;
          }
        }
        this.navbar.sidebarClose();

        this.renderer.listenGlobal("window", "scroll", event => {
          const number = window.scrollY;
          let _location = this.location.path();
          _location = _location.split("/")[2];
          if (this.location.path() !== "/sections") {
            if (number > 150 || window.pageYOffset > 150) {
              // add logic
              if (_location !== "register") {
                navbar.classList.remove("navbar-transparent");
              }
            } else if (
              _location !== "addproduct" &&
              _location !== "login" &&
              _location !== "register" &&
              this.location.path() !== "/nucleoicons"
            ) {
              // remove logic
              navbar.classList.add("navbar-transparent");
            }
          }
        });
      });

    let ua = window.navigator.userAgent;
    let trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf("rv:");
      // tslint:disable-next-line:no-shadowed-variable
      const version = parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }
    if (version) {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("ie-background");
    }
  }
  removeFooter() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === "signup" || titlee === "nucleoicons") {
      return false;
    } else {
      return true;
    }
  }
}
