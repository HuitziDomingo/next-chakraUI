import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon, ExternlaLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout>
            <Container>
                <Title>Debred <Badge>2014</Badge> </Title>
                <P>Un sitio web para hacer posible tu proyecto en la web.</P>
                <P>Colaboro como programador frontend de forma Freelance.</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.debred.com">
                            https://www.debred.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/debred.png" alt="Debred" />
            <Container>
                <Title>Debred <Badge>2014</Badge> </Title>
                <P>Colaboradores Freelancers</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.debred.com">
                            https://www.debred.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
            <WorkImage src="/img/familiaDebred.jpg" alt="familia Debred" />
        </Layout>
    )
}

export default Work