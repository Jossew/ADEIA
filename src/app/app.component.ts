import { Component, Optional, OnInit } from '@angular/core';
import {
  RouterOutlet,
  Router,
  ActivatedRoute, NavigationEnd, RouterEvent,
} from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  keyframes,
  animateChild,
} from '@angular/animations';
import { fader } from './route-animations';
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  animations: [
    //    slider,
    fader,
  ],
  // animations: [
  //   trigger('routeAnim', [
  //     transition('* => *', [
  //       style({
  //       //  position: 'relative',
  //       }),
  //       query(':enter, :leave', [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //        transform: 'scale(0) translateY(100%)',
  //           width: '100%',
  //           height: '100%'
  //         })
  //       ], { optional: true }),

  //       group([
  //         query(' :enter', [
  //           style({
  //             opacity: 0,
  //           }),
  //           animate('1000ms ease', style({
  //             opacity: 1,
  //             transform: 'scale(1)'
  //           }))
  //         ], { optional: true }),

  //         query(':leave', [
  //           style({
  //             opacity: 1,
  //           }),
  //           animate('1000ms ease', style({
  //             opacity: 0
  //           }))
  //         ], { optional: true }),
  //       ]),
  //     ])
  //   ])
  // ]
})
export class AppComponent implements OnInit {
  selected = 'domain';
  showNav: any;
  url: any;
  selectedMarket ='US';
  constructor(public route: ActivatedRoute, private router: Router) {
    router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        if (event.urlAfterRedirects === '/home') {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
    });
  }
  SIDEBAR_WIDTH = '60px';

  ngOnInit() {
    this.selectedMarket ='US';
  }

  prepareRoute(outlet: RouterOutlet) {
    // console.log(this.url);
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  logOut() {
    this.showNav = false;
    this.router.navigate(['', 'home']);
  }
}
