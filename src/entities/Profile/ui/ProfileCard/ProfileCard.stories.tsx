import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entties/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Kostya',
        lastname: 'Nitro5',
        age: 32,
        username: 'kostyaNitro5',
        country: Country.Bellarus,
        city: 'Minsk',
        currency: Currency.EUR,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
