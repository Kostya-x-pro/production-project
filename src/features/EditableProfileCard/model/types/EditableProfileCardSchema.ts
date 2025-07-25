import { Profile } from '@/entities/Profile';
import { validateProfileDataError } from '../consts/consts';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: validateProfileDataError[];
}
