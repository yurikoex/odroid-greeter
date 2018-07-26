import { render } from 'lit-html'
import 'opensans-npm-webfont'
import './style.scss'

import app from './containers/app'
import { createStore } from './store'
import reducers from './reducers'
import initializeServices from './services'
import logger from './logger'
const { log } = logger()
log('hello')
const store = createStore(reducers)

initializeServices({ store })

store.subscribe(state => render(app(state), document.body))

render(app(store.getState()), document.body)
