import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

function Dalyza() {
    return (
        <Layout>
            <Container>
                <Title>Dalyza <Badge>2016</Badge> </Title>
                <P>
                    Un sitio web con su landing page, para vender servicios de labado de alfombras, venta de percianas y pisos
                    entre otras cosas del nicho.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.dalyza.com">
                            https://www.dalyza.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/dalyza.png" alt="Dalyza" />
            <Container>
                <Title>Dalyza <Badge>2016</Badge> </Title>
                <P>Colaboracion como programador frontend de forma Freelance.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.dalyza.com">
                            https://www.dalyza.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/dalyza.png"  />
        </Layout>
    )
}

export default Dalyza