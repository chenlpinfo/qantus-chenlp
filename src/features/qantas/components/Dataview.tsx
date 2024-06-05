'use client';

import { IHotelItem } from '../data/type';
import { useGetQantasData } from '../data/useGetQantasData';
import HotelOffer from './HotelOffer';
import { Box, Stack } from '@mui/material';
import Property from './Property';
import Image from './Image';

export default function Dataview() {
  const { qantasData } = useGetQantasData();

  return (
    <Stack>
      {qantasData.map((hotel) => {
        return (
          // <Stack direction='row' spacing={2} margin={2}>
          //   <Image hotel={hotel} />
          //   <Stack direction='row' display={}>
          //     <Property hotel={hotel} />
          //     <HotelOffer hotel={hotel} />
          //   </Stack>
          // </Stack>

          <div style={{ width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              <Image hotel={hotel} />
              <Property hotel={hotel} />
              <HotelOffer hotel={hotel} />
            </Box>
          </div>
        );
      })}
    </Stack>
  );
}
