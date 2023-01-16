import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-navdrawer',
  templateUrl: './navdrawer.component.html',
  styleUrls: ['./navdrawer.component.scss']
})
export class NavdrawerComponent implements OnInit {
  navElement: HTMLElement;
  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

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

  toggleNavDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

}
