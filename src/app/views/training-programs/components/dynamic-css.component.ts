import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';
export interface IProps {
  minHeight: string[];
  backgroundSizes: string[];
  backgroundImages: string[];
}
export class DynamicGenerator {
  public static BuildStyle(props: IProps) {
    return (
      `.container {
            width: 100%;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            background-repeat: no-repeat;
            background-position: center top;
            min-height: ` +
      props.minHeight[0] +
      `;
            background-size: ` +
      props.backgroundSizes[0] +
      `;
            background-image: ` +
      props.backgroundImages[0] +
      `;
            }
            @media(max-width: 1500px) {
            .container {
                 min-height: ` +
      props.minHeight[1] +
      `;
            background-size: ` +
      props.backgroundSizes[1] +
      `;
            background-image: ` +
      props.backgroundImages[1] +
      `;
            }
            }
            @media(max-width: 1200px) {
            .container {
                 min-height: ` +
      props.minHeight[2] +
      `;
            background-size: ` +
      props.backgroundSizes[2] +
      `;
            background-image: ` +
      props.backgroundImages[2] +
      `;
            }
            }
            @media(max-width: 700px) {
            .container {
                 min-height: ` +
      props.minHeight[3] +
      `;
            background-size: ` +
      props.backgroundSizes[3] +
      `;
            background-image: ` +
      props.backgroundImages[3] +
      `;
            }
            }`
    );
  }
}

export const data: IProps = {
  minHeight: ['300px', '250px', '250px', '200px'],
  backgroundSizes: [
    '1920px 398px',
    '1500px 311px',
    '1200px 300px',
    '700px 200px'
  ],
  backgroundImages: [
    'url(/assets/banners/banner-02-1920x398.png)',
    'url(/assets/banners/banner-02-1500x311.png)',
    'url(/assets/banners/banner-02-1200x300.png)',
    'url(/assets/banners/banner-02-700x200.png)'
  ]
};

@Component({
  selector: 'app-dynamic-css',
  template: `
    <ng-container> <section class="container"></section></ng-container>
  `,
  styles: [DynamicGenerator.BuildStyle(data)]
})
export class DynamicStyleComponent implements OnInit {
  constructor(private context: AppViewContext) {}
  ngOnInit() {}
  getStyles() {
    return '';
  }
}

//  'banner-url': 'url(/assets/banners/banner-02-1920x398.png)',
//       '300px',
//       '250px','300px', '200px'
