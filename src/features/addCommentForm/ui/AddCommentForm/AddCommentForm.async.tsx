import { lazy, FC } from 'react';
// @ts-ignore
import { addCommentFormProps } from './addCommentForm';

export const AddCommentFormAsync = lazy<FC<addCommentFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./addCommentForm')), 1500);
}));
