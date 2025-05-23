import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Stack/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    direction: 'column',
    align: 'center',
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'center',
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};
