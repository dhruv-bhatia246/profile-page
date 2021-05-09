const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const database = {
    users: [
        {
            name: 'DESIGNSUBWAY',
            photoshop: 'https://designsubway.graphy.com/courses/photoshop-from-scratch',
            youtube: 'https://www.youtube.com/watch?v=q9VBsGFl4p8',
            support: 'https://pages.razorpay.com/pl_FhF61yGf44ULgn/view',
            telegram: 'https://t.me/designsubway',
            grow: "https://anchor.fm/abhishek-anand46/episodes/How-to-grow-on-INSTAGRAM-part-1-eo5aum",
            recommend: "https://www.amazon.in/shop/designsubway",
            hire: "https://www.fiverr.com/desinsubway/design-an-outstanding-carousel-for-your-instagram?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=kwbdn2",
            whatsapp: "https://chat.whatsapp.com/EyjpLH4Velg6zU0sSPjCK0"
        },
        {
            name: 'Dhruv',
            photoshop: "",
            youtube: "https://youtube.com",
            support: "",
            telegram: "",
            grow: "",
            recommend: "",
            hire: "",
            whatsapp: ""
        }
    ]
}

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.post('/DESIGNSUBWAY',(req,res)=>{
    res.send(database.users[0]);
});
app.post('/DHRUV',(req,res)=>{
    res.send(database.users[1]);
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("app is listening");
})