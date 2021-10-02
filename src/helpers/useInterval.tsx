/**
 * Extracted from Dan Abramov post:
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

import {useEffect, useRef} from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useInterval = (callback: () => void | undefined, delay: number) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        savedCallback.current = callback
    })

    // Set up the interval.
    useEffect(() => {
        function tick() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            savedCallback.current()
        }

        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])

}
