import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fab-social-links-header',
  styles: [
    `
      .social-button {
        margin-left: 2px;
        margin-right: 10px;
        margin-top: 8px;
        opacity: 0.22;
        width: 42px;
        height: 42px;
        max-width: 42px !important;
        text-align: center;
        border-radius: 12%;
      }
      .social-button img {
        max-width: 36px;
        min-width: 36px;
        margin-top: 8px;
      }
      .tooltip-primary {
        background: #009ebd;
      }
      .tooltip-instagram {
        background: #cc0000;
      }
    `
  ],
  template: `
    <ng-container>
      <a
        class="social-button"
        href="https://www.facebook.com/plasmaLiftAcademy"
        target="_blank"
        aria-label="Facebook"
        matRipple
        matTooltipClass="tooltip-primary"
        matTooltip="View us on Facebook!"
      >
        <img src="assets/facebook.svg" />
      </a>
      <a
        class="social-button"
        href="https://www.instagram.com/plasma_lift_academy/"
        target="_blank"
        aria-label="Instagram"
        matRipple
        matTooltipClass="tooltip-instagram"
        matTooltip="View us on Instagram!"
      >
        <img src="assets/instagram.svg" /> </a
    ></ng-container>
  `,
  encapsulation: ViewEncapsulation.None
})
export class HeaderSocialLinksComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
