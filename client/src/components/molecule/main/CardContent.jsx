import React from 'react';

export default function CardContent({ event }) {
  const thumbnail = event.thumbnail;
  const { start } = event.event_date;
  const title = event.title;
  const price = event.price.toLocaleString();
  const isOnline = event.isOnline;
  const hostProfileImg = event.host.profile_img;
  const hostName = event.host.username;

  return (
    <div className='cardContent-wrap'>
      <div className='thumbnail-wrap'>
        <div
          className='thumbnail'
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
      </div>
      <div className='content-wrap'>
        <p className='date'>
          {start.date} {start.time}
        </p>
        <h3>{title}</h3>
        <p className='price'>
          <span>₩ </span>
          <span>{price}</span>
        </p>
        <span className='online'>{isOnline && '온라인'}</span>
      </div>
      <div className='host-wrap'>
        <p className='host'>
          <span
            className='host-profile'
            style={
              hostProfileImg
                ? { backgroundImage: `url(${hostProfileImg})` }
                : { backgroundColor: '#3562ff' }
            }
          ></span>
          <span className='host-name'>
            {hostName}
            {!hostName && '익명'}
          </span>
        </p>
      </div>
    </div>
  );
}
