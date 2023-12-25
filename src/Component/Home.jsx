import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/btc.png'
const Home = () => {
    return (
        <Box bgColor={'blackAlpha.900'} w={'full'} h={'100vh'}>
            <Image w={'full'} h={'full'}
                objectFit={'contain'} src={img}
                filter={'grayscale(1)'}
            />
            <Text
                fontSize={'6xl'}
                textAlign={'center'}
                fontWeight={'thin'}
                color={'whiteAlpha.800'}
                mt={'-20'}>
                Crypto</Text>
        </Box>
    )
}

export default Home
