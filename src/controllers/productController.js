const { readData, writeData } = require("../models/productModel");

const getAll = (req, res) => {
  try {
    const products = readData();
    const { category } = req.query;

    if (category) {
      return res.json(products.filter((p) => p.category.toLowerCase() === category.toLowerCase()));
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
};

const create = (req, res) => {
  try {
    const { name, price, category, image } = req.body;

    // Validação básica melhorada
    if (!name || price === undefined || price <= 0) {
      return res.status(400).json({ message: "Nome e preço válido são obrigatórios" });
    }

    const products = readData();
    const newProduct = {
      id: Date.now(), // Para um projeto real, prefira UUID
      name,
      price: Number(price),
      category: category || "Geral",
      image: image || ""
    };

    products.push(newProduct);
    writeData(products);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar produto" });
  }
};

const update = (req, res) => {
  try {
    const products = readData();
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    // Atualiza apenas o que foi enviado no body
    products[index] = { ...products[index], ...req.body };

    writeData(products);
    res.json(products[index]);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar produto" });
  }
};

const remove = (req, res) => {
  try {
    let products = readData();
    const id = Number(req.params.id);

    const initialLength = products.length;
    products = products.filter((p) => p.id !== id);

    if (products.length === initialLength) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    writeData(products);
    res.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover produto" });
  }
};

module.exports = { getAll, create, update, remove };