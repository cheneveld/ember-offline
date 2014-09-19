import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var people = this.session.query('person');
        return people;
    },
    actions: {
        loadPerson: function(person) {
            this.controller.transitionToRoute('people.show', person);
        }
    },
});
