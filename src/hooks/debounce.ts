import {useEffect, useState} from 'react';

// Хук для того, чтобы при каждом печатании символа не отправлялся запрос на сервер,
// c использованием этого хука запрос идет после 500мс после остановки печатания
export function useDebounce(value: string, delay = 500): string {

    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}