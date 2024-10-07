import { $ } from '@wdio/globals'

export default class BaseScreen {
  private selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  async waitForScreenLoaded() {
    return $(this.selector).waitForDisplayed()
  }
}