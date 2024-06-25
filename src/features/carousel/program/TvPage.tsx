'use client';

import { Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { selectCarouselData, selectCurrentIndex } from '@/lib/features/carousel/carouselSlice';

export default function TvPage() {
  const router = useRouter();
  const carouselData = useSelector(selectCarouselData);
  const currentIndex = useSelector(selectCurrentIndex);
  const selectedTv = carouselData[currentIndex];

  function handleBack() {
    router.push('/carousel');
  }

  return (
    <>
      <Button variant='outlined' onClick={handleBack}>
        Back
      </Button>
      <Stack direction='row' spacing={5} sx={{ background: 'black', margin: '15px' }}>
        <Image alt={selectedTv?.title} src={selectedTv?.image} title={selectedTv?.title} key={selectedTv?.id} width={250} height={250} />
        <Stack direction='column' spacing={3} className='text-white'>
          <Stack direction='column' spacing={1}>
            <div className='text-3xl'>{selectedTv?.title}</div>
            <Stack direction='row' spacing={2}>
              <div>{selectedTv?.rating}</div>
              <span>|</span>
              <div> {selectedTv?.year}</div>
              <span>|</span>
              <div>{selectedTv?.type}</div>
              <span>|</span>
              <div>{selectedTv?.genre}</div>
              <span>|</span>
              <div>{selectedTv?.language}</div>
            </Stack>
          </Stack>{' '}
          <div>{selectedTv?.description}</div>
        </Stack>
      </Stack>
    </>
  );
}
