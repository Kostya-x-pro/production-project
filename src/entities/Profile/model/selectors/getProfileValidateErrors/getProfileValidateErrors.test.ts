import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { validateProfileDataError } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test.ts', () => {
    test('should return user name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    validateProfileDataError.INCORRECT_AGE,
                    validateProfileDataError.SERVER_ERROR,
                ],
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            validateProfileDataError.INCORRECT_AGE,
            validateProfileDataError.SERVER_ERROR,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
