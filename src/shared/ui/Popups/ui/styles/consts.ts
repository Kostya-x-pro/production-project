import { DropdownDirection } from '../../../../types/ui';
import cls from './popups.module.scss';

export const mapDirectionClasses: Record<DropdownDirection, string> = {
    'bottom left': cls.optionBottomLeft,
    'bottom right': cls.optionBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
