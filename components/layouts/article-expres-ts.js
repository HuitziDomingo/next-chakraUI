import { Container, List, ListItem, Badge, Text } from "@chakra-ui/react"
import SyntaxHighlighter from 'react-syntax-highlighter'

function ArticleExpressTs({ codeFilter, badge, content, title }) {
    return (
        <>
            <Container>
                <List ml={4} my={4}>
                    <ListItem>
                        {
                            title && 
                                <Text fontSize='3xl'> {title} <Badge colorScheme='purple'>{badge}</Badge></Text>
                        }
                        {
                            content &&
                            <Text>
                                {content}
                            </Text> 
                        }

                    </ListItem>
                </List>
            </Container>
            {
                codeFilter && <div style={{ marginBottom: 30 }}>
                    <SyntaxHighlighter language="typescript">
                        {codeFilter}
                    </SyntaxHighlighter>
                </div>
            }
        </>
    )
}

export default ArticleExpressTs
