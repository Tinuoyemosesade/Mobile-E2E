export const config: WebdriverIO.Config = {
  specs: [],
  capabilities: [],
  logLevel: 'debug',
  bail: 0,
  waitforTimeout: 45000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000
  }
}