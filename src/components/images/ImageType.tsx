import {SourceSet} from "./SourceSet";

export interface ImageType {
    alt: string,
    srcSet: SourceSet,
    caption?: string,
    portrait?: boolean
}