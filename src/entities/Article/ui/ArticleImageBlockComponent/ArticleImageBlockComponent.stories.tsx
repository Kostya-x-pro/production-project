import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleImageBlock } from '../../model/types/article';

const mockImageBlock: ArticleImageBlock = {
    id: '2',
    type: ArticleBlockType.IMAGE,
    src: 'https://workspace.ru/upload/iblock/3ef/py2ql4xlsx0lzialp58p1mr27rjlqpcd/0.jpg',
    title: 'Пример изображения с подписью',
};

export default {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ArticleImageBlockComponent {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    block: mockImageBlock,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    block: {
        ...mockImageBlock,
        title: 'Какой то текст',
    },
};

export const LeftAlignedTitle = Template.bind({});
LeftAlignedTitle.args = {
    block: {
        ...mockImageBlock,
        title: 'Подпись с выравниванием по левому краю',
    },
};

export const LongTitle = Template.bind({});
LongTitle.args = {
    block: {
        ...mockImageBlock,

        // eslint-disable-next-line max-len
        title: 'Очень длинная подпись к изображению, которая занимает несколько строк и демонстрирует, как будет выглядеть текст в таком случае. Это важно для проверки отзывчивости компонента.',
    },
};

export const BrokenImage = Template.bind({});
BrokenImage.args = {
    block: {
        ...mockImageBlock,
        src: 'https://workspace.ru/upload/iblock/3ef/py2ql4xlsx0lzialp58p1mr27rjlqpcd/0.jpg',
    },
};
