module.exports = function(app) {
  var Person = app.models.Person;
  var ParameterType = app.models.ParameterType;
  var MeasureUnit = app.models.MeasureUnit;
  var Parameter = app.models.Parameter;
  var SourceType = app.models.SourceType;
  var SourceCategory = app.models.SourceCategory;
  var Measurement = app.models.Measurement;
  var MeasurementData = app.models.MeasurementData;

  var getPerson = function() {
    Person.find({ where: { email: 'mob@5rabbits.com' }}, function(err, model) {
      if (err) {
        console.log(err);
        //throw err;
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
        //throw err;
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
      //throw err;
    }

    console.log('Created users:', users);

    // login();
  });

  var createUnits = function() {
    MeasureUnit.create([
      {name: "Micrógramo por Litro", symbol: "μg/l"}
    ], function(err, elements) {
      console.log('Created units:', elements);
      createParameterTypes(elements);
    });
  };

  var createParameterTypes = function(units) {
    ParameterType.create([
      {name: "chemical"},
      {name: "organic"},
      {name: "physicial"}
    ], function(err, elements) {
      console.log('Created parameter types:', elements);
      createParameters(units, elements);
      createSourceTypes();
    });
  };

  var createSourceTypes = function() {
    SourceType.create([
      {name: "lake"},
      {name: "river (streams)"},
      {name: "ground water"},
      {name: "spring"},
      {name: "facility"}
    ], function(err, elements) {
      console.log('Created source types:', elements);
      createSourceCategories();
    });
  };
  
  var createSourceCategories = function() {
   SourceCategory.create([
      {name: "Surface water"},
      {name: "Ground water"},
      {name: "Other"}
    ], function(err, elements) {
      console.log('Created source categories:', elements);
    });
  };

  var createParameters = function(units, parameterTypes) {
    if (units.length == 0 || parameterTypes.length == 0) {
      return
    }
    unit = units[0];
    type = parameterTypes[0];
    Parameter.create([
      //chemicals:
      {name: "Arsenic", limit: 10, type: type, unit: unit},
      {name: "Barium", limit: 10, type: type, unit: unit},
      {name: "Boron", limit: 2400, type: type, unit: unit},
      {name: "Chromium", limit: 50, type: type, unit: unit},
      {name: "Fluoride", limit: 1500, type: type, unit: unit},
      {name: "Selenium", limit: 40, type: type, unit: unit},
      {name: "Uranium", limit: 30, type: type, unit: unit},
      //Organic:
      {name: "Benzene", limit: 10, type: type, unit: unit},
      {name: "Carbon tetrachloride", limit: 4, type: type, unit: unit},
      {name: "1,2-Dichlorobenzene", limit: 1000, type: type, unit: unit},
      {name: "1,4-Dichlorobenzene", limit: 300, type: type, unit: unit},
      {name: "1,2-Dichloroethane", limit: 30, type: type, unit: unit},
      {name: "1,2-Dichloroethene", limit: 50, type: type, unit: unit},
      {name: "Dichloromethane", limit: 20, type: type, unit: unit},
      {name: "Di(2-ethylhexyl)phthalate", limit: 8, type: type, unit: unit},
      {name: "1,4-Dioxane", limit: 50, type: type, unit: unit},
      {name: "Edetic acid", limit: 600, type: type, unit: unit},
      {name: "Ethylbenzene", limit: 300, type: type, unit: unit},
      {name: "Hexachlorobutadiene 0", limit: 6, type: type, unit: unit},
      {name: "Nitrilotriacetic acid", limit: 200, type: type, unit: unit},
      {name: "Pentachlorophenol", limit: 9, type: type, unit: unit},
      {name: "Styrene", limit: 20, type: type, unit: unit},
      {name: "Tetrachloroethene", limit: 40, type: type, unit: unit},
      {name: "Toluene", limit: 700, type: type, unit: unit},
      {name: "Trichloroethene", limit: 20, type: type, unit: unit},
      {name: "Xylenes", limit: 500, type: type, unit: unit}
    ], function(err, elements) {
      console.log('Created parameters:', elements);
    });
  };

  createUnits();
};
