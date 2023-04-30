import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import BITFIELD_RO from './BITFIELD_RO';

describe('BITFIELD_RO', () => {
  testUtils.isVersionGreaterThanHook([6, 2]);

  it('transformArguments', () => {
    assert.deepEqual(
      BITFIELD_RO.transformArguments('key', [{
        encoding: 'i8',
        offset: 0
      }]),
      ['BITFIELD_RO', 'key', 'GET', 'i8', '0']
    );
  });

  testUtils.testAll('bitFieldRo', async client => {
    assert.deepEqual(
      await client.bitFieldRo('key', [{
        encoding: 'i8',
        offset: 0
      }]),
      [0]
    );
  }, {
    client: GLOBAL.SERVERS.OPEN,
    cluster: GLOBAL.CLUSTERS.OPEN
  });
});