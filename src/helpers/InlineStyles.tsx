import React, {useMemo} from 'react'

export interface InlineStylesProps {
    styles: string
}

export const InlineStyles = ({styles}: InlineStylesProps): JSX.Element => {
    const innerHtml = useMemo(() => ({__html: styles}), [styles])

    return <style dangerouslySetInnerHTML={innerHtml} type="text/css"/>
}
