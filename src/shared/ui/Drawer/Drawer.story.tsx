import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drawer } from './Drawer';
import { Button } from '../Button';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: (
        <div style={{ padding: '20px', background: 'var(--bg-color)' }}>
            Content Drawer
        </div>
    ),
};

export const Playground: ComponentStory<typeof Drawer> = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div style={{ padding: '20px', background: 'var(--bg-color)' }}>
                    Content Drawer
                </div>
            </Drawer>
        </>
    );
};

export const MobileView: ComponentStory<typeof Drawer> = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div style={{ padding: '20px', background: 'var(--bg-color)' }}>
                Content Drawer
            </div>
        </Drawer>
    );
};
