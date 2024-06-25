'use client';
import { useEffect } from 'react';

export default function TicketViewPage() {
  useEffect(() => {
    getTicketData();
  }, []);

  async function getTicketData() {
    try {
      const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=caOqkK6JdqjEePbyebFaKzASdNOgWxWv');
      const result = await response.json();
      console.log('events', result._embedded.events);
    } catch (error) {
      console.log(error);
    }
  }

  return <>Ticket View</>;
}
