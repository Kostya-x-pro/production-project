import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test.ts', () => {
    test('should return user name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: false,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
