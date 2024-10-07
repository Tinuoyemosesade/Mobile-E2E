import BaseScreen from "./BaseScreen.js";
import { $ } from '@wdio/globals';

const SELECTORS = {
  USERNAME: '~username',
  PASSWORD: '~password',
  LOGIN_BUTTON: '~Log in'  
}

class LoginScreen extends BaseScreen {
  constructor() {
    super(SELECTORS.USERNAME); 
  }

  async login(username: string, password: string): Promise<void> {
    await $(SELECTORS.USERNAME).setValue(username);
    await $(SELECTORS.PASSWORD).setValue(password);
    await $(SELECTORS.LOGIN_BUTTON).click(); 
  }

  async isLoginButtonDisplayed(): Promise<boolean> {
    return $(SELECTORS.LOGIN_BUTTON).isDisplayed();
  }
}

export default new LoginScreen();