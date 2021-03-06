const { waitingDisquette } = require('../models/Disquette')

module.exports = (req, res) => {
    
    if (req.body.author == "" && req.user) req.body.author = req.user.username 

    waitingDisquette.post(req.body).then(results => {

        console.log("insertion succeful")
        req.flash("succes", "La disquette a bien été ajoutée!", results)
        res.redirect('#')

    }).catch(err => {

        req.flash("error", "Erreur sur la disquette!", err)
        res.redirect('#')
    })
    
}