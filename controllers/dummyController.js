var users = [
  { name: "micaela procofio", member_number: 1, email: "micaela@gmail.com", tickets: 8 },
  { name: "juliana hernandez", member_number: 2, email: "juliana@gmail.com", tickets: 16 }
];

var packages = [
  { id: 1, description: "ticketera 8 tickets", title: "8 tickets", price: 3200, ticket_quantity: 8 },
  { id: 2, description: "ticketera 16 tickets", title: "16 tickets", price: 5000, ticket_quantity: 16}
];

var history = [
  { id: 1, member_number: 1, email: "micaela@gmail.com", tickets: 7, description: "reservo 1 hora y media", date: "12/02/2025" },
  { id: 2, member_number: 2, email: "juliana@gmail.com", tickets: 9, description: "devolucion de 1 ticket", date: "16/02/2025" }
];

exports.userGet = (req, res) => {
  res.json({ message: 'success', data: users });
};

exports.packageGet = (req, res) => {
  res.json({ message: 'success', data: packages });
};

exports.historyGet = (req, res) => {
  res.json({ message: 'success', data: history });
};

// Crear paquete
exports.addPackage = (req, res) => {
  const { description, title, price, ticket_quantity } = req.body;
  if (!description || !title || price == null || ticket_quantity == null ) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }
  const newPackage = {
    id: packages.length + 1,
    description,
    title,
    price,
    ticket_quantity
  };
  packages.push(newPackage);
  res.json({ message: 'Paquete creado exitosamente', data: newPackage });
};

// Modificar paquete
exports.modifyPackage = (req, res) => {
  const { id, price, ticket_quantity } = req.body;
  const packageIndex = packages.findIndex(pkg => pkg.id === id);

  if (packageIndex === -1) {
    return res.status(404).json({ message: 'Paquete no encontrado' });
  }

  // Actualizar valores
  if (price !== undefined) packages[packageIndex].price = price;
  if (ticket_quantity !== undefined) packages[packageIndex].ticket_quantity = ticket_quantity;

  res.json({ message: 'Paquete modificado exitosamente', data: packages[packageIndex] });
};

// Eliminar paquete
exports.deletePackage = (req, res) => {
  const { id } = req.body;
  const packageIndex = packages.findIndex(pkg => pkg.id === id);
  if (packageIndex === -1) {
    return res.status(404).json({ message: 'Paquete no encontrado' });
  }
  packages.splice(packageIndex, 1);
  res.json({ message: 'Paquete eliminado exitosamente' });
};

// Modificar usuario (solo tickets)
exports.modifyUser = (req, res) => {
  const { member_number, tickets } = req.body;
  const userIndex = users.findIndex(user => user.member_number === member_number);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  users[userIndex].tickets = tickets;
  res.json({ message: 'Usuario modificado exitosamente', data: users[userIndex] });
};

// Filtrar usuario por member_number
exports.getUserByMemberNumber = (req, res) => {
  const { member_number } = req.body;
  const user = users.find(user => user.member_number === member_number);
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  res.json({ message: 'Usuario encontrado', data: user });
};
