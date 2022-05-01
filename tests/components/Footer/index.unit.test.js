/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Footer from '@components/Footer';
import environmentUtils from '../../utils/environmentUtils';

describe('Unit test suite for Footer component', () => {
  let FooterComponent;
  beforeAll(() => {
    environmentUtils.setUpDomEnvironment();
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
