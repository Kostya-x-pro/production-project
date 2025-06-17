import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileDataError } from '../../types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Kostya',
    lastname: 'Nitro5',
    age: 32,
    username: 'kostyaNitro5',
    country: Country.Bellarus,
    city: 'Minsk',
    currency: Currency.EUR,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            validateProfileDataError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            validateProfileDataError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            validateProfileDataError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            validateProfileDataError.INCORRECT_USER_DATA,
            validateProfileDataError.INCORRECT_AGE,
            validateProfileDataError.INCORRECT_COUNTRY,
        ]);
    });
});
