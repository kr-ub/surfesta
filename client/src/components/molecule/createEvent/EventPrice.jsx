import React from 'react';

export default function EventPrice({ Ref, preventDefault }) {
  return (
    <>
      <h2 className="eventform-title">이벤트 참가 비용</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>이벤트 참가에 대해 비용이 발생한다면 적어주세요.</p>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="참가자들의 참가 비용을 입력하세요."
            ref={Ref}
            onKeyDown={preventDefault}
          />
        </div>
      </div>
    </>
  );
}
