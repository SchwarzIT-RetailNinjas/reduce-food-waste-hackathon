const express = require('express');
const { createClient } = require('redis');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redis Client Setup
const keys = require("./keys");

const redisPublisher = createClient({
    url: 'redis://redis:6379'
});

(async () => {
    redisPublisher.on('connection', ( connection ) => {
        console.log("Publisher connected");
    })
    redisPublisher.on('error', (err) => console.log('Redis Client Error', err));

    await redisPublisher.connect();
 })();


// //Client
// const redisSubscriber = redisPublisher.duplicate();

// (async () => {
//     await redisSubscriber.connect();

//     await redisSubscriber.pSubscribe('*', (message, channel) => {
//         console.log(message, channel); // 'message', 'channel'
//       });
//  })();

//[POST] /discount/:store
/**
 * @params storeid
 * @RequestBody article with discount
 * {
 *  "discounts": [
 *  {
 *      "id": 1000,
 *      "name": "3-Klingenrasierermen",
 *      "brand": "Cien",
 *      "pack": "1 Stk.",
 *      "price": 2.99,
 *      "eans": "463813704847,74962312123",
 *      "discounted_ratio": 0.1,
 *      "end_of_discount": "2022-06-26T23:59:59.999Z"
 *  }
 * ]
 * }
 */
app.post('/discount/:store', (req, res) => {
    const storeid = req.params.store;

    const discounts = req.body.discounts;

    for (const discount of discounts) {
        const channelID = storeid + "-all";
        redisPublisher.publish(channelID, JSON.stringify({ discount }));
    }

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`App run at http://localhost:${PORT}`);
});
