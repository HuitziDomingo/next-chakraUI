import { Container, List, ListItem, Badge, Text } from "@chakra-ui/react"
import SyntaxHighlighter from 'react-syntax-highlighter'

function ArticleArray({ codeFilter, method, content }) {
    return (
        <>
            <Container>
                <List ml={4} my={4}>
                    <ListItem>
                        <Text>Metodo  <Badge colorScheme='purple'>{method}</Badge></Text>
                        <Text>
                            {content}
                        </Text>
                    </ListItem>
                </List>
            </Container>

            <SyntaxHighlighter language="javascript">
                {codeFilter}
            </SyntaxHighlighter>
        </>
    )
}

export default ArticleArray
