const Service = require('../models/serviceModel');

exports.getAllServices = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { where: { category } } : {};
    const services = await Service.findAll(filter);
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services', detail: error.message });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.status(200).json({ service });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch service' });
  }
};

exports.createService = async (req, res) => {
  try {
    const { name, category, price, duration, description, imageUrl } = req.body;
    const service = await Service.create({
      name,
      category,
      price,
      duration,
      description,
      imageUrl
    });
    res.status(201).json({ message: 'Service created', service });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service', detail: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price, duration, description, imageUrl, isAvailable } = req.body;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    await service.update({
      name: name || service.name,
      category: category || service.category,
      price: price || service.price,
      duration: duration || service.duration,
      description: description || service.description,
      imageUrl: imageUrl || service.imageUrl,
      isAvailable: isAvailable !== undefined ? isAvailable : service.isAvailable
    });
    res.status(200).json({ message: 'Service updated', service });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    await service.destroy();
    res.status(200).json({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
};
