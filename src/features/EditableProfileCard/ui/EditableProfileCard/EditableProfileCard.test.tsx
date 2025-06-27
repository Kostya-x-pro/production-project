import { fireEvent, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Reducer } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import {
    componentRender,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { ProfileSchema } from '../../model/types/EditableProfileCardSchema';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 32,
    currency: Currency.EUR,
    country: Country.Bellarus,
    city: 'Minsk',
    username: 'admin',
};

const options = {
    initialState: {
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false,
        },
    },
    asyncReducers: {
        profile: profileReducer as Reducer<ProfileSchema | undefined, AnyAction>,
    },
};

describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмнене значения обнуляются', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.SecondName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.SecondName'), 'user');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.SecondName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.SecondName')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });

    test('Должен измениться select валюты', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        // const currencySelect = screen.getByTestId('ProfileCard.Currency');
        expect(screen.getByText('EUR')).toHaveTextContent('EUR');

        await userEvent.click(screen.getByText('EUR'));
        await userEvent.click(screen.getByText('USD'));

        expect(screen.getByText('USD')).toBeInTheDocument();
    });

    test('Должен измениться select страны', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByText('Bellarus')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Bellarus'));

        await userEvent.click(screen.getByText('Russia'));

        expect(screen.getByText('Russia')).toBeInTheDocument();
    });
});
