import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleCodeBlock } from '../../model/types/article';

const mockCodeBlock: ArticleCodeBlock = {
    id: '3',
    type: ArticleBlockType.CODE,
    code: `import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames('ArticleCodeBlockComponent', {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};`,
};

export default {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ArticleCodeBlockComponent {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    block: mockCodeBlock,
};

export const ShortCode = Template.bind({});
ShortCode.args = {
    block: {
        ...mockCodeBlock,
        code: 'console.log("Hello, world!");',
    },
};

export const LongCode = Template.bind({});
LongCode.args = {
    block: {
        ...mockCodeBlock,
        code: `function calculateTotal(items) {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const items = [
    { name: 'Item 1', price: 10, quantity: 2 },
    { name: 'Item 2', price: 15, quantity: 1 },
    { name: 'Item 3', price: 20, quantity: 3 }
];

console.log('Total:', calculateTotal(items));`,
    },
};

export const EmptyCode = Template.bind({});
EmptyCode.args = {
    block: {
        ...mockCodeBlock,
        code: '',
    },
};
