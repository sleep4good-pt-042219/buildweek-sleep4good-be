exports.seed = function(knex, Promise) {
    return knex('bookings')
    .then(function() {
        return knex('bookings').insert([
            { 
                location_id: 3,
                hotel_id: 2,
                user_id: 1,
                total: 33,
                booking_start_date: '2014-12-30 23:18:54',
                booking_end_date: '2006-12-30 00:38:54'
            },
            {
                location_id: 1,
                hotel_id: 3,
                user_id: 2,
                total: 55,
                booking_start_date: '2006-12-30 00:38:54',
                booking_end_date: '2006-12-30 00:38:54'
            },
            {
                location_id: 5,
                hotel_id: 4,
                user_id: 3,
                total: 22,
                booking_start_date: '2014-12-30 23:18:54',
                booking_end_date: '2006-12-30 00:38:54'
            },
        ]);
    });
};