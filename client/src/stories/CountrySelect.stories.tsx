import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountrySelect from '../features/ZipCode/components/CountrySelect';

export default {
    title: 'Example/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const DefaultCountry = Template.bind({});
DefaultCountry.args = {};



