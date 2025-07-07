import { memo, useState } from 'react';
import cls from './StarRating.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (startCount: number) => void;
    size?: number;
    selectedStars?: number
}

const starts = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, onSelect, size = 30, selectedStars = 0,
    } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {starts.map((starsNumbebr) => (
                <Icon
                    Svg={StarIcon}
                    key={starsNumbebr}
                    className={
                        classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [currentStarsCount >= starsNumbebr ? cls.hovered : cls.normal],
                        )
                    }
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starsNumbebr)}
                    onClick={onClick(starsNumbebr)}
                />
            ))}
        </div>
    );
});
