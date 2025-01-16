import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { userActions } from 'entities/User';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
    first: 'Kostya',
    lastname: 'Nitro5',
    age: 32,
    username: 'kostyaNitro5',
    country: Country.Bellarus,
    city: 'Minsk',
    currency: Currency.EUR,
};

describe('fetchProfileData.test.ts', () => {
    test('sucsess login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failure login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
