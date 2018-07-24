import { html } from 'lit-html'

export default state => html`<div class="app">
  <div class="online">Status: ${state.online ? '☑️' : '❌'}</div>
</div>`
