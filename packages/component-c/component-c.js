import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `component-c`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ComponentC extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop2]]!</h2>
      <h2>Hello [[prop2]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop2: {
        type: String,
        value: 'component-c',
      },
      prop3: {
        type: String,
        value: 'component-c',
      }
    };
  }
}

window.customElements.define('component-c', ComponentC);
