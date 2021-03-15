import debug from 'debug';
import { sendMessage } from '@covid19/services';

export const controller = () => {
  debug(sendMessage());
};
