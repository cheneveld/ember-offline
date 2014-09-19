var Adapter = Ep.ActiveModelAdapter.extend({
    host: EmberENV.serverHost,
    buildUrl: function(typeKey, id) {
        return this._super(typeKey, id) + ".json";
    },

    setupContainer: function(parent) {
        var container = this._super(parent);

        container.register('serializer:person', Ep.ModelSerializer.extend({}));
        container.register('serializer:quality', Ep.ModelSerializer.extend({}));
        return container;
    }
});

export
default {
    name: 'epf-setup',
    before: 'epf.container',
    initialize: function(container) {
        container.register('adapter:application', Adapter);
    }
};
