const express = require('express');
const app = express();
const cors = require('cors');
const MessagingResponse = require('twilio').twiml.MessagingResponse;



app.use(cors());

//  Json middleware
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    return res.send('Welcome To twilio server')
});


app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('Welcome from mobile app team');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});



app.listen(process.env.PORT || 5000, () => console.log(`App listening on port 5000!`))