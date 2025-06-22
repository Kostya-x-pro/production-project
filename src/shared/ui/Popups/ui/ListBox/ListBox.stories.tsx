import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/Listbox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
};

export const WithValue = Template.bind({});
WithValue.args = {
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
};

export const Readonly = Template.bind({});
Readonly.args = {
    value: 'text',
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
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    label: 'Chose an option',
    defaultValue: 'Select',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    defaultValue: 'Menu open',
};
export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    defaultValue: 'Menu open',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    defaultValue: 'Menu open',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ],
    defaultValue: 'Menu open',
};

export const WithDisableItems = Template.bind({});
WithDisableItems.args = {
    value: 'text',
    items: [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2', disabled: true },
        { value: '3', content: 'Option 3' },
    ],
};

export const CustomItems = Template.bind({});
CustomItems.args = {
    value: 'text',
    items: [
        { value: '1', content: <span style={{ color: 'red' }}>Red Option</span> },
        { value: '2', content: <span style={{ color: 'green' }}>Green Option</span> },
        { value: '3', content: <span style={{ color: 'blue' }}>Blue Option</span> },
    ],
    defaultValue: 'Pick a color',
};
