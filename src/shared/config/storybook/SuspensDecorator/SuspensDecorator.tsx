import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspensDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
