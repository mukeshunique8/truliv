import React from 'react'
import { Select } from '@chakra-ui/react'

export default function GuestSelect() {
  return (
<div className='flex flex-col cursor-pointer gap-y-3 '>
<label  className='font-semibold' htmlFor="">Guests</label>
<Select className="border-ptxt text-center cursor-pointer" variant='outline' placeholder='Number of Guests'>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
  <option value='6'>6</option>
  <option value='7'>7</option>
  <option value='8'>8</option>
  <option value='9'>9</option>
  <option value='10'>10</option>
</Select>
</div>
  )
}
