
export
default Ep.Model.extend({
    typeKey: 'person',
    name: Ep.attr('string'),
    zipCode: Ep.attr('string'),
    dateOfBirth: Ep.attr('date'),
    qualities: Ep.hasMany('quality')
});
