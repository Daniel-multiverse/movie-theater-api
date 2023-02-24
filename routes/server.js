const express = require("express");
const app = express();
const {User} = require("models/User.js")
const {Shows} = require("models/Show.js")
const {sequelize} = require("../db")




app.get('models/users', async (req, res) => {
  const users =  await User.findAll()
  res.send(users)
});
  
  app.get('models/users/:id', async (req, res) => {
    const id = req.params.id
    const user =  await User.findByPk(id)
    res.send(user)
  });
  
  app.get('models/users/:id/shows', async (req, res) => {
    const id = req.params.id
    const user =  await User.findByPk(id)
    const shows = await user.getShows()
    res.send(shows)
  });
  
  app.put('models/users/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    user.update({

    })
  });
  

//SHOWS

  app.get('models/shows', async (req, res) => {
  const shows =  await Shows.findAll()
  res.send(shows)
  });
  
  app.get('mdoels/shows/:id', async (req, res) => {
    const show = await Shows.findByPk(req.params.id)
    res.send(show)
  });
  
  app.get('models/shows/genre/:genre', async (req, res) => {
    const shows = await Shows.findAll(req.params.genre)
    res.send(shows)
  });
  
  app.put('mdoels/shows/:id/rating', async (req, res) => {
    const show = await Shows.findByPk(req.params.id)
   await show.update({rating: req.params.genre})
   res.send("show updated")
  });
  
  app.put('models/shows/:id/status', async (req, res) => {
    const show = await Shows.findByPk(req.params.id)
    await show.update({status: req.params.status})
    res.send("show updated")
  });
  
  app.delete('/shows/:id', async (req, res) => {
    const show = await Shows.findByPk(req.params.id)
    await show.destroy()
    res.send('show deleted')
  });
  
  
  
  
  