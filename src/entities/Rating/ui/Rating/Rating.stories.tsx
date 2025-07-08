import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Rating } from './Rating';

export default {
    title: 'entities/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const WithoutFeedback = Template.bind({});
WithoutFeedback.args = {
    title: 'Оцените статью',
    hasFeedback: false,
    onAccept: action('onAccept'),
};

export const WithFeedback = Template.bind({});
WithFeedback.args = {
    title: 'Оцените статью',
    feedbackTitle: 'Оставьте отзыв',
    hasFeedback: true,
    onAccept: action('onAccept'),
    onCancel: action('onCancel'),
};

export const Mobile = Template.bind({});
Mobile.args = {
    title: 'Оцените статью',
    feedbackTitle: 'Оставьте отзыв',
    hasFeedback: true,
    onAccept: action('onAccept'),
    onCancel: action('onCancel'),
};
