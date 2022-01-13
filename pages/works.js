import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import Layout from '../components/layouts/article'

import { WorkGridItem } from '../components/grid-item'

import thumbDebred from '../public/img/huitziLogo.png'

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
                            A mark down note-taking app
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="debred" title="Debred" thumbnail={thumbDebred}>
                            A mark down note-taking app
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works