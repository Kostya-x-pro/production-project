import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/HListbox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = () => <ListBox />;

export const Normal = Template.bind({});
Normal.args = {

};

export const WithValue = Template.bind({});
WithValue.args = {
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    value: '2',
};

export const Readonly = Template.bind({});
Readonly.args = {
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    readonly: true,
    defaultValue: 'Disabled',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    label: 'Chose an option',
    defaultValue: 'Select',
};

export const DirectionTop = Template.bind({});
DirectionTop.args = {
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    direction: 'top',
    defaultValue: 'Menu open',
};

export const WithDisableItems = Template.bind({});
WithDisableItems.args = {
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2', disabled: true },
        { value: '3', content: 'Option 3' },
    ],
};

export const CustomItems = Template.bind({});
CustomItems.args = {
    items: [
        { value: '1', content: <span style={{ color: 'red' }}>Red Option</span> },
        { value: '2', content: <span style={{ color: 'green' }}>Green Option</span> },
        { value: '3', content: <span style={{ color: 'blue' }}>Blue Option</span> },
    ],
    defaultValue: 'Pick a color',
};
