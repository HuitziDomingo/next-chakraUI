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
        backend con las tecnologias del STACK MERN.
      </P>
      <P style={{ marginBottom: 60 }}>
        En mi caso siempre prefiero usar Typescript como lenguaje de Backend y
        javascript como lenguaje de Frontend y hoy estoy emocionado de mostrarte,
        como configuro mi backend a la hora de desarrollar, asi que empecemos.
      </P>

      <P style={{ marginBottom: 20 }}>
        INGRDIENTES:
      </P>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '6em' }}>
        <Badge colorScheme='blue' style={{ textTransform: 'capitalize' }}>Docker Desktop</Badge>
        <Badge colorScheme='yellow' style={{ textTransform: 'capitalize' }}>Table Plus</Badge> O <Badge colorScheme='green' style={{ textTransform: 'capitalize' }}>Mongo DB Compass</Badge>
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
        archivo package.json, esto sirve para desarrollar y compilar nuestro backend`}
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
          Ahora vamos a instalar las <Badge style={{ textTransform: 'inherit' }}>devDependencies</Badge> y los 
          <Badge style={{ textTransform: 'inherit' }}>@types</Badge>.
          A su vez, instalaremos los modulos de <Badge style={{ textTransform: 'inherit' }}>ts-node-dev</Badge> y
          <Badge style={{ textTransform: 'inherit' }}> typescript</Badge>.
        </P>
      </Container>

      <ArticleExpressTs
        codeFilter={HighlighterCode.codeConfigurationTypes}
      />

      <Container>
        <P style={{ textIndent: '0em' }}>
          Por ultimo vamos a instalar el archivo de <Badge style={{ textTransform: 'inherit' }}>tsconfig.json</Badge>.
          Existen dos formas. Una es usando <Badge style={{ textTransform: 'inherit' }}>npx</Badge> en caso de no tener
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

      <ArticleExpressTs
        title={'Configurando tsconfig.json.'}
        content={`
        Ahora vamos a configurar y descomentar las siguientes propiedades de nuestro archivo tsconfig.json.
        `}
        codeFilter={HighlighterCode.codeTsConfig}
      />

      <ArticleExpressTs
        title={'Configurando Directorios'}
        content={`
        Crearemos una carpeta 'src' y dentro crearemos dos archivos 'app.ts' y 'index.ts'.
        Algo asi se debe ver nuestro explorador de archivos.
        `}
      />
      <WorkImage src="/img/srcdir.png" />

      <ArticleExpressTs
        content={`
        En el archivo 'app.ts' vamos a poner el siguient codigo, estas configuraciones son
        necesarias para hacer un proyecto mediano o grande, si no comprendes del todo el codigo
        no te preocupes, confia en mi, ya que en el futuro lo comprenderas.
        `}
        codeFilter={HighlighterCode.codeTsApp}
      />

      <ArticleExpressTs
        content={`
        En el archivo 'index.ts' vamos a poner el siguient codigo.
        `}
        codeFilter={HighlighterCode.codeTsIndex}
      />

      <ArticleExpressTs
        content={`
        Ahora arrancamos el proyecto con el siguiente codigo.
        Y si todo sale bien habras levantado tu servidor en Express.
        `}
        codeFilter={HighlighterCode.codeRunProyect}
      />

      <ArticleExpressTs
        title={'Configruracion de docker-compose y MongoDB.'}
      />

      <Container>
        <P>
          Crearemos un archivo en la raiz llamado
          <Badge colorScheme="red" style={{ textTransform: 'inherit' }}>docker-compose.yaml</Badge>
          este archivo creara nuetra basa de datos en docker.
          Asi que una vez creado pondremos el siguiente codigo.
        </P>
      </Container>

      <ArticleExpressTs
        codeFilter={HighlighterCode.codeYaml}
      />

      <ArticleExpressTs
        content={`
        Ahora para construir la base de datos usaremos el siguiente comando.
        `}
        codeFilter={HighlighterCode.codeDockerBuild}
      />

      <ArticleExpressTs
        content={`
        Y para dejar corriendo la base de datos usaremos el comando.
        `}
        codeFilter={HighlighterCode.codeDockerRun}
        />


      <ArticleExpressTs
        title={'Ultimo paso conectar Express con MongoDB.'}
        content={`
        En este ultimo paso modificaremos el archivo 'index.ts'
        y lo dejaremos de esta forma.
        `}
        codeFilter={HighlighterCode.codeIndexUpdated}
      />
      <ArticleExpressTs
        content={`
        Por ultimo usaremos Table Plus para tener un entorno grafico de nuestros datos.
        Solo basta con poner lo mismos datos que la imagen en el campo de la url para conectarnos con Table Plus.
        mongodb://localhost:27017/mongo
        `}
      />
      <WorkImage src="/img/tableplus.png" />

      {/* Footer de la pagina */}
      <FooterAuthor />
    </>
  )
}

export default Backend
