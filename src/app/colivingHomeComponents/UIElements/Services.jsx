import React from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useFilterContext } from '../../../Contexts/FilterContext';

export default function Services() {
  const { services, setServices } = useFilterContext();

  const handleServiceSelect = (selectedServices) => {
    setServices(selectedServices);
  };

  return (
    <CheckboxGroup colorScheme='green' defaultValue={services} onChange={handleServiceSelect}>
      <Stack spacing={[5, 10]} direction={['column', 'row']}>

        {/* First column */}
        <Stack spacing={5} direction='column'>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Food & Beverages'>Food & Beverages</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Power Backup'>Power backup</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='CCTV'>CCTV</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Biometric'>Biometric</Checkbox>
        </Stack>

        {/* Second column */}
        <Stack spacing={5} direction='column'>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Laundry'>Laundry</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='HouseKeeping'>HouseKeeping</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Workout Zone'>Workout Zone</Checkbox>
        </Stack>
        
      </Stack>
    </CheckboxGroup>
  )
}
