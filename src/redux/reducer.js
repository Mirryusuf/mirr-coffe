import { combineReducers } from "redux";

const initialProductState = {
  product: [
    {
      id: 1,
      name: "Cappuccino Romeo",
      type: "Cappuccino",
      price: 25000,
      description: "with chocolatte",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/cappuccino-1.jpg"),
    },
    {
      id: 2,
      name: "Espresso Jakarta",
      type: "Espresso",
      price: 23000,
      description: "with oat milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/espresso-1.jpg"),
    },
    {
      id: 3,
      name: "Latte Caramel",
      type: "Latte",
      price: 29000,
      description: "with extra caramel",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/latte-1.jpg"),
    },
    {
      id: 4,
      name: "Mocha Gajah",
      type: "Mocha",
      price: 27000,
      description: "with extra milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/mocha-1.jpg"),
    },
    {
      id: 5,
      name: "Americano Timur",
      type: "Americano",
      price: 25000,
      description: "with special beans",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/americano-1.jpg"),
    },
  ],
  keranjang: [],
  orderList: [],
};

const initialUserState = {
  userList: [
    {
      alamat: [
        {
          id: 1,
          namaAlamat: "Kantor",
          namaPenerima: "amir",
          noTelpon: "08288383838",
          alamat: "Minim fugiat laboris officia ad officia eiusmod adipisicing",
          active: true,
        },
        {
          id: 2,
          namaAlamat: "Kantor",
          namaPenerima: "amir 2",
          noTelpon: "08288383838",
          alamat: "Minim fugiat laboris officia ad officia eiusmod adipisicing",
          active: false,
        },
      ],
      email: "amir@brambang.com",
      id: 1,
      isLogin: false,
      name: "Amir",
      password: "12345678",
    },
  ],
};

const initialAlamatTokoState = {
  alamat: [
    "Mirr Coffe Ciragil; Jl. Ciragil, Kebayoran Baru",
    "Mirr Coffe Kebon Jeruk; Jl. Raya Kebon jeruk, Kebayoran Lama",
    "Mirr Coffe Ciputat; Jl. Hj Soleh, Ciputat Raya",
  ],
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "SET_KERANJANG":
      return { ...state, keranjang: [...action.payload] };

    case "SET_ORDERLIST":
      return { ...state, orderList: [...state.orderList, action.payload] };
    default:
      return state;
  }
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_USERLIST":
      return { userList: [...action.payload] };

    case "SET_ALAMATLIST":
      return { userList: [...action.payload] };
    default:
      return state;
  }
};

const alamatTokoReducer = (state = initialAlamatTokoState, action) => {
  return state;
};

const reducer = combineReducers({
  productReducer,
  userReducer,
  alamatTokoReducer,
});

export default reducer;
