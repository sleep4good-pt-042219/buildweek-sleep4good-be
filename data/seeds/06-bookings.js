exports.seed = function(knex, Promise) {
    return knex('bookings')
    .then(function() {
        return knex('bookings').insert([
            { 
                location_id: 3,
                hotel_id: 2,
                user_id: 1,
                total: 33
            },
            {
                location_id: 1,
                hotel_id: 3,
                user_id: 2,
                total: 55
            },
            {
                location_id: 5,
                hotel_id: 4,
                user_id: 3,
                total: 22
            },
        ]);
    });
};