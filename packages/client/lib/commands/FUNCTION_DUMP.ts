import { BlobStringReply, Command } from '../RESP/types';

export default {
  FIRST_KEY_INDEX: undefined,
  IS_READ_ONLY: true,
  transformArguments() {
    return ['FUNCTION', 'DUMP'];
  },
  transformReply: undefined as unknown as () => BlobStringReply
} as const satisfies Command;