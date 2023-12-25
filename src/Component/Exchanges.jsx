import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader'
import ErrorComponent from './ErrorComponent';
// import ExchangeCard from './ExchangeCard';

function Exchanges() {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
                console.log(data)
            } catch (error) {
                setError(true);
                setLoading(false);
            }

        };
        fetchExchanges();

    }, []);
    if (error) return <ErrorComponent message={"Error while fetching Exchanges"} />
    return (
        <Container maxW={"container.xl"}>
            {loading ? <Loader /> : <>

                <HStack wrap={'wrap'} justifyContent={'center'}>
                    {exchanges.map((i, index) => (
                        <ExchangeCard key={index} name={i.name} img={i.image} rank={i.rank} url={i.url} />
                    ))}
                </HStack>

            </>}
        </Container>
    );
};

const ExchangeCard = ({ name, img, rank, url }) => {
    return (
        <a href={url} target={'blank'}>
            <VStack
                w={'52'}
                shadow={'lg'}
                p={'8'}
                borderRadius={'lg'}
                transition={'all 0.3s'} m={'4'} css={{
                    "&:hover": {
                        transform: "scale(1.1)"
                    }
                }}>
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

export default Exchanges;