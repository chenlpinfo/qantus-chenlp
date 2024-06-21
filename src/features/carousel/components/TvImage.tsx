'use client';

import { useEffect, useRef, Dispatch } from 'react';
import { ICarouselItem } from '../data/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { sliceCarouselActions } from '@/lib/features/carousel/carouselSlice';

type Props = {
  tv: ICarouselItem;
  isSelected: boolean;
};

export default function TvImage({ tv, isSelected }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const imageRef = useRef<any>(null);

  const style = {
    border: isSelected ? '3px solid blue' : '',
    padding: '3px',
  };

  useEffect(() => {
    if (isSelected) {
      imageRef.current?.scrollIntoView();
    }
  }, [isSelected]);

  function handleClickTv() {
    console.log('Tv');
    dispatch(sliceCarouselActions.setSelectedTv(tv));
    router.push('/program');
  }

  return (
    <>
      <Image ref={imageRef} style={style} alt={tv.title} src={tv.image} title={tv.title} key={tv.id} width={500} height={500} onClick={handleClickTv} />
    </>
  );
}
