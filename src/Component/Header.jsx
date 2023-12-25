import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <HStack p={'4'} shadow={"base"} bgColor={'blackAlpha.900'}>
            <Button mx={'5'} variant={'unstyled'} color={'white'}>
                <Link to='/'>Home</Link>
            </Button>
            <Button mx={'5'} variant={'unstyled'} color={'white'}>
                <Link to='/exchanges'>Echanges</Link>
            </Button>
            <Button mx={'5'} variant={'unstyled'} color={'white'}>
                <Link to='/coins'>Coins</Link>
            </Button>
        </HStack>
    )
}
