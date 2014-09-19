export
default Ep.Model.extend({
    typeKey: 'quality',
    name: Ep.attr('string'),
    person: Ep.belongsTo('person')
});
