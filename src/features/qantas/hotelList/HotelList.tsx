import HotelOffer from './components/HotelOffer';
import { Box, Grid, Stack } from '@mui/material';
import { IHotelItem } from '../data/type';
import HotelImage from './components/HotelImage';
import HotelProperty from './components/HotelProperty';

type Props = {
  hotel: IHotelItem;
};

export default function HotelList({ hotel }: Props) {
  return (
    <Stack>
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid container spacing={3}>
          <Grid xs>
            <HotelImage hotel={hotel} />
          </Grid>

          <Grid xs={6} sx={{ borderTop: 1, borderColor: 'grey.500' }}>
            <HotelProperty hotel={hotel} />
          </Grid>
          <Grid xs sx={{ borderTop: 1, borderColor: 'grey.500' }}>
            <HotelOffer hotel={hotel} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
