import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Selected = Template.bind({});
Selected.args = {
    selectedStars: 4,
};

export const Small = Template.bind({});
Small.args = {
    size: 20,
};

export const Large = Template.bind({});
Large.args = {
    size: 50,
};

export const WithSelect = Template.bind({});
WithSelect.args = {
    onSelect: (stars) => alert(`Вы выбрали ${stars} звёзд`),
};
