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

  const currentThread = process.setSource(source, [], fnName);

  try {
    await Promise.race([
      sleep(config.maxAcceptableExecutionTime).then(_ => {
        if (!result.succeed) {
          throw Error(config.messages.tooLongExecution);
        }
      }),
      currentThread.postMessage(),
    ])
    .then(value => {
      result.succeed = true;
      result.value = value;
    })
    .finally(_ => currentThread.kill());
  } catch(err) {
    result.error = err.message;
  }

  return result;
}

export default runner;
