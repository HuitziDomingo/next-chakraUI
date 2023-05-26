import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/section'
import Layout from '../components/layouts/article'

import { WorkGridItem } from '../components/grid-item'

import thumbDebred from '../public/img/debred.png'
import youtube from '../public/img/youtube.png'
import dalyza from '../public/img/dalyza.png'
import aum from '../public/img/aum.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Trabajos
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="debred" title="Debred" thumbnail={thumbDebred}>
                            Algunos trabajos que he realizado de manera freelance con un pequeño equipo de amigos de la universidad.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="youtube" title="Youtube" thumbnail={youtube}>
                            Este es un pequeño proyecto donde doy una introduccion a la programacion con react-native.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="dalyza" title="Dalyza" thumbnail={dalyza}>
                            Un sitio web con su landing page, para vender servicios de labado de alfombras, venta de percianas y pisos
                            entre otras cosas del nicho.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="aum" title="Aum Internacional" thumbnail={aum}>
                            Un sitio web informativo de una asociacion espiritual y filosofica, basada en vegeterianismo
                            y cultura. 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works