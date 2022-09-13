import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ZipCodeInput from '../features/ZipCode/components/ZipCodeInput';

export default {
    title: 'Example/ZipCodeInput',
    component: ZipCodeInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ZipCodeInput>;

const Template: ComponentStory<typeof ZipCodeInput> = (args) => <ZipCodeInput {...args} />;

export const DefaultZipCodeInput = Template.bind({});
DefaultZipCodeInput.args = {};

export const WithErrorZipCodeInput = Template.bind({});
WithErrorZipCodeInput.args = {
    errorMessage: 'Zip code not found'
};




