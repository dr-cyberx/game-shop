const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const https = require('https');

const port = 3000;
const hostname = '127.0.0.1';

const app = express();
app.set('view engine' , 'ejs');
app.use('/static', express.static('static'));
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
   res.render('index');
});

app.get('/contact', function (req, res) {
   res.render('form');
});

app.post('/contact', function (req, res) {

   const name = req.body.username;
   const email = req.body.email;
   const phno = req.body.phno;
   const desc = req.body.desc;

   const userdata = {
      members: [
         {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
               FNAME: name,
               PHONE: phno,
               MMERGE7: desc
            }

         }

      ]
   }

   const userJsondata = JSON.stringify(userdata);

   const url = 'https://us2.api.mailchimp.com/3.0/lists/10e9ea1a85'

   const Options = {
      method: 'post',
      auth: 'vishal:2ef7ee84838f4965a8a8f16c5cf9db26-us2'
   }

   const request = https.request(url, Options, (response) => {
      response.on('data', (data) => {
         console.log(JSON.parse(data));
      })
   });
   request.write(userJsondata);
   // res.sendFile(__dirname + '/success.html')
   request.end();
   if (res.statusCode == 200) {
      res.render('success');
   } else if (res.statusCode == 400) {
      res.render('fail');
   }
});





app.listen(process.env.PORT || port, function () {
   console.log(`The server is running at http://${hostname}:${port}`);
});
