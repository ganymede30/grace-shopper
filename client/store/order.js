import axios from 'axios'

const ADD_TO_ORDER = 'ADD_TO_ORDER'
const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER'
const GET_ALL_ITEMS = 'GET_ALL_ITEMS'
const INCREMENT_QTY = 'INCREMENT_QTY'
const DECREMENT_QTY = 'DECREMENT_QTY'

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
    // console.log('order data:', data)
    if (data) dispatch(getAllItems(data.shoes))
  } catch (error) {
    console.error(error)
  }
}

export const incrementThunk = (shoeId, orderId) => async dispatch => {
  try {
    // console.log('shoeId: ', shoeId)
    // console.log('orderId: ', orderId)
    const {data} = await axios.put(`/api/orders/increment/${shoeId}/${orderId}`)
    console.log(data)
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

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      const avoidDuplicate = state.items.filter(
        item => item.model === action.item.model
      )
      if (avoidDuplicate) return {...state}
      else return {...state, items: [...state.items, action.item]}
    case GET_ALL_ITEMS:
      return {...state, items: action.items}
    case INCREMENT_QTY:
      // const findItem = [...state.items].map(item => {
      //   if (item.id === action.item.id) {
      //     item.orderShoes.quantity++
      //     return item
      //   } else return item
      // })
      console.log(action, 'action')
      return {...state, items: findItem}
    default:
      return state
  }
}
