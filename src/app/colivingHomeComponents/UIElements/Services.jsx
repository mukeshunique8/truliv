import React from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function Services() {
  return (
    <CheckboxGroup colorScheme='green' defaultValue={[]}>
      <Stack spacing={[5, 10]} direction={['column', 'row']}>

        {/* First column */}
        <Stack spacing={5} direction='column'>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Wifi'>Laundry</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Power Backup'>HouseKeeping</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Comfort Beds'>CCTV</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Television'>Biometric</Checkbox>
        </Stack>

        {/* Second column */}
        <Stack spacing={5} direction='column'>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Air Conditioning'>Laundry</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='24 x 7 Security'>HouseKeeping</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Private Kitchen'>CCTV</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Dining Area'>Workout Zone</Checkbox>
        </Stack>
        
      </Stack>
    </CheckboxGroup>
  )
}
