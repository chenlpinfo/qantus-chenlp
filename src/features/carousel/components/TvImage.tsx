'use client';

import { useEffect, useState } from 'react';
import { ICarouselItem } from '../data/type';
import { Stack } from '@mui/system';

import { styled } from '@mui/material/styles';
import { StyledImage } from './StyledImage';

type Props = {
  tv: ICarouselItem;
};

export default function TvImage({ tv }: Props) {
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

  return <StyledImage alt={tv.title} src={tv.image} title={tv.title} key={tv.id} width={500} height={500} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} />;
}
