import {addCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const list = json.map(i => i.name)
        dispatch(addCustomersAction(list))
      })
  };
};
