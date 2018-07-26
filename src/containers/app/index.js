import { html } from 'lit-html'

export default ({ online }) => html`<div class="app">
  <div class="${online ? 'online' : 'offline'}">
    ${online ? '☑️' : '❌'} Network is ${online ? 'ONLINE' : 'OFFLINE'}
  </div>
</div>`
