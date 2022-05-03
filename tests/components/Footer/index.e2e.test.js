/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '@components/Footer';

describe('Suite e2e test for Footer component', () => {
    test('Should check the footer component UI', () => {
        const footerComponent = create(<Footer />);

        expect(footerComponent.toJSON()).toMatchSnapshot();
    });
});