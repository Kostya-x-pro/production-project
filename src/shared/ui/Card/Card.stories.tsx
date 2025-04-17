import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from '../Text/Text';

import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="My awesome text minds" text="some text" />,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children: <Text title="My awesome text minds" text="some text" />,
};

export const Violete = Template.bind({});

Violete.args = {
    children: <Text title="My awesome text minds" text="some text" />,
};

Violete.decorators = [ThemeDecorator(Theme.VIOLET)];
