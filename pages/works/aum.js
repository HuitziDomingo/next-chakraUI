import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

function Aum() {
    return (
        <Layout>
            <Container>
                <Title>Debred <Badge>2019</Badge> </Title>
                <P>
                    Un sitio web informativo de una asociacion espiritual y filosofica, basada en vegeterianismo
                    y cultura.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.auminternacional.com">
                            http://auminternacional.org/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/debred.png" alt="Debred" />
            <Container>
                <Title>Debred <Badge>2019</Badge> </Title>
                <P>Colaboro como programador frontend de forma Freelance.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.auminternacional.com">
                            http://auminternacional.org/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/familiaDebred.jpg" alt="familia Debred" />
        </Layout>
    )
}

export default Aum