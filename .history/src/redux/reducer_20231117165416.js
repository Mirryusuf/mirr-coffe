const initialState = {
  product: [
    {
      id: 1,
      name: "Cappuccino Romeo",
      price: 25000,
      description: "with chocolatte",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/cappuccino-1.jpg"),
    },
    {
      id: 2,
      name: "Espresso Jakarta",
      price: 23000,
      description: "with oat milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/espresso-1.jpg"),
    },
    {
      id: 3,
      name: "Latte Caramel",
      price: 29000,
      description: "with extra caramel",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/latte-1.jpg"),
    },
    {
      id: 4,
      name: "Mocha Gajah",
      price: 27000,
      description: "with extra milk",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/mocha-1.jpg"),
    },
    {
      id: 5,
      name: "Americano Timur",
      price: 25000,
      description: "with special beans",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/americano-1.jpg"),
    },
  ],
  keranjang: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_KERANJANG":
      return { ...state, keranjang: [...state.keranjang, ...action.payload] };
    default:
      return state;
  }
};

export default reducer;
