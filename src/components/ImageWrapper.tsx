'use client';

import Image, { ImageProps } from 'next/image';

interface ExtendedImageProps extends Omit<ImageProps, 'layout' | 'objectFit'> {
    layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export default function ImageWrapper({
    layout,
    objectFit,
    style,
    alt = '',
    ...props
}: ExtendedImageProps) {
    const updatedStyle = { ...style };

    if (layout === 'fill') {
        updatedStyle.width = '100%';
        updatedStyle.height = '100%';
        updatedStyle.position = 'absolute';
    }

    if (objectFit) {
        updatedStyle.objectFit = objectFit;
    }

    return <Image style={updatedStyle} alt={alt} {...props} />;
} 