import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    // eslint-disable-next-line
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum voluptatem esse eligendi repudiandae excepturi veritatis earum tempora ut et',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    // eslint-disable-next-line
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum voluptatem esse eligendi repudiandae excepturi veritatis earum tempora ut et',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    isOpen: true,
    // eslint-disable-next-line
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum voluptatem esse eligendi repudiandae excepturi veritatis earum tempora ut et',
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Violet = Template.bind({});
Violet.args = {
    isOpen: true,
    // eslint-disable-next-line
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum voluptatem esse eligendi repudiandae excepturi veritatis earum tempora ut et',
};
Violet.decorators = [ThemeDecorator(Theme.VIOLET)];
