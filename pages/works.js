import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import Layout from '../components/layouts/article'

import { WorkGridItem } from '../components/grid-item'

import thumbDebred from '../public/img/debred.png'
import youtube from '../public/img/youtube.png'

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
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works