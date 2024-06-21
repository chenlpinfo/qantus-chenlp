'use client';

import { selectSelectedTv } from '@/lib/features/carousel/carouselSlice';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function TvPage() {
  const selectedTv = useSelector(selectSelectedTv);

  return (
    <>
      <Stack direction='row' spacing={2} sx={{ background: 'black' }}>
        <Image alt={selectedTv?.title} src={selectedTv?.image} title={selectedTv?.title} key={selectedTv?.id} width={250} height={250} />
        <Stack direction='column' spacing={2} className='text-white'>
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
          <div>{selectedTv?.description}</div>
        </Stack>
      </Stack>
    </>
  );
}
