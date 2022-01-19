import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Layout from '../components/layouts/article'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin, IoLogoGithub, IoLogoDiscord, IoLogoYoutube } from 'react-icons/io5'

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
                    Hola soy un programador WEB MERN STACK con residencia en CDMX ( Maestro aveces discipulo siempre )
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">Huitzitzili Domingo</Heading>
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
                    <Heading as="h3" variant="section-title" mt={6} mb={3}>Acerca de mi.</Heading>
                    <Paragraph>
                        Soy un desarrollador web, que se a disciplinado en el area frontend desde hace mas de 5 años.
                        Mi participacion en el desarrollo web a sido ferviente desde que cree junto con unos amigos una
                        pequeña agencia de desarrollo freelance llamada {' '}
                        <Link href="https://www.debred.com">Debred</Link>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Mis trabajos y proyectos</Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={.3}>
                    <Heading as="h3" variant="section-title" mb={3}>
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
                <Section delay={.4}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        Yo en la web.
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/HuitziDomingo' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@HuitziDomingo</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.youtube.com/channel/UCujmxDXST1nMxdzIojyMD0g' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoYoutube} />}>MexicanDevelopers</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.linkedin.com/in/huitzitzili-le%C3%B3n-nieves-0b32a953/' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>@HuitziDomingo</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://discord.com/channels/618867779541401600/619600143204745246' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>Huitzitzili#5253</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
