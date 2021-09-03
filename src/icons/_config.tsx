import library from "../icons/library/index";

export const iconConfig = {
    iconSizes:{
        // Available icons sizes
        available: ["xs", "s", "m", "l", "xl"],
        map: {
            "xs": "xs",
            "s": "s",
            "m": "m",
            "l": "l",
            "xl": "xl",
        }
    },
    iconPositions: {
        // Available icons positions
        available: ["left", "right"]
    },
    fill: {
        default: ["white"]
    },
    iconNames: Array.from(library.keys()),
    iconNamesMap: {
        'arrow-bracket-left': 'arrow-bracket-left',
        'arrow-bracket-right': 'arrow-bracket-right',
        'arrow-long-left': 'arrow-long-left',
        'arrow-long-right': 'arrow-long-right',
        'arrow-short-left': 'arrow-short-left',
        'arrow-short-right': 'arrow-short-right',
        'close': 'close',
        'contact': 'contact',
        'dots': 'dots',
        'find': 'find',
        'heart': 'heart',
        'language': 'language',
        'legal': 'legal',
        'logo': 'logo',
        'logo-dark': 'logo-dark',
        'logo-round': 'logo-round',
        'menu': 'menu',
        'plus': 'plus',
        'search': 'search',
        'settings': 'settings',
        'share': 'share',
        'subscribe': 'subscribe'
    }
};