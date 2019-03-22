import { BehaviorSubject } from 'rxjs';
import { PageIndex } from './enums/PageIndex';
// lablePlasmaDevice | lablePlasmaDevice | lableHowItWorks;
export interface INavContext {
  cssActive: string;
  labelHome: BehaviorSubject<string>;
  labelContactUs: BehaviorSubject<string>;
  cssRegular: string;
  labelHowItWorks: BehaviorSubject<string>;
  labelPlasmaDevice: BehaviorSubject<string>;
  labelTrainingPrograms: BehaviorSubject<string>;
  reset(): boolean;
  update(pageIndex: PageIndex): void;
}
export class NavContext implements INavContext {
  cssActive = 'active-label';
  cssRegular = 'regular';
  labelHome: BehaviorSubject<string>;
  labelContactUs: BehaviorSubject<string>;
  labelHowItWorks: BehaviorSubject<string>;
  labelPlasmaDevice: BehaviorSubject<string>;
  labelTrainingPrograms: BehaviorSubject<string>;
  constructor() {
    const self = this;
    self.labelHome = new BehaviorSubject<string>(this.cssRegular);
    self.labelHome.asObservable();
    self.labelContactUs = new BehaviorSubject<string>(this.cssRegular);
    self.labelContactUs.asObservable();
    self.labelHowItWorks = new BehaviorSubject<string>(this.cssRegular);
    self.labelHowItWorks.asObservable();
    self.labelPlasmaDevice = new BehaviorSubject<string>(this.cssRegular);
    self.labelPlasmaDevice.asObservable();
    self.labelTrainingPrograms = new BehaviorSubject<string>(this.cssRegular);
    self.labelTrainingPrograms.asObservable();
  }

  protected factory() {
    const behaviorSubject = new BehaviorSubject<string>(this.cssRegular);
    behaviorSubject.asObservable();
    return behaviorSubject;
  }
  update(pageIndex: PageIndex) {
    if (this.reset()) {
      switch (pageIndex) {
        case PageIndex.Home:
          this.labelHome.next(this.cssActive);
          break;
        case PageIndex.About:
          this.labelHowItWorks.next(this.cssActive);
          break;
        case PageIndex.TrainingPrograms:
          this.labelTrainingPrograms.next(this.cssActive);
          break;
        case PageIndex.PlasmaDevice:
          this.labelPlasmaDevice.next(this.cssActive);
          break;
        case PageIndex.Contact:
          this.labelContactUs.next(this.cssActive);
          break;
      }
    }
  }
  reset(): boolean {
    const self = this;
    self.labelHome.next(this.cssRegular);
    self.labelContactUs.next(this.cssRegular);
    self.labelHowItWorks.next(this.cssRegular);
    self.labelPlasmaDevice.next(this.cssRegular);
    self.labelTrainingPrograms.next(this.cssRegular);
    return true;
  }
}
