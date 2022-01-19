import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Youtube = () => {
    return (
        <Layout>
            <Container>
                <Title>Youtube <Badge>2021</Badge> </Title>
                <P>Aqui enseño como usuar el framework de react-native</P>
                <P>Desde la instalacion de herramientas cli en windows 10.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.youtube.com/channel/UCujmxDXST1nMxdzIojyMD0g">
                            MexicanDevelopers <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/youtube.png" alt="Canal de youtube." />
        </Layout>
    )
}

export default Youtube
