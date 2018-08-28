import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `component-b`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ComponentB extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'component-b',
      },
    };
  }
}

window.customElements.define('component-b', ComponentB);
