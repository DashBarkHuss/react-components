import React from 'react';
import { Button } from '@material-ui/core';
import './ButtonStyled.css';

export default function ButtonStyled() {
  return (
    <div class="wrapper add_a_wish">
      <Button href="/addwish" className="button add_a_wish" color="primary">
        Add A Wish
      </Button>
    </div>
  );
}
