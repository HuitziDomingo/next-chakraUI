export class HighlighterCode {

    static codeInit = `
yarn init -y
`

    static codeDev = `
"scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
`
    static codeConfiguration = `
yarn add express cors dotenv mongoose morgan bcryptjs jsonwebtoken helmet
`
    static codeConfigurationTypes = `
yarn add @types/express @types/cors @types/morgan @types/bcryptjs @types/jsonwebtoken @types/helmet ts-node-dev typescript -D
`
    static codeTsInit = `
tsc --init
`
    static codeTsInitNPX = `
npx tsc --init
`


}


