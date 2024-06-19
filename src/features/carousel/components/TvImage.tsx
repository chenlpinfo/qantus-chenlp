'use client';

import { useEffect, useRef, useState } from 'react';
import { ICarouselItem } from '../data/type';

import Image from 'next/image';

type Props = {
  tv: ICarouselItem;
  isSelected: boolean;
};

export default function TvImage({ tv, isSelected }: Props) {
  const imageRef = useRef<any>(null);
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setMessage('Mouse entered the image');
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the image');
    setIsHovered(false);
  };

  const handleClick = () => {
    setMessage('Image clicked');
  };

  const style = {
    border: isSelected ? '3px solid blue' : '',
    padding: '3px',
  };

  useEffect(() => {
    if (isSelected) {
      imageRef.current?.scrollIntoView();
    }
  }, [isSelected]);

  return (
    <Image
      ref={imageRef}
      style={style}
      alt={tv.title}
      src={tv.image}
      title={tv.title}
      key={tv.id}
      width={500}
      height={500}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
}
