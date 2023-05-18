import Head from "next/head"

import { Container, List, ListItem, Badge, Text } from "@chakra-ui/react"

import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

import P from '../../components/paragraph'
import H1 from '../../components/title'
import FooterAuthor from '../../components/footer-blog-bio'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { codePush, codeConcat, codePop, codeFilter } from '../../components/HighlighterCode'


function array() {
  return (
    <Layout>
      <Head>
        <title>Arreglos</title>
      </Head>
      <WorkImage src="/img/arreglosPortada.png" alt="Debred" />
      <Container>
        <H1>Metodos de Array.</H1>
        <P style={{ marginBottom: 20 }}>
          Si eres un programador Backend o Frontend en JavaScript o
          Typescript.
          Es muy usual trabajar con arreglos; y aqui te invito a conocer algunos de
          sus metodos para que puedas manipularlos.
        </P>
        <P>
          En este Post rebisaremos varios de sus metodos de uso, sin mas
          introduccion empecemos.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Text>Metodo  <Badge colorScheme='purple'>.push( )</Badge></Text>
            <Text>
              Agrega un nuevo elemento al final del arreglo y retorna una nueva longitud en el mismo.
            </Text>
          </ListItem>
        </List>
      </Container>


      <SyntaxHighlighter language="javascript">
        {codePush}
      </SyntaxHighlighter>

      <Container>
        <List ml={4} my={4}>
          <ListItem>
            <Text>Metodo  <Badge colorScheme='purple'>.concat( )</Badge></Text>
            <Text>
              Concatena 2 o mas arreglos y devuelve un nuevo arreglo con los valores
              concatenados.
            </Text>
          </ListItem>
        </List>
      </Container>

      <SyntaxHighlighter language="javascript">
        {codeConcat}
      </SyntaxHighlighter>

      <Container>
        <List ml={4} my={4}>
          <ListItem>
            <Text>Metodo  <Badge colorScheme='purple'>.pop( )</Badge></Text>
            <Text>
              Remueve el ultimo elemento de un arreglo.
            </Text>
          </ListItem>
        </List>
      </Container>

      <SyntaxHighlighter language="javascript">
        {codePop}
      </SyntaxHighlighter>

      <Container>
        <List ml={4} my={4}>
          <ListItem>
            <Text>Metodo  <Badge colorScheme='purple'>.filter( )</Badge></Text>
            <Text>
              Crea un nuevo arreglo filtrando los datos segun la condicion
              en su version mas profesional este metodo llega a tener hasta 3
              argumentos.
            </Text>
          </ListItem>
        </List>
      </Container>

      <SyntaxHighlighter language="javascript">
        {codeFilter}
      </SyntaxHighlighter>

      {/* Footer de la pagina */}
      <FooterAuthor />

    </Layout>
  )
}

export default array
