const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (_,res) => {
    fs.readFile('./data/videos.json', 'utf8', (err, data) => {
        if(err) throw err;

        let vidArray = [];
        const videoInfo = JSON.parse(data);
       
        
        videoInfo.forEach(video => {
            vidArray.push({
                id: video.id,
                title: video.title,
                channel: video.channel,
                image: video.image,
            });
        });
        res.json(vidArray)
    })
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    fs.readFile('./data/videos.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoInfo = JSON.parse(data);
        let indexVid = videoInfo.findIndex(video => video.id === id);
        res.json(videoInfo[indexVid])
    })
})



router.post('/', (req, res) => {
    
    const { title, description } = req.body;
    console.log('Success!');
    
    fs.readFile('./data/videos.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoInfo = JSON.parse(data);
        
        videoInfo.push({
            title: title,
            channel:"Guest",
            image: "../public/images/Upload-video-preview.jpg",
            description: description,
            views: 0,
            likes: 0,
            duration: 0,
            video: "placeholder",
            timestamp: Date.now(),
            comments: [],
        })
        const newVideoInfo = JSON.stringify(videoInfo)
        fs.writeFile('./data/videos.json', newVideoInfo, (err) => {
            if(err) throw err;
            console.log('Saved!')
        });
        res.json(videoInfo)
    })
})

module.exports = router;