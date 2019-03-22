import { Page } from './enums/Page';
import { Load } from './enums/Load';
import { IPageInkState } from './IPageInkState';

export interface IPageState {
  view: Page;
  load: Load;
  index: number;
}
export class PageState implements IPageState {
  view: Page;
  load: Load;
  index: number;
  ink: IPageInkState;
  constructor(
    newLoad: Load,
    newPage: Page,
    newIndex: number,
    newInk: IPageInkState
  ) {
    this.load = newLoad;
    this.view = newPage;
    this.index = newIndex;
    this.ink = newInk;
  }
}
