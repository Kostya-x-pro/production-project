import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button';
import { Text } from '../../../Text/Text';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    children: (
        <Text text="Контент поповера" />
    ),
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>Open</Button>,
    direction: 'top left',
    children: (
        <Text text="Контент поповера" />
    ),
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>Open</Button>,
    direction: 'top right',
    children: (
        <Text text="Контент поповера" />
    ),
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>Open</Button>,
    direction: 'bottom left',
    children: (
        <Text text="Контент поповера" />
    ),
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>Open</Button>,
    direction: 'bottom right',
    children: (
        <Text text="Контент поповера" />
    ),
};
