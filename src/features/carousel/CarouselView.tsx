'use client';

import { useEffect, useState } from 'react';
import { ICarouselItem } from './data/type';
import { Stack } from '@mui/system';
import Image from 'next/image';
import TvImage from './components/TvImage';

export default function CarouselPage() {
  const [carouselData, setCarouselData] = useState<ICarouselItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [message, setMessage] = useState('');

  const carouselPerPage = 6;

  useEffect(() => {
    getCouselData();

    window.addEventListener('keydown', handleOnKeyPress);
    return () => {
      window.removeEventListener('keydown', handleOnKeyPress);
    };
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

  const currentCarousel = carouselData; //.slice(indexOfFirstCarousel, indexOfLastCarousel);

  function handleOnKeyPress(event: any) {
    // debugger;
    if (event.key === 'ArrowLeft') {
      setCurrentIndex((index) => index - 1);
      //user scrollintoview
    } else if (event.key === 'ArrowRight') {
      setCurrentIndex((i) => i + 1);
    } else if (event.key === 'enter') {
      // setCurrentIndex(currentIndex-1)
    }
  }

  return (
    <>
      <Stack direction='row' spacing={2} sx={{ height: 350, width: '100vw', overflow: 'hidden' }}>
        {currentCarousel.map((tv, index) => {
          return <TvImage tv={tv} key={tv.id} isSelected={currentIndex === index} />;
        })}
      </Stack>
      <p>{message}</p>
    </>
  );
}
