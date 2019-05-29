import Process from '@webos/process';
import { sleep } from '@webos/timers';

import config from 'config';

const process = new Process();

async function runner(source, fnName) {
  const result = {
    error: null,
    value: null,
    timeout: false,
    succeed: false,
  };

  try {
    await Promise.race([
      sleep(config.maxAcceptableExecutionTime).then(_ => {
        if (!result.succeed) {
          process.kill();
          throw Error(config.messages.tooLongExecution);
        }
      }),
      process.setSource(source, [], fnName).postMessage(),
    ])
    .then(value => {
      result.succeed = true;
      result.value = value;
    });
  } catch(err) {
    result.error = err.message;
  }

  return result;
}

export default runner;
