'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { IHotelItem } from './type';
import { SORT_BY } from '../data/type';

export function useGetQantasData() {
  const [qantasData, setQantasData] = useState<IHotelItem[]>([]);
 

  useEffect(() => {
    axios
      .get('/data.json')
      .then((res) => {
        setQantasData(res.data.results);
        console.log('res.data.results', res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { qantasData, setQantasData };
}
