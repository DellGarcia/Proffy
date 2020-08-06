import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) => {
    res.json({ name: "Lucas"});
})

routes.post('/teacher', (req, res) => {
    const {
        name, 
        photoLink, 
        whatsapp, 
        biography, 
        subjects, 
        lessonValue
    } = req.body;

    
})

export default routes;