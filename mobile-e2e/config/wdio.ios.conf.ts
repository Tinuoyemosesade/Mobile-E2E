import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  specs: ["../tests/*.spec.ts"],
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '17.2',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': "/Users/adetinuoye/Library/Developer/Xcode/DerivedData/CircleMedicalPatient-fiyjtpmlgamiusbsexroqgloouck/Build/Products/Development-iphonesimulator/CircleMedicalPatient.app",
    'appium:newCommandTimeout': 240,
  }]
}