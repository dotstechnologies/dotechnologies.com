import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import swal from "sweetalert2";
declare var $: any;
import * as Rellax from "rellax";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  NgForm,
  AbstractControl,
  NgControl
} from "@angular/forms";

import {
  StripeService,
  StripeCardComponent,
  ElementOptions,
  ElementsOptions
} from "ngx-stripe";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  didFail = false;
  isLoading = false;
  
  // choose plan -- start
  closeResult: string;
  @ViewChild("stripeForm") form: NgForm;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  stripeTest: FormGroup;

  // choose plan -- end
  // stripe
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: ElementOptions = {
    style: {
      base: {
        color: "#32325d",
        lineHeight: "18px",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  elementsOptions: ElementsOptions = {
    locale: "en"
  };

  /*stripeTest = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    phone: new FormControl()
  });*/
  // stripe --> end
  // contact us --> start
  zoom: number = 12;
  lat: number = 40.543502;
  lng: number = -74.494965;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }]
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }]
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
    }
  ];
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  // contact us --> end
  model = {
    left: true,
    middle: false,
    right: false
  };
  date: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.stripeTest = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      phone: ["", Validators.required],
      name: ["", Validators.required]
    });
    // this.auth.login();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("home-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  ngAfterViewInit() {
    this.stripeTest = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      phone: ["", Validators.required],
      name: ["", Validators.required]
    });
    setTimeout(function() {
      if (window.innerWidth >= 991) {
        /*var rellax = new Rellax(".rellax", {
          center: true
        });
        var rellax1 = new Rellax(".rellax1", {
          center: true
        });
        var rellax5 = new Rellax(".rellax5", {
          center: true
        });
        var rellax6 = new Rellax(".rellax6", {
          center: true
        });
        var rellax7 = new Rellax(".rellax7", {
          center: true
        });
        var rellax8 = new Rellax(".rellax8", {
          center: true
        });
        var rellax9 = new Rellax(".rellax9", {
          center: true
        });
        var rellax10 = new Rellax(".rellax10", {
          center: true
        });
        var rellax11 = new Rellax(".rellax11", {
          center: true
        });
        var rellax12 = new Rellax(".rellax12", {
          center: true
        });
        var rellax13 = new Rellax(".rellax13", {
          center: true
        });
        var rellax14 = new Rellax(".rellax14", {
          center: true
        });*/
         var rellaxHeader = new Rellax(".rellax-header");
         var rellaxText = new Rellax(".rellax-text");
      }
    }, 200);
  }
  ngOnDestroy() {
     var body = document.getElementsByTagName("body")[0];
     body.classList.remove("home-page");
     var navbar = document.getElementsByTagName("nav")[0];
      navbar.classList.remove("navbar-transparent");
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  open(content, type, modalDimension) {
    if (modalDimension === "sm" && type === "modal_mini") {
      this.modalService
        .open(content, { windowClass: "modal-mini modal-primary", size: "sm" })
        .result.then(
          result => {
            this.closeResult = `Closed with: ${result}`;
          },
          reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    } else if (modalDimension == undefined && type === "Login") {
      console.log("login");
      this.modalService
        .open(content, { windowClass: "modal-login modal-primary" })
        .result.then(
          result => {
            this.closeResult = `Closed with: ${result}`;
          },
          reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    } else {
      console.log("else");
      this.modalService.open(content).result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  buy() {
    // user in aws cognito - start
    const usrName = this.stripeTest.value.name;
    const email = this.stripeTest.value.email;
    const password = this.stripeTest.value.password;
    // this.authService.signUp(usrName, email, password);
    this.form.resetForm();
    // user in aws cognito - end
    console.log(this.stripeTest.value);
    const name = this.stripeTest.get("name").value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  showSwal(type) {
    if (type === "basic") {
      console.log("basic");
      swal({
        title: "Here is a message!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      }).catch(swal.noop);
    } else if (type === "title-and-text") {
      swal({
        title: "Here is a message!",
        text: "It is pretty, is not it?",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info"
      }).catch(swal.noop);
    } else if (type === "success-message") {
      swal({
        type: "success",
        title: "Good job!",
        text: "You clicked the button!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      }).catch(swal.noop);
    } else if (type === "warning-message-and-confirmation") {
      swal({
        title: "Are you sure?",
        text: "You will not be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false
      })
        .then(function() {
          swal({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
          });
        })
        .catch(swal.noop);
    } else if (type === "warning-message-and-cancel") {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false
      })
        .then(
          function() {
            swal({
              title: "Deleted!",
              text: "Your imaginary file has been deleted.",
              type: "success",
              confirmButtonClass: "btn btn-success",
              buttonsStyling: false
            });
          },
          function(dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === "cancel") {
              swal({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                type: "error",
                confirmButtonClass: "btn btn-info",
                buttonsStyling: false
              });
            }
          }
        )
        .catch(swal.noop);
    } else if (type === "custom-html") {
      swal({
        title: "HTML example",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="http://github.com">links</a> ' +
          "and other HTML tags"
      }).catch(swal.noop);
    } else if (type === "auto-close") {
      swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      })
        .then(
          function() {},
          // handling the promise rejection
          function(dismiss) {
            if (dismiss === "timer") {
              console.log("I was closed by the timer");
            }
          }
        )
        .catch(swal.noop);
    } else if (type === "free trial") {
      swal({
        title: "Input something",
        html: `<div class="form-group">' +
          '<input id="input-field" type="text" class="form-control" />' +
          "</div>`,
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false
      })
        .then(function(result) {
          swal({
            type: "success",
            html:
              "You entered: <strong>" + $("#input-field").val() + "</strong>",
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
          });
        })
        .catch(swal.noop);
    }
  }
}
