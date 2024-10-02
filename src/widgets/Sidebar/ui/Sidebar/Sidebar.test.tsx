import { screen } from '@testing-library/react';
import {
    RenderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';


describe('Sidebar', () => {
    test('Test render', () => {
        RenderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
