const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
const DEL_CUSTOMER = 'DEL_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case DEL_CUSTOMER:
      return { ...state, customers: state.customers.filter(c => c !== action.payload) };
    default: return state;
  }
};

export const addCustomersAction = payload => ({ type: ADD_CUSTOMERS, payload });
export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload });
export const delCustomerAction = payload => ({ type: DEL_CUSTOMER, payload });

