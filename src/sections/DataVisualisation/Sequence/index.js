import { memo, lazy } from 'react';

export default memo(lazy(_ => import('./Sequence')));
