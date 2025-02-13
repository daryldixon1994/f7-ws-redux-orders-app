const initialState = {
  orders: [
    {
      id: "U8dAD",
      product: {
        name: "Lenovo Laptop",
        price: 1500,
        qte: 1,
      },
      customer: {
        name: "Victor Lindsey",
        phone: 20147855,
        address: "La Marsa",
      },
      status: "Pending",
      total: 1500,
    },
    {
      id: "wV0QDlQ",
      product: {
        name: "Paco Rabbanne:PHANTOM",
        price: 544,
        qte: 2,
      },
      customer: {
        name: "Paul Delgado",
        phone: 5478632,
        address: "Le Bardo",
      },
      status: "Delivered",
      total: 1088,
    },
    {
      id: "Weelvb9saFx",
      product: {
        name: "CRK: Totti",
        price: 349,
        qte: 1,
      },
      customer: {
        name: "Rosa Reese",
        phone: 20147856,
        address: "La Marsa",
      },
      status: "Rejected",
      total: 349,
    },
  ],
};

const appReducer = (state = initialState, action) => {
  return state;
};

export default appReducer;
