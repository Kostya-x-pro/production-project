import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// TODO
// eslint-disable-next-line kostya-x-pro-production-project-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
