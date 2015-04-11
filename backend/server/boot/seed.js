module.exports = function(app) {
  var Person = app.models.Person;

  var getPerson = function() {
    Person.find({ where: { email: 'mob@5rabbits.com' }}, function(err, model) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log('User found');
      console.log(model);
    });
  };

  var login = function() {
    mail = 'mob@5rabbits.com';
    Person.login({ email: mail, password: '1234567890' }, function(err, accessToken) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log('Logged in user ', mail, ' with token: ', accessToken);

      getPerson();
    });
  }

  Person.create([
    {email: 'mob@5rabbits.com'  , password: '1234567890', isTechnician: true  },
    {email: 'joaco@5rabbits.com', password: '1234567890', isTechnician: false },
    {email: 'abx@5rabbits.com'  , password: '1234567890', isTechnician: true  },
    {email: 'ochoa@5rabbits.com', password: '1234567890', isTechnician: false },
    {email: 'cps@5rabbits.com'  , password: '1234567890', isTechnician: false }
  ], function(err, users) {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log('Created users:', users);

    // login();
  });
};
