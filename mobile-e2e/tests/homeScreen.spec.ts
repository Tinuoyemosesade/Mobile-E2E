import homeScreen from "../screens/HomeScreen.js";
import { expect } from "chai";

describe("Home screen tests", () => {
  it("should display the home screen with the correct background graphic", async () => {
    const platformName = (
      browser.capabilities.platformName ?? ""
    ).toLowerCase();

    if (platformName === "ios") {
      await browser.execute("mobile: launchApp", {
        bundleId: "com.circlemedical.CircleMedicalPatient.beta",
      });
    } else if (platformName === "android") {
      await browser.execute("mobile: activateApp", {
        appId: "co.circlemedical.patient.demo",
      });
    }

    await homeScreen.waitForScreenLoaded();
    const isGraphicVisible = await homeScreen.isBackgroundGraphicDisplayed();
    expect(isGraphicVisible).to.be.true;
  });
});
