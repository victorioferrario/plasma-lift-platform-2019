import { TrainingProgramComponent } from './../../../../../../src/app/views/training-programs/components/training.component';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppViewContext, Page, PageIndex } from '@services';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'fab-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isNavigationDriven: boolean;
  isSmallScreen: boolean;
  navigationSubscriber: any;
  navigationSubscription: any;
  constructor(
    public context: AppViewContext,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.isNavigationDriven = false;
    //
    this.isHandset$ = new BehaviorSubject<boolean>(
      breakpointObserver.isMatched(Breakpoints.HandsetPortrait)
    );
    this.isHandset$.asObservable();
    this.isWeblayout$ = new BehaviorSubject<boolean>(
      breakpointObserver.isMatched(Breakpoints.Web)
    );
    this.isWeblayout$.asObservable();
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.activateHandsetLayout();
        } else {
          this.activateWebLayout();
        }
      });
  }
  pageIndex: PageIndex;
  isHandset$: BehaviorSubject<boolean>;
  isWeblayout$: BehaviorSubject<boolean>;

  onToggleMenu() {
    this.context.page.updateSideNav(
      this.context.page.sideNavIsOpen === true ? false : true
    );
  }
  onClick(arg: number) {
    const self = this;
    self.isNavigationDriven = true;
    switch (arg) {
      case 1:
        this.handleNavigationBar(Page.Home, 'Welcome');
        break;
      case 2:
        this.handleNavigationBar(Page.About, 'About');
        break;
      case 4:
        this.handleNavigationBar(Page.Faq, 'Faq');
        break;
      case 3:
        this.handleNavigationBar(Page.Contact, 'Contact');
        break;
      case 5:
        this.handleNavigationBar(Page.TrainingPrograms, 'TrainingPrograms');
        break;
      case 6:
        this.handleNavigationBar(Page.PlasmaDevice, 'Plasma Device');
        break;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      disableClose: true,
      minWidth: this.isSmallScreen ? '97vw' : '80vw'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  protected handleNavigationBar(page: Page, title: string) {
    const self = this;
    self.context.scroll();
    self.context.load(page);
  }
  activateWebLayout() {
    this.isHandset$.next(false);
    this.isWeblayout$.next(true);
    this.isSmallScreen = false;
  }
  activateHandsetLayout() {
    this.isHandset$.next(true);
    this.isWeblayout$.next(false);
    this.isSmallScreen = true;
  }
  ngOnInit() {
    const self = this;
    self.context.dispatchDialog.subscribe((arg: boolean) => {
      self.openDialog();
    });
    self.navigationSubscriber = self.context.page.view.subscribe((arg: any) => {
      if (!self.isNavigationDriven) {
        const path = document.location.pathname.substr(
          1,
          document.location.pathname.length - 1
        ) as Page;
        setTimeout(() => {
          self.isNavigationDriven = true;
          self.handleNavigationBar(path, '');
        }, 1000);
        return;
        self.isNavigationDriven = true;
      }
    });
  }
}
