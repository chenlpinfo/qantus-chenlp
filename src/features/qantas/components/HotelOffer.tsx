'use client';

import { Stack, Typography } from '@mui/material';
import { IHotelItem } from '../data/type';

type Props = {
  hotel: IHotelItem;
};

export default function HotelOffer({ hotel }: Props) {
  return (
    <>
      <Stack justifyContent='end' style={{ height: '100%' }}>
        <Stack justifyContent='center'>
          <span className='text-sm text-right'>1 night total({hotel.offer.displayPrice.currency})</span>
        </Stack>
        <Stack direction='row' justifyContent='end'>
          $
          <Typography variant='h4' className='font-medium'>
            {hotel.offer.displayPrice.amount}
          </Typography>
        </Stack>

        {hotel.offer.savings ? (
          <Stack direction='row' justifyContent='end' className='text-red-600 font-medium text-lg'>
            Save ${hotel.offer.savings.amount}
            <span className='mt-[-3px]'>~</span>
          </Stack>
        ) : (
          <div>&nbsp;</div>
        )}
      </Stack>
    </>
  );
}
