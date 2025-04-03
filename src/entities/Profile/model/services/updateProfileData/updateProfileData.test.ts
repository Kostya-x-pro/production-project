import axios from 'axios';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { validateProfileDataError } from '../../types/profile';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
    id: '1',
    first: 'Kostya',
    lastname: 'Nitro5',
    age: 32,
    username: 'kostyaNitro5',
    country: Country.Bellarus,
    city: 'Minsk',
    currency: Currency.EUR,
};

describe('updateProfileData.test.ts', () => {
    test('sucsess', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
                isLoading: false,
                readonly: false,
            },
        });
        thunk.api.put.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
                isLoading: false,
                readonly: false,
            },
        });
        thunk.api.put.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            validateProfileDataError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
                isLoading: false,
                readonly: false,
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            validateProfileDataError.INCORRECT_USER_DATA,
        ]);
    });
});
