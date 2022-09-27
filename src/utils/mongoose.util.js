module.exports = {
    modelToObject: (model) => (model ? model.toObject() : model),
    multipleModelToObjects: (models) => models.map((model) => model.toObject()),
};
