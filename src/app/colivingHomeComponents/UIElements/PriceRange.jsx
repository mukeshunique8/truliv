import React from "react";
import {
    ChakraProvider,
    Box,
    Heading,
    Flex,
    VStack,
    Text,
} from "@chakra-ui/react";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from "@chakra-ui/react";


export default function PriceRange() {
  return (
    <VStack spacing={4} mb={8}>
    <Heading size="md">
        Colored Range Slider
    </Heading>
    <RangeSlider
        aria-label={["min", "max"]}
        colorScheme="teal"
        defaultValue={[10, 30]}
    >
        <RangeSliderTrack>
            <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
    </RangeSlider>
    <Flex justify="space-between" w="full">
        <Text>Min: 10</Text>
        <Text>Max: 30</Text>
    </Flex>
</VStack>
  );
}
