
var user = [{
  "name":"micaela procofio",
  "member_number":1,
  "email":"micaela@gmail.com",
  "tickets":8
},
{
  "name":"juliana hernandez",
  "member_number":2,
  "email":"juliana@gmail.com",
  "tickets":16
}
]

var package = [{
  "id":1,
  "description":"ticketera 8 tickets",
  "title":"8 tickets",
  "price":3200,
  "ticket_quantity":8
}, 
{
  "id":2,
  "description":"ticketera 16 tickets",
  "title":"16 tickets",
  "price":5000,
  "ticket_quantity": 16
}
]

var history = [{
  "id":1,
  "member_number":1,
  "email":"micaela@gmail.com",
  "tickets":7,
  "description":"reservo 1 hora y media",
  "date":"12/02/2025"
}, 
{
  "id":2,
  "member_number":2,
  "email":"juliana@gmail.com",
  "tickets":9,
  "description":"devolucion de 1 ticket",
  "date":"16/02/2025"
}
]

exports.dummyPost = (req, res) => {
  res.json({ message: 'success', data: ""});
};

exports.userGet = (req, res) => {
  res.json({ message: 'success', data: user});
};

exports.packageGet = (req, res) => {
  res.json({ message: 'success', data: package});
};

exports.historyGet = (req, res) => {
  res.json({ message: 'success', data: history});
};

