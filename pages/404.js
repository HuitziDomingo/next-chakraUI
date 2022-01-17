import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button, 
    Text
} from '@chakra-ui/react'


const NotFound = () => {
    return(
        <Container>
            <Heading as="h1">No Encontrado</Heading>
            <Text>La pagina que has estado buscando no se encuentra disponible :'C</Text>
            <Divider my={6}/>
            <Box my={6}>
                <NextLink href="/">
                    <Button colorScheme="teal">Regresar al inicio.</Button>
                </NextLink>
            </Box>
        </Container>
    )
}


export default NotFound