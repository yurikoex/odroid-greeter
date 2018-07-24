import { render } from 'lit-html'
import 'opensans-npm-webfont'
import './style.scss'

import app from './containers/app'
import { createStore } from './store'
import reducers from './reducers'

const store = createStore(reducers)

store.subscribe(state => render(app(state), document.body))

render(app(store.getState()), document.body)
