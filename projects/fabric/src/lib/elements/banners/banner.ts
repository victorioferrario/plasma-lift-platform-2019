export enum BannerType {
  Banner01 = 'banner01',
  Banner02 = 'banner02',
  Banner03 = 'banner03',
  Banner04 = 'banner04',
  Banner05 = 'banner05',
  Banner06 = 'banner06'
}
export interface BannerTheme {
  'banner-url': string;
  'banner-size': string;
  'banner-min-height': string;
  'banner-url-1500': string;
  'banner-size-1500': string;
  'banner-min-height-1500': string;
  'banner-url-1200': string;
  'banner-size-1200': string;
  'banner-min-height-1200': string;
  'banner-url-700': string;
  'banner-size-700': string;
  'banner-min-height-700': string;
}
export interface BannerTypedTheme {
  banner01: BannerTheme;
  banner02: BannerTheme;
  banner03: BannerTheme;
  banner04: BannerTheme;
  banner05: BannerTheme;
  banner06: BannerTheme;
}

export class BannerThemes {
  public static readonly themes: BannerTypedTheme = {
    banner01: {
      'banner-url': 'url(/assets/banners/banner-1920x340.jpg)',
      'banner-min-height': '340px',
      'banner-size': '1920px 340px',
      'banner-url-1500': 'url(/assets/banners/banner-1500x340.jpg)',
      'banner-min-height-1500': '340px',
      'banner-size-1500': '1500px 340px',
      'banner-url-1200': 'url(/assets/banners/banner-1200x340.jpg)',
      'banner-min-height-1200': '340px',
      'banner-size-1200': '1200px 340px',
      'banner-url-700': 'url(/assets/banners/banner-700x198.jpg)',
      'banner-min-height-700': '198px',
      'banner-size-700': '700px 198px'
    },
    banner02: {
      'banner-url': 'url(/assets/banners/banner-02-1920x398.jpg)',
      'banner-min-height': '300px',
      'banner-size': '1920px 398px',
      'banner-url-1500': 'url(/assets/banners/banner-02-1500x311.jpg)',
      'banner-min-height-1500': '250px',
      'banner-size-1500': '1500px 311px',
      'banner-url-1200': 'url(/assets/banners/banner-02-1200x300.jpg)',
      'banner-min-height-1200': '250px',
      'banner-size-1200': '1200px 300px',
      'banner-url-700': 'url(/assets/banners/banner-02-700x200.jpg)',
      'banner-min-height-700': '200px',
      'banner-size-700': '700px 200px'
    },
    banner03: {
      'banner-url': 'url(/assets/banners/banner-03-1920x398.jpg)',
      'banner-min-height': '300px',
      'banner-size': '1920px 398px',
      'banner-url-1500': 'url(/assets/banners/banner-03-1500x311.jpg)',
      'banner-min-height-1500': '250px',
      'banner-size-1500': '1500px 311px',
      'banner-url-1200': 'url(/assets/banners/banner-03-1200x300.jpg)',
      'banner-min-height-1200': '250px',
      'banner-size-1200': '1200px 300px',
      'banner-url-700': 'url(/assets/banners/banner-03-700x200.jpg)',
      'banner-min-height-700': '200px',
      'banner-size-700': '700px 200px'
    },
    banner04: {
      'banner-url': 'url(/assets/banners/banner-04-1920x300.jpg)',
      'banner-min-height': '300px',
      'banner-size': '1920px 300px',
      'banner-url-1500': 'url(/assets/banners/banner-04-1500x250.jpg)',
      'banner-min-height-1500': '250px',
      'banner-size-1500': '1500px 250px',
      'banner-url-1200': 'url(/assets/banners/banner-04-1200x250.jpg)',
      'banner-min-height-1200': '250px',
      'banner-size-1200': '1200px 250px',
      'banner-url-700': 'url(/assets/banners/banner-04-700x200.jpg)',
      'banner-min-height-700': '200px',
      'banner-size-700': '700px 200px'
    },
    banner05: {
      'banner-url': 'url(/assets/banners/banner-05-1920x300.jpg)',
      'banner-min-height': '300px',
      'banner-size': '1920px 300px',
      'banner-url-1500': 'url(/assets/banners/banner-05-1500x250.jpg)',
      'banner-min-height-1500': '250px',
      'banner-size-1500': '1500px 250px',
      'banner-url-1200': 'url(/assets/banners/banner-05-1200x250.jpg)',
      'banner-min-height-1200': '250px',
      'banner-size-1200': '1200px 250px',
      'banner-url-700': 'url(/assets/banners/banner-05-700x200.jpg)',
      'banner-min-height-700': '200px',
      'banner-size-700': '700px 200px'
    },
    banner06: {
      'banner-url': 'url(/assets/banners/banner-06-1920x300.jpg)',
      'banner-min-height': '300px',
      'banner-size': '1920px 300px',
      'banner-url-1500': 'url(/assets/banners/banner-06-1500x250.jpg)',
      'banner-min-height-1500': '250px',
      'banner-size-1500': '1500px 250px',
      'banner-url-1200': 'url(/assets/banners/banner-06-1200x250.jpg)',
      'banner-min-height-1200': '250px',
      'banner-size-1200': '1200px 250px',
      'banner-url-700': 'url(/assets/banners/banner-06-700x200.jpg)',
      'banner-min-height-700': '200px',
      'banner-size-700': '700px 200px'
    }
  };
}
