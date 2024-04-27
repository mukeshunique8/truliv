import React from 'react';
import { Input } from '@chakra-ui/react'
export default function DatePicker(props) {
  return (
   
<div className='flex flex-col cursor-pointer'>
  <label className={`${props.weight}`} htmlFor="">{props.label}</label>
<Input sx={{color:"b.100"}} className='mt-2 cursor-pointer' placeholder='dd/mm/yyyy' size='md' type='date' />
  
</div>

  );
}
