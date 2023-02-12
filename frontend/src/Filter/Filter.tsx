import React from 'react';
import s from './Filter.module.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// type Props = {};

export default function Filter() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Command" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}
