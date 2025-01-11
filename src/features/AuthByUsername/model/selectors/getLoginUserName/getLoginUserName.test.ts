import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test.ts', () => {
    test('should return user name', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                error: 'error',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
