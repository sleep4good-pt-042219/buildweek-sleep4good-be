exports.seed = function(knex, Promise) {
    return knex('payments')
    .then(function() {
        return knex('payments').insert([
            { 
                location_id: 3,
                hotel_id: 2,
                user_id: 1,
                cc_number: 3333-4444-5555-6777,
                cc_exp: '2020/12',
                cc_code: 333
            },
            {
                cc_number: 42323123113443,
                cc_exp: "2019/04",
                cc_code: 123,
                location_id: 1,
                hotel_id: 4,
                user_id: 1
            }
        ]);
    });
};