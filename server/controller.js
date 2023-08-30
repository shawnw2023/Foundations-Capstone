// require("dotenv").config();
// const {CONNECTION_STRING} = process.env;
// const Sequelize = require("sequelize")
// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect:""
// });

const games = require('./db.json')
let globalID = 8;

module.exports = {
    getGames: (req, res) => {
        res.status(200).send(games)
    },
    deleteGame: (req, res) => {
        let index = games.findIndex((elem) => elem.id === +req.params.id)
        games.splice(index, 1)
        res.status(200).send(games)
    },
    createGame: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newGame = {
            id: globalID,
            title: title,
            rating: +rating,
            imageURL
        }
        games.push(newGame)
        globalID++
        res.status(200).send(games)
    },
    updateGame: (req, res) => {
        const {type} = req.body;
        let index = games.findIndex((elem) => elem.id === +req.params.id)
        if(type === 'plus' && games[index].rating < 5){
            games[index].rating += 1;
            res.status(200).send(games)
        } else if (type === 'minus' && games[index].rating > 1){
            games[index].rating -= 1;
            res.status(200).send(games)
        } else {
            res.status(400).send('impossible rating!!!')
        }
    }
}