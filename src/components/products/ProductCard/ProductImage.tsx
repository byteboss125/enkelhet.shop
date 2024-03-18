'use client';

import Image from 'next/image';
import { useState } from 'react';
interface Props {
  images: string[];
}

export const ProductImage = ({ images }: Props) => {
  const [displayImage, setDisplayImage] = useState(images[0]);
  return (
    <figure className="relative h-full w-full aspect-square">
      <Image
        onMouseEnter={() => setDisplayImage(images[1])}
        onMouseLeave={() => setDisplayImage(images[0])}
        src={`${displayImage}`}
        alt="item name"
        className="object-cover"
        fill
      />
    </figure>
  );
};