'use client';

import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import TvImage from './components/TvImage';
import { ICarouselItem } from './data/type';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentIndex, selectSelectedTv, sliceCarouselActions } from '@/lib/features/carousel/carouselSlice';

export default function CarouselPage() {
  const [carouselData, setCarouselData] = useState<ICarouselItem[]>([]);
  // const [currentIndex, setCurrentIndex] = useState<number>(1);
  const dispatch = useDispatch();

  const currentIndex = useSelector(selectCurrentIndex);

  const carouselPerPage = 6;

  useEffect(() => {
    getCarouselData();

    window.addEventListener('keydown', handleOnKeyPress);
    return () => {
      window.removeEventListener('keydown', handleOnKeyPress);
    };
  }, []);

  async function getCarouselData() {
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
      dispatch(sliceCarouselActions.setCurrentIndex((index: number) => index - 1));

      // setCurrentIndex((index) => index - 1);
      //user scrollIntoView
    } else if (event.key === 'ArrowRight') {
      dispatch(sliceCarouselActions.setCurrentIndex((index: number) => index + 1));

      // setCurrentIndex((i) => i + 1);
    } else if (event.key === 'enter') {
      // setCurrentIndex(currentIndex-1)
    }
  }

  return (
    <>
      currentIndex:{currentIndex}
      <Stack direction='row' spacing={2} sx={{ height: 350, width: '100vw', overflow: 'hidden' }}>
        {currentCarousel.map((tv, index) => {
          return <TvImage tv={tv} key={tv.id} isSelected={currentIndex === index} index={index} />;
        })}
      </Stack>
    </>
  );
}
