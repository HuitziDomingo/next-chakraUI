import Head from "next/head"

import { WorkImage } from '../../components/work'

import P from '../../components/paragraph'
import H1 from '../../components/title'
import FooterAuthor from '../../components/footer-blog-bio'
import ArticleExpressTs from '../../components/layouts/article-expres-ts'

import { HighlighterCode } from '../../components/HighlighterCodeBackend'
import { Badge, Container } from "@chakra-ui/react"

function Backend() {
  return (
    <>
      <Head>
        <title>Backend Api</title>
      </Head>
      <WorkImage src="/img/arreglosPortada.png" alt="Debred" />

      <H1>Configurando un Backend con Express, MongoDB, Typescript y Docker.</H1>
      <P style={{ marginBottom: 20 }}>
        Hola amigo este tutorial es para que puedas aprender a configurar tu
        backend con las tecnoligias del STACK MERN.
      </P>
      <P style={{ marginBottom: 60 }}>
        En mi caso siempre prefiero usar Typescript como lenguaje de Backend y
        javascript como lenguaje de Frontend y hoy estoy emocionado de mostrarte,
        como configuro mi backend a la hora de desarrollar, asi que empecemos.
      </P>

      <P style={{ marginBottom: 20 }}>
        INGRDIENTES:
      </P>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '6em'}}>
        <Badge colorScheme='blue'>Docker Desktop</Badge>
        {' '}
        <Badge colorScheme='yellow'>Table Plus</Badge> o <Badge colorScheme='green'>Mongo DB Compass</Badge>
      </div>


      <ArticleExpressTs
        title={'Inicio.'}
        content={`Primero que todo debemos generar nuestro archivo package.json
        e inicializar el proyecto para eso abriremos la terminal y 
        escriremos el siguiente comando.`}
        codeFilter={HighlighterCode.codeInit}
      />

      <WorkImage src="/img/init.png" />

      <ArticleExpressTs
        title={'Scripts de arranque.'}
        content={`Ahora agregaremos los siquientes scripts para configurar nuestro
        archivo packege,json, esto sirve para desarrollar y compilar nuestro backend`}
        codeFilter={HighlighterCode.codeDev}
      />

      <ArticleExpressTs
        title={'Instalando Express y Mongoose...'}
        content={`
        Ahora vamos a instalar las libreias y paquetes necesarios para desarrollar
        cualquier api de node basica o avanzada, al hacer esto tambien se
        nos instalaran los modulos de node.
        `}
        codeFilter={HighlighterCode.codeConfiguration}
      />

      <Container>
        <P style={{ textIndent: '0em' }}>
          Ahora vamos a instalar las <Badge>devDependencies</Badge> y los <Badge>@types</Badge>.
          A su vez, instalaremos los modulos de <Badge>ts-node-dev</Badge> y
          <Badge> typescript</Badge>.
        </P>
      </Container>

      <ArticleExpressTs
        codeFilter={HighlighterCode.codeConfigurationTypes}
      />

      <Container>
        <P style={{ textIndent: '0em' }}>
          Por ultimo vamos a instalar el archivo de <Badge>tsconfig.json</Badge>.
          Existen dos formas. Una es usando <Badge>npx</Badge> en caso de no tener
          tsc instalado y la otra es usar el comando de la siguiente manera.
        </P>
      </Container>

      <ArticleExpressTs
        codeFilter={HighlighterCode.codeTsInit}
      />

      <ArticleExpressTs
        content='O tambien, en caso de no tener instalado el comando usaremos npx.'
      />


      <ArticleExpressTs
        codeFilter={HighlighterCode.codeTsInitNPX}
      />

      <ArticleExpressTs
        content='Hasta ahora algo asi debe de quedarnos nusestro proyecto con los archivos y configuraciones necesarias.'
      />

      <WorkImage src="/img/conf1.png" />

      {/* Footer de la pagina */}
      <FooterAuthor />
    </>
  )
}

export default Backend
