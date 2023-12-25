import React, { useEffect, useState } from 'react'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader'
import ErrorComponent from './ErrorComponent';
import axios from 'axios'
import { server } from '../index'
import CoinCard from './CoinCard';

export default function Coins() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('eur');

    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }

    const btns = new Array(132).fill(1);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setCoins(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                setError(true);
                setLoading(false);
            }

        };
        fetchCoins();

    }, [currency, page]);
    if (error) return <ErrorComponent message={"Error while fetching coins🥲🥲"} />
    return (
        <Container maxW={"container.xl"}>
            {loading ? <Loader /> : <>

                <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                    <HStack spacing={'4'}>
                        <Radio value={'inr'} >INR</Radio>
                        <Radio value={'usd'} >USD</Radio>
                        <Radio value={'eur'} >EUR</Radio>
                    </HStack>
                </RadioGroup>
                <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                    {coins.map((i, index) => (
                        <CoinCard key={index} id={i.id}
                            name={i.name} img={i.image}
                            symbol={i.symbol} price={i.current_price}
                            currencySymbol={currencySymbol} />
                    ))}
                </HStack>

                <HStack width={'full'} overflow={'auto'} p={'8'}>
                    {
                        btns.map((item, index) =>
                            <Button key={index} bgColor={"black"} color={'white'} onClick={() => changePage(index + 1)}>
                                {index + 1}
                            </Button>)
                    }
                </HStack>
            </>}
        </Container>
    );
}

