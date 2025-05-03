import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleBlockType, ArticleTextBlock } from 'entities/Article/model/types/article';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const mockTextBlock: ArticleTextBlock = {
    id: '1',
    type: ArticleBlockType.TEXT,
    title: 'Заголовок текстового блока',
    paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста.',
        'Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах.',
    ],
};

export default {
    title: 'entities/Article/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: mockTextBlock,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    block: {
        ...mockTextBlock,
        title: undefined,
    },
};

export const SingleParagraph = Template.bind({});
SingleParagraph.args = {
    block: {
        ...mockTextBlock,
        paragraphs: ['Один единственный параграф текста.'],
    },
};
