import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import youtube from '../public/img/youtube.png'


const Posts = () => {
    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h4" fontSize={20} mb={4}>
                    Curso de React Native.
                </Heading>
                <Section delay={.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem title="Mi canal de youtube" thumbnail={youtube} href="https://www.youtube.com/watch?v=ftxucvCPvys" />
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Posts