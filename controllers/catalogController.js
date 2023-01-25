const router = require('express').Router();
const { getAll, getById } = require('../services/accomodationService');

router.get('/', (req, res) => {
    const rooms = getAll();

    res.render('catalog', {
        title: 'All Accomodation',
        rooms
    });
});

router.get('/:id', (req, res) => {
    const roomId = req.params.id;
    const room = getById(roomId);

    if (room) {
        res.render('details', {
            title: 'Accomodation Details',
            room
        });
    } else{
        res.render('roomNotFound', {
            title: 'Accomodation Details',
            roomId
        });

    }
});


module.exports = router;