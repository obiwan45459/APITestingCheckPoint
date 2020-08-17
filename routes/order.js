const express = require('express')
//const bodyParser = require("body-parser")
const router = express.Router()

const orderInfo = [{
        id: 1,
        name: 'item01',
        quantity: 5
    },
    {
        id: 2,
        name: 'item02',
        quantity: 4
    },
    {
        id: 3,
        name: 'item03',
        quantity: 99
    }
]

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// Return all orderInfo
router.get('/', (req, res) => {
    res.send(orderInfo);
});

router.post('/:id/:name', (req, res) => {
    //   res.send('SUCCESS: you added '+req.params.id +'Grades: '+req.params.grades)

    const order = req.body

    if (!order.id)
    {
        res.status(422).send(() => {
            return new Error('please include ID in your request')
        })
    }
    res.status(201).json(order)
})

router.post('/', (req, res) => {
    //   res.send('SUCCESS: you added '+req.params.id +'Grades: '+req.params.grades)

   //const order = req.body

    res.send('SUCCESS in post')
})

module.exports = router;