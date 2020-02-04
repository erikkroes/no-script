const template = document.createElement('template');

template.innerHTML = `
<style>
  :host {
    display: none;       
  }
</style>
`;

class NoScript extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));        
  }
}

window.customElements.define('no-script', NoScript);