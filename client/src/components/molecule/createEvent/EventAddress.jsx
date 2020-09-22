import React from 'react';

export default function EventAddress({ Ref, preventDefault }) {
  return (
    <>
      <h2 className="eventform-title" id="off-online">
        장소
      </h2>
      <div className="event-sec" id="off-online">
        <div className="event-content">
          <p>이벤트는 어떤 장소에서 진행되나요?</p>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="서페스타 컨퍼런스 룸"
            ref={Ref}
            onKeyDown={preventDefault}
          />
        </div>
      </div>
    </>
  );
}
