'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetQantasData() {
  const [qantasData, setQantasData] = useState();

  useEffect(() => {
    axios
      .get('/data.json')
      .then((res) => {
        setQantasData(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return { qantasData };
}
