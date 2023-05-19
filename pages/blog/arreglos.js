import Head from "next/head"

import { Container } from "@chakra-ui/react"

import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

import P from '../../components/paragraph'
import H1 from '../../components/title'
import FooterAuthor from '../../components/footer-blog-bio'
import ArticleArray from '../../components/layouts/article-array'

import { HighlighterCode } from '../../components/HighlighterCode'


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
      </Container>

      <ArticleArray
        method='.push( )'
        content='Agrega un nuevo elemento al final del arreglo y retorna una nueva longitud en el mismo.'
        codeFilter={HighlighterCode.codePush}
      />

      <ArticleArray
        method='.concat( )'
        content='Concatena 2 o mas arreglos y devuelve un nuevo arreglo con los valores
              concatenados.'
        codeFilter={HighlighterCode.codeConcat}
      />

      <ArticleArray
        method='.pop( )'
        content='Remueve el ultimo elemento de un arreglo.'
        codeFilter={HighlighterCode.codePop}
      />

      <ArticleArray
        method='.filter( )'
        content='Crea un nuevo arreglo filtrando los datos segun la condicion;
              en su version mas profesional este metodo llega a tener hasta 3
              argumentos.'
        codeFilter={HighlighterCode.codeFilter}
      />

      <ArticleArray
        method='.shift( )'
        content='Remueve el primer elemento de un arreglo y retorna el elemento removido.'
        codeFilter={HighlighterCode.codeShift}
      />

      <ArticleArray
        method='.unshift( )'
        content='Agrega elementos nuevos al inicio de un arreglo.'
        codeFilter={HighlighterCode.codeUnShift}
      />

      {/* Footer de la pagina */}
      <FooterAuthor />

    </Layout>
  )
}

export default array
