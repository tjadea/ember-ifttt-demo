import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | if-feed', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:if-feed');
    assert.ok(route);
  });
});
