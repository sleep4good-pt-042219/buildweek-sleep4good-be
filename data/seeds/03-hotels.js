exports.seed = function(knex, Promise) {
    return knex('hotels').insert([
      { name: 'Marry-a-lott',
        street_address: '123 City Street',
        city: 'Mainsville',
        state: 'CA',
        zip: 04134,
        phone: '(301) 443-5511' 
    },
      { name: 'Holiday Binn',
        street_address: '567 City Street',
        city: 'Georgetown',
        state: 'GA',
        zip: 11443,
        phone: '(717) 443-5511' 
    },
      { name: 'Shillton',
        street_address: '3231 Enclave Street',
        city: 'Washington',
        state: 'DC',
        zip: 22234,
        phone: '(219) 443-5511' 
    },
      { name: 'Imp\s Enclave',
        street_address: '345 Village Street',
        city: 'Nashville',
        state: 'KY',
        zip: 51234,
        phone: '(803) 443-5511' 
    },
      { name: 'Mom\s & Pop\s',
        street_address: '8009 Town Street',
        city: 'Dallax',
        state: 'TX',
        zip: 04134,
        phone: '(612) 443-5511'
     }
    ]);
};
  