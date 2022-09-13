import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import History from '../features/ZipCode/components/History';

export default {
    title: 'Example/History',
    component: History,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof History>;

const maxItems = 5;
const historyItems = [{
    key: '1',
    country: 'Canada',
    city: 'Montreal',
    zipCode: 'AAA111',
    state: 'Quebec'
}, {
    key: '2',
    country: 'Canada',
    city: 'Victoria',
    zipCode: 'BBB222',
    state: 'British Columbia'
}, {
    key: '3',
    country: 'Canada',
    city: 'Calgary',
    zipCode: 'CCC333',
    state: 'Alberta'
}, {
    key: '4',
    country: 'Canada',
    city: 'Toronto',
    zipCode: 'DDD444',
    state: 'Ontario'
}, {
    key: '5',
    country: 'Canada',
    city: 'Halifax',
    zipCode: 'EEE555',
    state: 'Nova Scotia'
}, {
    key: '6',
    country: 'Canada',
    city: 'Winnipeg',
    zipCode: 'EEE555',
    state: 'Manitoba'
}
];

const Template: ComponentStory<typeof History> = (args) => <History maxItems={maxItems} {...args} />;

export const EmptyHistory = Template.bind({});
EmptyHistory.args = {};


export const SingleHistory = Template.bind({});
SingleHistory.args = {
    items: historyItems.slice(0, 1)
};

export const MaxHistory = Template.bind({});
MaxHistory.args = {
    items: historyItems.slice(0, maxItems)
};

export const OverflowHistory = Template.bind({});
OverflowHistory.args = {
    items: historyItems
};



