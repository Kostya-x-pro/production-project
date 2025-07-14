import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: `
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react'

    import { Code } from './Code';

    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    `,
};

export const Dark = Template.bind({});
Dark.args = {
    text: `
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react'

    import { Code } from './Code';

    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    `,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    text: `
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react'

    import { Code } from './Code';

    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    `,
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Violete = Template.bind({});
Violete.args = {
    text: `
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react'

    import { Code } from './Code';

    export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
    `,
};

Violete.decorators = [ThemeDecorator(Theme.VIOLET)];
