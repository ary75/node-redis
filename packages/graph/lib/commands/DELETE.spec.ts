import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import DELETE from './DELETE';

describe('GRAPH.DELETE', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      DELETE.transformArguments('key'),
      ['GRAPH.DELETE', 'key']
    );
  });

  testUtils.testWithClient('client.graph.delete', async client => {
    const [, reply] = await Promise.all([
      client.graph.query('key', 'RETURN 1'),
      client.graph.delete('key')
    ]);

    assert.equal(typeof reply, 'string');
  }, GLOBAL.SERVERS.OPEN);
});
