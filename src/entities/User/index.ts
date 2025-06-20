// slice
export { userReducer, userActions } from './model/slice/userSlice';

// selectors
export { isUserAdmin, isUserManager } from './model/selectors/roleSelectors/roleSelectors';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserRoles } from './model/selectors/roleSelectors/roleSelectors';

// types
export type{ User, UserSchema } from './model/type/user';
export { UserRoles } from './model/consts/consts';
