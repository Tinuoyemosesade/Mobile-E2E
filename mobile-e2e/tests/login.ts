import loginScreen from '../screens/LoginScreen.js';
import { expect } from 'chai';

describe.skip('Login screen tests', () => {
  it('should launch the app and display the login screen with a clickable login button', async () => {
    // Use the recommended new approach for launching apps on iOS
    await driver.execute('mobile: launchApp', {
      bundleId: 'com.circlemedical.CircleMedicalPatient.beta' // Replace with your actual app's bundle ID
    });

    await loginScreen.waitForScreenLoaded(); 

    const isLoginButtonVisible = await loginScreen.isLoginButtonDisplayed();
    expect(isLoginButtonVisible).to.be.true; // Check if the login button is visible
  });

  it('should allow user to login with valid credentials', async () => {
    await loginScreen.login('testuser', 'password123');
    // Assertions to confirm login was successful, depending on your app's response
  });
});