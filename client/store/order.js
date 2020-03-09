import axios from 'axios'

const ADD_TO_ORDER = 'ADD_TO_ORDER'
const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER'
const GET_ALL_ITEMS = 'GET_ALL_ITEMS'
const INCREMENT_QTY = 'INCREMENT_QTY'
const DECREMENT_QTY = 'DECREMENT_QTY'
const REMOVE_SHOE = 'REMOVE_SHOE'

const initialState = {
  items: []
}

export const addToOrder = item => ({
  type: ADD_TO_ORDER,
  item
})

export const removeFromOrder = id => ({
  type: REMOVE_FROM_ORDER,
  id
})

export const getAllItems = items => ({
  type: GET_ALL_ITEMS,
  items
})

export const increment = item => ({
  type: INCREMENT_QTY,
  item
})

export const decrement = item => ({
  type: DECREMENT_QTY,
  item
})

export const remove = item => ({
  type: REMOVE_SHOE,
  item
})

export const addToOrderThunk = item => async dispatch => {
  try {
    await axios.post(`/api/orders`, item)
    dispatch(addToOrder(item))
  } catch (error) {
    console.error(error)
  }
}

export const allItemsInOrderThunk = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/userCart`)
    if (data) dispatch(getAllItems(data.shoes))
  } catch (error) {
    console.error(error)
  }
}

export const incrementThunk = (shoeId, orderId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/orders/increment/${shoeId}/${orderId}`)
    dispatch(increment(data))
  } catch (error) {
    console.error(error)
  }
}

export const decrementThunk = (shoeId, orderId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/orders/decrement/${shoeId}/${orderId}`)
    dispatch(decrement(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeThunk = (shoeId, orderId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/orders/remove/${shoeId}/${orderId}`)
    dispatch(remove(data))
  } catch (error) {
    console.error(error)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      const avoidDuplicate = state.items.filter(
        item => item.model === action.item.model
      )
      if (avoidDuplicate) return {...state}
      else return {...state, items: [...state.items, action.item]}
    case REMOVE_SHOE:
      return {
        ...state,
        items: [...state.items.filter(item => item.model !== action.item.model)]
      }
    case GET_ALL_ITEMS:
      return {...state, items: action.items}
    case INCREMENT_QTY:
      const incrementQty = [...state.items].map(item => {
        if (item.id === action.item.id) {
          item.OrderShoes.quantity += 1
          return item
        } else return item
      })
      return {...state, items: incrementQty}
    case DECREMENT_QTY:
      const decrementQty = [...state.items].map(item => {
        if (item.id === action.item.id) {
          item.OrderShoes.quantity -= 1
          return item
        } else return item
      })
      return {...state, items: decrementQty}
    default:
      return state
  }
}
