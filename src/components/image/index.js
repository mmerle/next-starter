'use client';

import NextImage from 'next/image';
import { urlForImage } from '~/lib/sanity/utils';
import cn from 'clsx';

export function Image({
  src,
  alt,
  className,
  width,
  height,
  quality = 90,
  fit = 'clip',
  objectFit = 'cover',
  sizes,
  ref,
  ...props
}) {
  const altText = alt || src.alt;
  const computedWidth = width || src.asset.metadata?.dimensions?.width;
  const computedHeight = height || src.asset.metadata?.dimensions?.height;

  const imageUrl =
    src &&
    urlForImage(src).width(computedWidth).height(computedHeight).quality(quality).fit(fit).url();

  return (
    <>
      {imageUrl && (
        <NextImage
          src={imageUrl}
          alt={altText}
          width={computedWidth}
          height={computedHeight}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={src.asset.metadata?.lqip}
          unoptimized={false}
          ref={ref}
          className={cn(className)}
          style={{ objectFit, height: 'auto' }}
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
          {...props}
        />
      )}
    </>
  );
}
