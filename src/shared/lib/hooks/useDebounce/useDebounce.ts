import { MutableRefObject, useCallback, useRef } from 'react';

/**
* Хук который позволяет отментяь предыдущий вызов функци пока не истечёт delay
*@param callback
*@param delay - задержка в мс
*/
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
