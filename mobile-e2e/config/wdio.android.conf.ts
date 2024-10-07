import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  specs: ["../tests/*.spec.ts"],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel 8 Pro',
    'appium:platformVersion': '15.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': "/Users/adetinuoye/Documents/GitHub/CircleMedicalPatient-Android/app/build/outputs/apk/dev/debug/app-dev-debug.apk",
    'appium:newCommandTimeout': 240,
  }]
}