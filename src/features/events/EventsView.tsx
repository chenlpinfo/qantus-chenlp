'use client';
import { useEffect, useState } from 'react';

import { MaterialReactTable, useMaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { ITicketEventsData } from './data/type';
import { useRouter } from 'next/navigation';


export default function EventsViewPage() {
  const [ticketData, setTicketData] = useState<ITicketEventsData[]>([]);
  const router = useRouter();

  useEffect(() => {
    getTicketData();
  }, []);

  async function getTicketData() {
    try {
      const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=caOqkK6JdqjEePbyebFaKzASdNOgWxWv');
      const result = await response.json();
      console.log('events', result._embedded.events);
      setTicketData(result._embedded.events);
    } catch (error) {
      console.log(error);
    }
  }

  const columns: MRT_ColumnDef<any, any>[] = [
    {
      accessorKey: 'name', 
      header: 'Name',
      size: 150,
    },
    {
      accessorKey: 'dates.start.dateTime',
      header: 'Start Time',
      size: 150,
    },
    {
      accessorFn: (row) => `${row.images[0].url}`,
      header: 'Image',
      Cell: ({ renderedCellValue, row }) => <img src={renderedCellValue} />,
    },
    {
      accessorKey: 'info',
      header: 'Info',
      size: 150,
    },
  ];

  const table = useMaterialReactTable({
    data: ticketData,
    columns,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        console.info(event, row.id);
        router.push('/event-detail');
      },
      sx: {
        cursor: 'pointer', //you might want to change the cursor too when adding an onClick
      },
    }),
  });

  return (
    <>
      <>Ticket View </>
      <MaterialReactTable table={table} />
    </>
  );
}
