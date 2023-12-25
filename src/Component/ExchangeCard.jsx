import React from 'react'
import { Heading, Image, Text, VStack } from '@chakra-ui/react';


export default function ExchangeCard({ name, img, rank, url }) {
    return (
        <a href={url} target={'blank'}>
            <VStack>
                <Image src={img}
                    w={'10'}
                    h={'10'}
                    objectFit={'contain'}
                    alt={'exchange'} />
                <Heading size={'md'} noOfLines={1}>{rank}</Heading>

                <Text noOfLines={1}>
                    {name}
                </Text>
            </VStack>
        </a>
    )
}
