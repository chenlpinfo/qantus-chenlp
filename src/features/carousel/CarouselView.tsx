'use client';

import { useEffect, useState } from 'react';
import { ICarouselItem } from './data/type';
import { Stack } from '@mui/system';
import Image from 'next/image';

export default function CarouselPage() {
  const [carouselData, setCarouselData] = useState<ICarouselItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const carouselPerPage = 6;

  useEffect(() => {
    getCouselData();
  }, []);

  async function getCouselData() {
    try {
      const response = await fetch('/image-data.json');
      const result = await response.json();
      console.log('result', result);
      setCarouselData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const indexOfLastCarousel = currentIndex * carouselPerPage;
  const indexOfFirstCarousel = indexOfLastCarousel - carouselPerPage;

  const currentCarousel = carouselData.slice(indexOfFirstCarousel, indexOfLastCarousel);

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

  return (
    <>
      <Stack direction='row' spacing={2} sx={{ height: 350, width: 250 }}>
        {currentCarousel.map((carousel, index) => {
          return (
            <Image
              alt={carousel.title}
              src={carousel.image}
              title={carousel.title}
              key={carousel.id}
              width={500}
              height={500}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              className={isHovered ? 'hovered-image' : 'unHovered-image'}
            />
          );
        })}
      </Stack>
      <p>{message}</p>
    </>
  );
}
