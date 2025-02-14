const initialState = {
  orders: [
    {
      id: "U8dAD",
      product: {
        pName: "Lenovo Laptop",
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
        pName: "Paco Rabbanne:PHANTOM",
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
        pName: "CRK: Totti",
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
  console.log(action);
  let { type, payload } = action;
  if (type === "ADD_NEW_PRODUCT") {
    return {
      ...state,
      orders: [...state.orders, payload],
    };
  }
  if (type === "SET_DELIVERED") {
    return {
      ...state,
      orders: state.orders.map((elt) =>
        elt.id === payload ? { ...elt, status: "Delivered" } : elt
      ),
    };
  }
  if (type === "SET_REJECTED") {
    return {
      ...state,
      orders: state.orders.map((elt) =>
        elt.id === payload ? { ...elt, status: "Rejected" } : elt
      ),
    };
  }
  if (type === "DELETE_ORDER") {
    return {
      ...state,
      orders: state.orders.filter((elt) => elt.id !== payload),
    };
  }
  return state;
};

export default appReducer;
