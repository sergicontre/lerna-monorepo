import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `component-a`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ComponentA extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[propTest]]!</h2>
    `;
  }
  static get properties() {
    return {
      propTest: {
        type: String,
        value: 'component-a',
      },
    };
  }
}

window.customElements.define('component-a', ComponentA);
