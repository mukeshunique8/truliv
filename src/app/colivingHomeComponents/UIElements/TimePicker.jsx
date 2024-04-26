import React from 'react'
import { Input } from '@chakra-ui/react'

export default function TimePicker() {
  return (
    <div>
        <label htmlFor="">Time Slot</label>
     <Input sx={{color:"b.100"}} className='mt-2'  placeholder=' dd/mm/yyyy ' size='md' type='time' />

    </div>
  )
}
