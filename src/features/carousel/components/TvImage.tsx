'use client';

import { selectCarouselData, selectCurrentIndex, sliceCarouselActions } from '@/lib/features/carousel/carouselSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICarouselItem } from '../data/type';

type Props = {
  tv: ICarouselItem;
  index: number;
};

export default function TvImage({ tv, index }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentIndex = useSelector(selectCurrentIndex);
  const carouselData = useSelector(selectCarouselData);

  const isSelected = currentIndex === index;

  const imageRef = useRef<any>(null);
  if (isSelected) {
    imageRef.current?.scrollIntoView();
  }

  const style = {
    border: isSelected ? '3px solid blue' : '',
    padding: '3px',
  };

  function handleClickTv() {
    console.log('Tv');
    dispatch(sliceCarouselActions.setCurrentIndex(index));

    router.push('/program');
  }

  let isVisible;
  if (currentIndex < 4) {
    isVisible = index >= 0 && index <= 5;
  } else if (currentIndex > 3) {
    isVisible = index >= currentIndex - 3 && index <= currentIndex + 2;
  }

  return <>{isVisible && <Image ref={imageRef} style={style} alt={tv.title} src={tv.image} title={tv.title} key={tv.id} width={500} height={500} onClick={handleClickTv} />}</>;
}
