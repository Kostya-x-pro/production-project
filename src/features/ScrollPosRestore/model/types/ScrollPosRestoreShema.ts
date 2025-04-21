// <ключ адресс страницы, позиция скрола>
export type ScrollSchema = Record<string, number>

export interface ScrollPosRestoreShema {
    scroll: ScrollSchema
}
