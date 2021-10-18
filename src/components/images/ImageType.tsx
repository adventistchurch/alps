import {SourceSet} from "./SourceSet";

export interface ImageType {
    alt: string,
    srcSet: SourceSet,
    caption?: string,
    portrait?: boolean
}

export const DefaultImage = {
    srcSet: {
        default: "",
        500: "",
        750: "",
        1200: ""
    }, alt: ''
}
