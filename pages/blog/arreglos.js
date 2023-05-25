import Head from "next/head"

import { WorkImage } from '../../components/work'

import P from '../../components/paragraph'
import H1 from '../../components/title'
import FooterAuthor from '../../components/footer-blog-bio'
import ArticleArray from '../../components/layouts/article-array'

import { HighlighterCode } from '../../components/HighlighterCode'


function array() {
  return (
    <>
      <Head>
        <title>Arreglos</title>
      </Head>
      <WorkImage src="/img/arreglosPortada.png" alt="Debred" />

      <H1>Metodos de Array.</H1>
      <P style={{ marginBottom: 20 }}>
        Si eres un programador Backend o Frontend en JavaScript o
        Typescript.
        Es muy usual trabajar con arreglos; y aqui te invito a conocer algunos de
        sus metodos para que puedas manipularlos.
      </P>
      <P style={{ marginBottom: 60 }}>
        En este Post rebisaremos varios de sus metodos de uso, sin mas
        introduccion empecemos.
      </P>

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

      <ArticleArray
        method='.map( )'
        content='Nos ayuda a recorrer arreglos, e incluso arreglos con objetos;
        accediendo directamente a sus propiedades del mismo.'
        codeFilter={HighlighterCode.codeMap}
      />

      <ArticleArray
        method='.slice( )'
        content='Nos retorna los elementos seleccionados, especificamente.'
        codeFilter={HighlighterCode.codeSlice}
      />

      <ArticleArray
        method='.sort( )'
        content='Acomoda el contenido del arreglo de mayor a menor o dicho de 
        otra manera, de forma ascendente.
        '
        codeFilter={HighlighterCode.codeSort}
      />

      <ArticleArray
        method='.join( )'
        content='Une el contenido del arreglo en un string separandolo por un 
        separador especifico.'
        codeFilter={HighlighterCode.codeJoin}
      />

      <ArticleArray
        method='.toString( )'
        content='Convierte todo nuestro arreglo en una cadena de texto (string).'
        codeFilter={HighlighterCode.codeToString}
      />

      {/* Despidida del post */}
      <P style={{ marginTop: 60 }}>
        Como podemos observar son bastantes los metodos que utilizan los arrays,
        y es probable que con el tiempo existan mas y mejores, me entusisasma ver
        lo que nos depara el futuro.
      </P>

      {/* Footer de la pagina */}
      <FooterAuthor />

    </>
  )
}

export default array
