import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Violete = Template.bind({});
Violete.args = {};
Violete.decorators = [ThemeDecorator(Theme.VIOLET)];
