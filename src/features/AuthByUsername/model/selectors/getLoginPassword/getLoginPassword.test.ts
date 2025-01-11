import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test.ts', () => {
    test('should return string value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'qwerty',
                username: '',
                error: 'error',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('qwerty');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
