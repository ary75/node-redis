import { strict as assert } from 'assert';
import { TestRedisServers, itWithClient } from '../test-utils';
import { transformArguments } from './SMISMEMBER';

describe('SMISMEMBER', () => {
    it('transformArguments', () => {
        assert.deepEqual(
            transformArguments('key', ['1', '2']),
            ['SMISMEMBER', 'key', '1', '2']
        );
    });

    itWithClient(TestRedisServers.OPEN, 'client.smIsMember', async client => {
        assert.deepEqual(
            await client.smIsMember('key', ['1', '2']),
            [false, false]
        );
    });
});