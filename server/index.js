const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const controller = require('./controller')
const {getGames, deleteGame, createGame, updateGame} = controller

app.get('/api/games', getGames)
app.delete('/api/games/:id', deleteGame)
app.post('/api/games', createGame)
app.put('/api/games/:id', updateGame)

app.listen(4001, () => console.log('listening on port 4001'))

