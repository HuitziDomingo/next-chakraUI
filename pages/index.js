import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Layout from '../components/layouts/article'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>

            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hola soy un programador WEB MERN STACK con residencia en CDMX.
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">Huitzitzili programador aveces discipulo siempre.</Heading>
                        <p>( Diseñador web / Diseñador movil / Programacion y bases de datos con Express y MongoDB )</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6, }} align="center">
                        <Image
                            // borderColor={useColorModeValue('whiteAlpha.200', 'whiteAlpha.800')}
                            borderColor='whiteAlpha.800'
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src={"/img/perfil.png"}
                            alt="Foto de perfil"
                        />
                    </Box>
                </Box>
                <Section delay={.1}>
                    <Heading as="h3" variant="section=title" mt={6}>Acerca de mi.</Heading>
                    <Paragraph>
                        Soy un desarrollador web, que se a disciplinado en el area frontend desde hace mas de 5 años.
                        Mi participacion en el desarrollo web a sido ferviente desde que cree junto con unos amigos una
                        pequeña agencia de desarrollo freelance llamada {' '}
                        <Link href="https://www.debred.com">Debred</Link>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Mi portafolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={.3}>
                    <Heading as="h3" variant="section-tilte">
                        Biografía
                    </Heading>
                    <BioSection>
                        <BioYear>1993</BioYear>
                        Nacimiemto en ( CDMX ) México.
                    </BioSection>
                    <BioSection>
                        <BioYear>2014 - Actualidad</BioYear>
                        Trabajo Freelance en <Link href="https://www.debred.com">Debred</Link> como frontend developer.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018-Ago</BioYear>
                        Frontend Developer en Prossa
                        Ajustes de aplicaiones web usando tecnologias como HTML, CSS, Java Script y la libreria de jQuery. Contratado por proyecto.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019-Feb</BioYear>
                        Frontend Developer en Deq
                        Diseño de sitios web apartir de un mock-up en el software de AdobeXD . Uso de algunas herramientas de CSS como Bootstrap y de Java Script como jQuery Para la construccion y diseño de aplicaciones web.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021-Feb</BioYear>
                        Backend Developer en Anemona
                        Colaboracion para un aplicaciones de mapas usando como lenguajes principales PHP y Java Script, asicomo algunos frameorks, tales como jQuery y Bootstrap.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
