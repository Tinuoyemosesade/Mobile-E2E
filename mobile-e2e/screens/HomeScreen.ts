import BaseScreen from "./BaseScreen.js";
import { $, driver } from "@wdio/globals";

const SELECTORS = {
  BACKGROUND_GRAPHIC: {
    ios: "~landing-background-graphic",
    android: "id:co.circlemedical.patient.demo:id/background",
  },
};

class HomeScreen extends BaseScreen {
  private backgroundGraphicSelector: string;

  constructor() {
    const platformSelector = driver.isIOS
      ? SELECTORS.BACKGROUND_GRAPHIC.ios
      : SELECTORS.BACKGROUND_GRAPHIC.android;
    super(platformSelector);
    this.backgroundGraphicSelector = platformSelector;
  }

  async waitForScreenLoaded() {
    return $(this.backgroundGraphicSelector).waitForDisplayed();
  }

  async isBackgroundGraphicDisplayed(): Promise<boolean> {
    return $(this.backgroundGraphicSelector).isDisplayed();
  }
}

export default new HomeScreen();
