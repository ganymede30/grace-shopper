/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {UserDash} from './user-dash'
export {LoginSignUp} from './auth-form'
export {default as Hero} from './hero-page'
export {allShoes} from './allShoes'
export {default as SingleShoe} from './SingleShoe'
export {Shoe} from './Shoe'
export {default as Checkout} from './Checkout'
export {allOrdersForUser} from './allOrdersForUser'
export {default as Footer} from './Footer'
