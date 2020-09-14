import React from 'react';
import Card from '../../organism/main/Card';

function HostingCard({ events }) {
  return (
    <>
      {events &&
        events.map((event) => {
          return <Card event={event} />;
        })}
    </>
  );
}
export default HostingCard;
