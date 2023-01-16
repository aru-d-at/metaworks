import { Component, OnInit, HostListener} from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { StateService } from '../../../core/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navElement: HTMLElement = null;
  constructor(
    private readonly authService: AuthService,
    readonly stateService: StateService,
    private readonly router: Router
  ) {}

  ngAfterViewInit() {
    this.navElement = <HTMLElement> document.getElementById("navbar");
  }

  @HostListener("window:scroll", ["$event"])
  onScroll($event: Event) {
    let scrollFactor = 200;
    let opacity = (window.pageYOffset / scrollFactor);
    opacity = opacity < 1 ? opacity : 1;

    if (opacity <= 1) {
      this.navElement.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
    }

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add("navbar-shadow");
    } else {
      this.navElement.classList.remove("navbar-shadow");
    }
  }

  ngOnInit() {}

  logOut() {
    this.authService.signOut();
    this.router.navigateByUrl('/');
  }
}
