import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test.ts', () => {
    test('should return user name', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
