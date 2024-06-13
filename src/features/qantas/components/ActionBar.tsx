'use client';
import { Grid, Stack, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { IHotelItem } from '../data/type';
import { SORT_BY } from '../data/type';
import { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

type Props = {
  data: IHotelItem[];
  setQantasData: Dispatch<SetStateAction<IHotelItem[]>>;
  // sortBy: string;
  // setSortBy: Dispatch<SetStateAction<string>>;
};

export default function ActionBar({ data, setQantasData }: Props) {
  const [sortBy, setSortBy] = useState<string>('');

  function handleChange(event: SelectChangeEvent) {
    setSortBy(event.target.value);
  }

  useEffect(() => {
    if (!data || !data.length || !sortBy) return;
    let newData: IHotelItem[] = [];
    switch (sortBy) {
      case SORT_BY['Price high-low']:
        newData = [...data.sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount)];
        break;
      case SORT_BY['Price low-high']:
        newData = [...data.sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)];
        break;
      case SORT_BY['Name ascending']:
        newData = [...data.sort((a, b) => a.property.title.localeCompare(b.property.title))];
        break;
      case SORT_BY['Name descending']:
        newData = [...data.sort((a, b) => b.property.title.localeCompare(a.property.title))];
        break;
    }
    setQantasData(newData);
  }, [sortBy]);

  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid>
        <div>{data.length} hotel in Sydney</div>
      </Grid>
      <Grid>
        <Stack direction='row' gap={1} alignItems='center'>
          <span className='font-bold'>Sort by</span>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select value={sortBy} onChange={handleChange} displayEmpty size='small'>
              <MenuItem value=''>None</MenuItem>
              {Object.values(SORT_BY).map((o) => (
                <MenuItem value={o} key={o}>
                  {o}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}
