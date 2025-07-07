import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};

Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];
