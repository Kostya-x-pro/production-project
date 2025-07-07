import { rtkApi } from '@/shared/api/rtkApi';
import { IRating } from '@/entities/Rating';

interface getProfileRatingArg {
  userId: string;
  profileId: string;
}

interface setArticleRatingArg {
  userId: string;
  profileId: string;
  rate: string;
  feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<IRating[], getProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        setProfileRating: build.mutation<void, setArticleRatingArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useSetProfileRating = profileRatingApi.useSetProfileRatingMutation;
