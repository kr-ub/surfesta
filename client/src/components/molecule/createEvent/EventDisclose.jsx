import React, { useState, useEffect } from "react";

export default function EventDislose({ toggle, Ref }) {
  const [active, setActive] = useState();
  useEffect(() => {
    Ref.current.checked ? setActive(true) : setActive(false);
  }, []);
  return (
    <>
      <h2 className="eventform-title">공개 여부</h2>
      <div className="event-sec">
        <div className="event-content">
          <p>
            이벤트 공개를 하지 않으면 링크로는 이벤트를 접속 할 수 있지만
            Surfesta의 메인 페이지에는 나타나지 않습니다. 아직 공개 할 준비가 안
            되어 있거나, 메인에 공개 하고 싶지 않으면 체크를 해제 하세요.
          </p>
        </div>
        <div className={`input-box label-box ${active ? "active" : ""}`}>
          <input
            ref={Ref}
            onChange={toggle}
            type="checkbox"
            id="opencheck"
            defaultChecked={true}
          />
          <label className="custom-label" htmlFor="opencheck"></label>
          <span
            className="yes"
            onClick={(e) => {
              toggle(e);
              Ref.current.checked = Ref.current.checked ? false : true;
            }}
          >
            네, 공개할래요!
          </span>
          <span
            className="not"
            onClick={(e) => {
              toggle(e);
              Ref.current.checked = Ref.current.checked ? false : true;
            }}
          >
            아니요, 아직은 비밀이예요!
          </span>
        </div>
      </div>
    </>
  );
}
