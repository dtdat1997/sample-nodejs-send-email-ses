import Router from 'express';
import axios from 'axios';
import AWS from 'aws-sdk';
import config from '../../config/index.js';

const router = Router();

// Amazon SES configuration
AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY
});

router.post('/', async (req, res) => {
  try {
    var params = {
      Source: 'no-reply@duongtiendat.com',
      Destination: {
        ToAddresses: [
          req.body.email
        ]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
            Charset: "UTF-8",
            Data: "<a>Nice to meet you</a>"
          },
         },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test email'
        }
      }
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
      function(data) {
        console.log(data.MessageId);
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
