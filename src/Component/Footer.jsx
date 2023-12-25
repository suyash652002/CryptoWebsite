import { Avatar, Box, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import img from '../assets/IMG_20230505_144953_123.jpg'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"55"}
            px={"16"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "left"]}
                    >
                        We are the best crypto trading app in India, we provide our guidance
                        at a very cheap price.
                    </Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} src={img} />

                    <Text>Our Founder</Text>
                    <HStack>
                        <Text my={'-2'} mx={'2'} variant={'unstyled'} color={'whiteAlpha.700'} fontSize={'15'}>
                            <Link target="_blank" to='https://www.linkedin.com/in/suyash-bhadgaonkar-9860b6243/'>Linkedin</Link>
                        </Text>
                        <Text my={'-2'} mx={'2'} variant={'unstyled'} color={'whiteAlpha.700'} fontSize={'15'}>
                            <Link target="_blank" to='https://github.com/suyash652002'>GitHub</Link>
                        </Text>
                    </HStack>

                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;