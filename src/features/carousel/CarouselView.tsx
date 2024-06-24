'use client';

import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import TvImage from './components/TvImage';
import { ICarouselItem } from './data/type';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentIndex, sliceCarouselActions } from '@/lib/features/carousel/carouselSlice';
import { useRouter } from 'next/navigation';

export default function CarouselPage() {
  const [carouselData, setCarouselData] = useState<ICarouselItem[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const currentIndex = useSelector(selectCurrentIndex);

  useEffect(() => {
    getCarouselData();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleOnKeyPress);
    return () => {
      window.removeEventListener('keydown', handleOnKeyPress);
    };
  }, [currentIndex]);

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

  const currentCarousel = carouselData;

  function handleOnKeyPress(event: any) {
    if (event.key === 'ArrowLeft') {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = 0;
      }
      dispatch(sliceCarouselActions.setCurrentIndex(newIndex));
    } else if (event.key === 'ArrowRight') {
      let newIndex = currentIndex + 1;
      if (newIndex > currentCarousel.length - 1) {
        newIndex = currentCarousel.length - 1;
      }
      dispatch(sliceCarouselActions.setCurrentIndex(newIndex));
    } else if (event.key === 'enter') {
      router.push('/program');
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
