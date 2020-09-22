import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

const DayButton = ({ onChange }) => (
  <IconButton onClick={onChange}>
    <WbSunnyOutlinedIcon />
  </IconButton>
);

export default React.memo(DayButton);
