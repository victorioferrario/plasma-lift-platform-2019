import { Page } from './Page';
import { PageIndex } from './PageIndex';
import { IPageInkState } from '../IPageInkState';
import { PageInkPosition, PageInkWidth } from './PageInkPosition';
export class EnumParse {
  public static GetPageIndex(page: Page): PageIndex {
    switch (page) {
      case Page.About: {
        return PageIndex.About;
      }
      case Page.Contact: {
        return PageIndex.Contact;
      }
      case Page.Home: {
        return PageIndex.Home;
      }
      case Page.PageNotFound: {
        return PageIndex.PageNotFound;
      }
      case Page.Faq: {
        return PageIndex.Faq;
      }
      case Page.GetStarted: {
        return PageIndex.GetStarted;
      }
      case Page.PlasmaDevice: {
        return PageIndex.PlasmaDevice;
      }
      case Page.TrainingPrograms: {
        return PageIndex.TrainingPrograms;
      }
    }
  }
  public static GetPageInkState(page: Page): IPageInkState {
    switch (page) {
      case Page.About: {
        return {
          width: PageInkWidth.About,
          left: PageInkPosition.About
        };
      }
      case Page.Contact: {
        return {
          width: PageInkWidth.Contact,
          left: PageInkPosition.Contact
        };
      }
      case Page.Home: {
        return {
          width: PageInkWidth.Home,
          left: PageInkPosition.Home
        };
      }
      case Page.Faq: {
        return {
          width: PageInkWidth.Faq,
          left: PageInkPosition.Faq
        };
      }
      case Page.GetStarted: {
        return {
          width: PageInkWidth.GetStarted,
          left: PageInkPosition.GetStarted
        };
      }
      case Page.PlasmaDevice: {
        return {
          width: PageInkWidth.PlasmaDevice,
          left: PageInkPosition.PlasmaDevice
        };
      }
      case Page.TrainingPrograms: {
        return {
          width: PageInkWidth.TrainingPrograms,
          left: PageInkPosition.TrainingPrograms
        };
      }
    }
  }
}
