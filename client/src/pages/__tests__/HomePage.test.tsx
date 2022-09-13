import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from '@testing-library/react';

import HomePage from '../HomePage';

test('attribution link must be present', () => {
    render(
        <MockedProvider mocks={[]} addTypename={false}>
            <HomePage />
        </MockedProvider>
    );
    const linkElement = screen.getByText('Image by macrovector');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.freepik.com/free-vector/low-poly-world-map-earth-atlas-isolated-background-illustration_13031917.htm#query=world%20map&position=0&from_view=search');
});
