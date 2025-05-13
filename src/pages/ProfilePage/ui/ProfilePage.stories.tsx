import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Kostya',
            lastname: 'Nitro5',
            age: 32,
            username: 'kostya',
            country: Country.Bellarus,
            city: 'Minsk',
            currency: Currency.USD,
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png',
        },
        isLoading: false,
        readonly: false,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Kostya',
            lastname: 'Nitro5',
            age: 32,
            username: 'kostya',
            country: Country.Bellarus,
            city: 'Minsk',
            currency: Currency.USD,
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png',
        },
        isLoading: false,
        readonly: false,
    },
})];
