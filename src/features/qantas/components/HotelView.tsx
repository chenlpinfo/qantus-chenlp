'use client';

import { Box, Stack } from '@mui/material';
import ActionBar from './ActionBar';
import HotelList from './HotelList';
import QantasLogo from './QantasLogo';
import { useGetQantasData } from '../data/useGetQantasData';

export default function HotelView() {
  const { qantasData, setQantasData } = useGetQantasData();

  return (
    <>
      <Stack spacing={2}>
        <QantasLogo />
        <ActionBar data={qantasData} setQantasData={setQantasData} />
      </Stack>
      <Box sx={{ margin: 2 }}>
        {qantasData.map((hotel, key) => {
          return (
            <div style={{ width: '100%' }} key={hotel.id}>
              <Stack spacing={2}>
                <HotelList hotel={hotel} />
              </Stack>
            </div>
          );
        })}
      </Box>
    </>
  );
}
