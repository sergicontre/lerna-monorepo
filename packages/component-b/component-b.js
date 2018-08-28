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
      <h2>Hello [[prop4]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop4: {
        type: String,
        value: 'component-b',
      },
    };
  }
}

window.customElements.define('component-b', ComponentB);
