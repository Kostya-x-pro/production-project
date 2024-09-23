type Mods = Record<string, boolean | string>;

// Параметры функции:
// class - главный класс например .app
// mode - объект с модами (как ключь идет название класса а как значение Boolean тип)
// additional - массив дополнительных классов
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(" ");
}
