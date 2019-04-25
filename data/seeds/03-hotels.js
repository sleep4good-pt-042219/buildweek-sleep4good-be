exports.seed = function(knex, Promise) {
    return knex('users').insert([
      { name: 'Marry-a-lott', address: '123 City Street, Mainsville, CA, 04134', phone: '(301) 443-5511' },
      { name: 'Holiday Binn', address: '567 City Street, Georgetown, GA, 04134', phone: '(717) 443-5511' },
      { name: 'Shillton', address: '3231 Enclave Street, Washington, DC, 04134', phone: '(219) 443-5511' },
      { name: 'Imp\s Enclave', address: '345 Village Street, Nashville, KY, 04134', phone: '(803) 443-5511' },
      { name: 'Mom\s & Pop\s', address: '8009 Town Street, Dallax, TX, 04134', phone: '(612) 443-5511' }
    ]);
};
  