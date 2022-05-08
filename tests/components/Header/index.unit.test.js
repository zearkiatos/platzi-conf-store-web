/* eslint-disable import/order */
/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '@components/Header';
import environmentUtils from '../../utils/environmentUtils';
import LayoutMock from '../../__mocks__/LayoutMock';

describe('Unit test suite for Header component', () => {
  beforeAll(() => {
    environmentUtils.setUpDomEnvironment();
  });
  test("Should get Header's render", () => {
    const HeaderComponent = shallow(
      <LayoutMock>
        <Header />
      </LayoutMock>
    );
    expect(HeaderComponent.length).toEqual(1);
  });

  test('Should render the title', () => {
    const HeaderComponent = mount(
      <LayoutMock>
        <Header />
      </LayoutMock>
    );
    const titleExpected = 'PlatziConf Store 🛒';

    const titleFound = HeaderComponent.find('.header').text();

    expect(titleFound).toEqual(titleExpected);
  });
});
