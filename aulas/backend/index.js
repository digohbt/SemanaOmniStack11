const express = require('express');
const app = express();

app.get('/' , (req , res)=> {
    return res.json({ 
        evento:"semanaomini",
        aluno:"diego",
    })
});


app.listen(3333);