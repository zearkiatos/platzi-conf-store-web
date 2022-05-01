/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Footer from '@components/Footer';
import { JSDOM } from 'jsdom';


function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}


function setUpDomEnvironment() {
  const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
  const { window } = jsdom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
      userAgent: 'node.js',
  };
  copyProps(window, global);
}
describe('Unit test suite for Footer component', () => {
  let FooterComponent;
  beforeAll(() => {
    setUpDomEnvironment();
    FooterComponent = mount(<Footer />);
  });
  test("Should get Footer's render", () => {
    expect(FooterComponent.length).toEqual(1);
  });

  test("Should render the title", () => {
    const expectedTitle = 'Platzi Conf Store';

    const footerTitleText = FooterComponent.find('.footer-title').text();

    expect(footerTitleText).toEqual(expectedTitle);
  });
});
