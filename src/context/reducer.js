export const initialState = JSON.parse(localStorage.getItem("store")) || {
  son: 9,
  wishlist: [],
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  let memory = {};
  switch (action.type) {
    case "LOGIN":
      memory = { ...state, token: action.payload };
      saveStorage(memory);
      return memory;
    case "LOGOUT":
      memory = { ...state, token: null };
      saveStorage(memory);
      return memory;
    default:
      return state;
  }
};

function saveStorage(memory) {
  localStorage.setItem("store", JSON.stringify(memory));
}
