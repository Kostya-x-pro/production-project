import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withMock } from 'storybook-addon-mock';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};

Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?_userId=1&_articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};

WithoutRate.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
})];

WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?_userId=1&_articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
