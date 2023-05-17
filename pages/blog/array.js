import { Container, List, ListItem } from "@chakra-ui/react"
import {  WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import H1 from '../../components/title'
import Layout from '../../components/layouts/article'

import SyntaxHighlighter from 'react-syntax-highlighter'

const codeString = `
 export function arrayPush() {
    let fruits = ['manzana', 'platano', 'mango', 'durazno']
    fruits.push('papaya')

    fruits.map(fruit => console.log(fruit))
    //'manzana', 'platano', 'mango', 'durazno','papaya'
}
`

function array() {
  return (
    <Layout>
      <Container>
        <H1>Metodos de Array.</H1>
        <WorkImage src="/img/arreglosPortada.png" alt="Debred" />
        <P style={{ marginBottom: 20 }}>
          Si eres un programador en Backend o Frontend ya sea con JavaScript o
          Typescript.
          Es muy usual que trabajes con arreglos y que mejor manera de manejarlos
          que usando sus metodos.
        </P>
        <P>
          En este Post rebisaremos varios de sus metodos de uso, sin mas
          introduccion empecemos.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>.push( )</Meta>
            <P>Array Method push()</P>
            <P>
              Agrega un nuevo elemento al final del arreglo y returna una nueva longitud tambien.
            </P>
          </ListItem>
        </List>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
      </Container>
    </Layout>
  )
}

export default array
