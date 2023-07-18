export interface BgImageI {
    src: any;
    rotateZ?: number;
    scrollable?: boolean;
    priority?: boolean;
    loading?: "lazy";
    quality?: number;
    onLoadComplete?: (img: any) => void;
    placeholder?: string;
    imageUrl?: string;
    onLoad?: () => void;
}

export interface ImagePosition {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    mobileTop?: number;
    mobileBottom?: number;
    mobileLeft?: number;
    mobileRight?: number;
    width?: number;
    height?: number;
}
export interface ImageSize {
    maxWidth?: number;
    ds?: string;
}
