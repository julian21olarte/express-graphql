import cors from 'cors'
require('dotenv').config()
import express from 'express'
import { db } from './memory-database'

import schema from './graphql/schema'
import resolvers from './graphql/resolvers'
import { graphqlHTTP } from 'express-graphql'

const app = express()
const port = process.env.PORT || 3000
const useGraphiql = process.env.ENV === 'dev'
app.use(cors({ credentials: true, origin: '*' }))

// Connect to In-Memory DB
;(async () => await db({ test: false }))()

//graphql playground setup code
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: useGraphiql,
    })
)

// server
app.listen(port, () => {
    console.log('Server listening on ' + port)
})

export default app
