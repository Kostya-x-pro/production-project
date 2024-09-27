type Mods = Record<string, boolean | string>;

// Параметры функции:
// class - главный класс например .app
// mode - объект с модами (как ключь идет название класса а как значение Boolean тип)
// additional - массив дополнительных классов
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}
