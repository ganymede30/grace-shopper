import axios from 'axios'

const ADD_TO_ORDER = 'ADD_TO_ORDER'
const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER'
const GET_ALL_ITEMS = 'GET_ALL_ITEMS'

const initialState = {
  items: [],
  total: 0
}

export const addToOrder = item => ({
  type: ADD_TO_ORDER,
  item
})

export const removeFromOrder = id => ({
  type: REMOVE_FROM_ORDER,
  id
})

export const getAllItems = ({items}) => ({
  type: GET_ALL_ITEMS,
  items
})

export const addToOrderThunk = item => async dispatch => {
  try {
    console.log('The Item: ', item)
    //console.log('The Req Id: ', req)
    await axios.post(`/api/orders`, item)
    dispatch(addToOrder(item))
  } catch (error) {
    console.error(error)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {...state, items: [...state.items, action.item]}
    case GET_ALL_ITEMS:
      return {...state, items: [...action.items]}
    default:
      return state
  }
}
