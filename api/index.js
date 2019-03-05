import express from 'express';
import data from '../src/testData.json'

const router = express.Router();

// Convert the contest data from array into object form for easy lookup
const contests = data.contests.reduce((obj,contest)=>{
    obj[contest.id] = contest;
    return obj;
}, {});

router.get('/contests', (req,res) => {
    res.send({contests: contests});
});

router.get('/contests/:contestId', (req,res) => {
    //req.param.contestId --> to acces the contestId from url
    let contest = contests[req.params.contestId];
    contest.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus dignissimos, error provident eveniet quam animi cumque enim iure ea, itaque nobis rem esse aliquam soluta voluptas earum eaque hic."
    res.send(contest);
});


export default router;