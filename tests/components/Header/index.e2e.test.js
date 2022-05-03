/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { create } from 'react-test-renderer';
import Header from '@components/Header';
import LayoutMock from '../../__mocks__/LayoutMock';
import environmentUtils from '../../utils/environmentUtils';

describe('Suite e2e test for Header component', () => {
    beforeAll(() => {
        environmentUtils.setUpDomEnvironment();
      });
    test('Should check the header component UI', () => {
        const headerComponent = create(
            <LayoutMock>
                <Header />
            </LayoutMock>
        );

        expect(headerComponent.toJSON()).toMatchSnapshot();
    });
});