import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePage from '../pages/HomePage';
import { LookupZipCodeDocument } from '@/generated/graphql';
import { MockedProvider } from '@apollo/react-testing';

export default {
    title: 'Example/HomePage',
    component: HomePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HomePage>;

const mocks = [{
    request: {
        query: LookupZipCodeDocument,
        variables: {
            countryCode: 'us',
            zipCode: '90210'
        }
    },
    result: {
        data: {
            getZipCodeDetails: {
                code: '90210',
                location: {
                    country: {
                        code: 'US',
                        name: 'United States'
                    },
                    city: `Beverly Hills`,
                    state: 'California'
                }
            }
        }
    }
}]

const Template: ComponentStory<typeof HomePage> = (args) =>
    <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
    </MockedProvider>

export const HomePageLanding = Template.bind({});
HomePageLanding.args = {};
