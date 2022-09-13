import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ZipCode from '@/features/ZipCode/ZipCode';
import { MockedProvider } from '@apollo/client/testing';
import { LookupZipCodeDocument } from '@/generated/graphql';
import userEvent from '@testing-library/user-event';

const mocks = [{
    request: {
        query: LookupZipCodeDocument,
        variables: {
            countryCode: "ca",
            zipCode: 'A1A'
        }
    },
    result: {
        data: {
            getZipCodeDetails: {
                code: 'A1A',
                location: {
                    country: {
                        code: 'CA',
                        name: 'Canada'
                    },
                    city: `St. John's North`,
                    state: 'Newfoundland and Labrador'
                }
            }
        }
    }
}];

test('entering a zip code and clicking search populates history', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ZipCode />
        </MockedProvider>
    );

    const selectEl = screen.getByDisplayValue('United States');
    const zipCodeEl = screen.getByTestId('zip-code-input').children[1];
    const searchButtonEl = screen.getByText('Search');

    expect(selectEl).toBeInTheDocument();
    expect(zipCodeEl).toBeInTheDocument();
    expect(searchButtonEl).toBeInTheDocument();

    fireEvent.change(selectEl, { target: { value: 'Can' } });

    const optionEl = screen.getByText('Canada');
    expect(optionEl).toBeInTheDocument();

    fireEvent.click(optionEl);
    expect(selectEl).toHaveDisplayValue('Canada');

    userEvent.type(zipCodeEl, 'A1A');
    fireEvent.click(searchButtonEl);

    await waitFor(() => {
        const historyItemEl = screen.getByText(`St. John's North, Newfoundland and Labrador`);
        expect(historyItemEl).toBeInTheDocument();
    })

    const clearHistoryButtonEl = screen.getByText('Clear all');
    fireEvent.click(clearHistoryButtonEl);

    await waitFor(() => {
        expect(clearHistoryButtonEl).not.toBeInTheDocument();
    })
});
