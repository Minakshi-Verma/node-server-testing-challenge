
exports.seed = function(knex) {
  return knex('users').insert([
    {name: 'Sam',age:29, city: "Livingston"},
    {name: 'Jim',age:39, city: "West Orange"},
    {name: 'Jon',age:19, city: "Newark"},
    {name: 'Kathy',age:42, city: "Hillside"},
    {name: 'Kim',age:27, city: "Millburn"},
    
  ]);
};


