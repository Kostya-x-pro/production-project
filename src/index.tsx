import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import './shared/config/i18n/i18n';

import App from './app/App';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
