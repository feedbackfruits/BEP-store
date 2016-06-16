/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'nav/index-nav',
  'Integration: NavIndexNavComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#nav/index-nav}}
      //     template content
      //   {{/nav/index-nav}}
      // `);

      this.render(hbs`{{nav/index-nav}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
