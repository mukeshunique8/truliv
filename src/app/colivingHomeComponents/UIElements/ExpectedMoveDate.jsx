import React from 'react';
import { Input } from '@chakra-ui/react'
export default function DatePicker() {
  return (
   
<div >
  <label htmlFor="">Expected Move-in Date</label>
<Input sx={{color:"b.100"}} className='mt-2' placeholder='dd/mm/yyyy' size='md' type='date' />
  
</div>

  );
}
