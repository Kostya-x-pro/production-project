import { classNames } from 'shared/lib/classNames/classNames';

import { Loader } from 'shared/ui/Loader/Loader';
import * as styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div
        className={classNames(
            styles.PageLoader,
            {},
            [className],
        )}
    >
        <Loader />
    </div>
);
