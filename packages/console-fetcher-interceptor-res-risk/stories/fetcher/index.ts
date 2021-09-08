import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz,
  fetcherDemoInterceptorMockVerifyCodeUrl
} from '@alicloud/fetcher-demo-helpers';

import intercept from '../../src';

const fetcher1 = createFetcher({
  body: {
    newRisk: 'true'
  }
});

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);
fetcher1.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl);

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};
