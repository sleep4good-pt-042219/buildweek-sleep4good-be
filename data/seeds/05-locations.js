exports.seed = function(knex, Promise) {
    return knex('locations')
    .then(function() {
        return knex('locations').insert([
            { 
                location_name: 'Holiday Binn of Georgetown',
                hotel_id: 2,
                imageUrl: '',
                street_address: '567 City Street',
                city: 'Georgetown',
                state: 'GA',
                zip: 11443,
                phone: '(717) 443-5511',
                email: 'info@hotelbinn.com',
                rating: 4,
                donation_id: 1
            },
            {
                location_name: 'Shillton of Texas',
                hotel_id: 3,
                imageUrl: '',
                street_address: '567 City Street',
                city: 'Dallas',
                state: 'TX',
                zip: 11443,
                phone: '(219) 443-5511',
                email: 'info@shillton.com',
                rating: 4,
                donation_id: 3
            },
            {
                location_name: 'Holiday Binn of Montana',
                hotel_id: 2,
                imageUrl: '',
                street_address: '567 City Street',
                city: 'Some Town',
                state: 'MT',
                zip: 11443,
                phone: '(803) 443-5511',
                email: 'info@hotelbinn.com',
                rating: 4,
                donation_id: 2
            },
            {
                location_name: 'Marry a Lot of Nashville',
                hotel_id: 1,
                imageUrl: '',
                street_address: '345 Village Street',
                city: 'Nashville',
                state: 'KY',
                zip: 51234,
                phone: '(803) 443-5511' ,
                email: 'info@marrylot.com',
                rating: 4,
                donation_id: 1
            }, 
            { 
                location_name: 'Shillton of Miami',
                hotel_id: 3,
                imageUrl: '',
                street_address: '8009 Town Street',
                city: 'Miami',
                state: 'FL',
                zip: 54134,
                phone: '(612) 443-5511',
                email: 'info@shillton.com',
                rating: 4,
                donation_id: 1
            },
            { 
                location_name: '4 Reasons of Las Vegas',
                hotel_id: 4,
                imageUrl: '',
                street_address: '333 Simple Ct',
                city: 'Las Vegas',
                state: 'NV',
                zip: 89331,
                phone: '(612) 443-5511',
                email: 'info@4reasons.com',
                rating: 4,
                donation_id: 4
            },
            { 
                location_name: 'Marry a Lot of Baltimore',
                hotel_id: 1,
                imageUrl: '',
                street_address: '333 Baltimore Pls',
                city: 'Baltimore',
                state: 'MD',
                zip: 20234,
                phone: '(612) 443-5511',
                email: 'info@marryalot.com',
                rating: 4,
                donation_id: 5
            },
            { 
                location_name: 'Shrimp of Detroit',
                hotel_id: 5,
                imageUrl: '',
                street_address: '333 Detroit Rd',
                city: 'Detroit',
                state: 'MD',
                zip: 64213,
                phone: '(612) 443-5511',
                email: 'info@shrimp.com',
                rating: 4,
                donation_id: 1
            },
            { 
                location_name: 'Shrimp of Flint',
                hotel_id: 5,
                imageUrl: '',
                street_address: '333 Flint Rd',
                city: 'Flint',
                state: 'MI',
                zip: 64213,
                phone: '(612) 443-5511',
                email: 'info@shrimp.com',
                rating: 4,
                donation_id: 3
            },
            { 
                location_name: 'Shillton of Boston',
                hotel_id: 3,
                imageUrl: '',
                street_address: '333 Boston Rd',
                city: 'Boston',
                state: 'MA',
                zip: 14213,
                phone: '(112) 443-5511',
                email: 'info@shillton.com',
                rating: 4,
                donation_id: 2
            },
            { 
                location_name: '4 Reasons of Denver',
                hotel_id: 4,
                imageUrl: '',
                street_address: '333 Denver Ct',
                city: 'Denver',
                state: 'NV',
                zip: 89331,
                phone: '(612) 443-5511',
                email: 'info@4reasons.com',
                rating: 4,
                donation_id: 4
            },
            { 
                location_name: 'Holliday Binn of Oregon',
                hotel_id: 2,
                imageUrl: '',
                street_address: '333 Oregon Ct',
                city: 'Seattle',
                state: 'OR',
                zip: 59331,
                phone: '(612) 443-5511',
                email: 'info@hollidaybinn.com',
                rating: 4,
                donation_id: 6
            }
        ]);
    });
};