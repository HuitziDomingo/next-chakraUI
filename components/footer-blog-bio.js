import { Badge, Text, Flex, Avatar, Box } from "@chakra-ui/react"
import styled from '@emotion/styled'

const ContBio = styled(Flex)`
border: .2em solid #444;
padding:.2em;
padding-left: .5em;
margin-top: 2.8em
`

export default function FooterAuthor() {
    return (
        <ContBio>
            <Avatar src='/img/yo.jpg' />
            <Box ml='3'>
                <Text fontWeight='bold'>
                    Huitzitzili  Domingo Leon Nieves
                    <Badge ml='1' colorScheme='green'>
                        Programador
                    </Badge>
                </Text>
                <Text fontSize='sm'>MERN STACK Developer</Text>
            </Box>
        </ContBio>
    )
} 
