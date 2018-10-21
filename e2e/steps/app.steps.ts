import { Given, When, Then, Before } from 'cucumber';
import { AppPage } from './app.po';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

let app: AppPage;

Before(() => {
  app = new AppPage();
});

Given('Ich öffne die Seite', async() => {
  await app.navigateTo();
});

Then('sehe ich die Begrüßung', async() => {
  expect(await app.getParagraphText()).to.equal('Welcome to ng-protractor-cucumber-de!');
});


