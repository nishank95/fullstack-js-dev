import express from 'express';

const router = express.Router();

let data = [
    {
        "name": "Nishank Samant",
        "age": 23,
        "gender": "M"
    },
    {
        "name": "Ajay Patel",
        "age": 13,
        "gender": "M"
    },
    {
        "name": "Seema Mishra",
        "age": 33,
        "gender": "F"
    }
        
];

router.get('/', (req,res) => {
    res.send(data);
});

export default router;