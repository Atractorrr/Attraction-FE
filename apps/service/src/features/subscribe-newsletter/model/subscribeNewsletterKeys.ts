import { SubscribeNewsletterParams } from './type'

const subscribeNewsletterKeys = {
  all: ['subscribe-newsletter'] as const,
  checkSubscribeState: (params: SubscribeNewsletterParams) => [
    ...subscribeNewsletterKeys.all,
    'check-subscribe-state',
    params,
  ],
  subscribeNewsletter: (params: SubscribeNewsletterParams) => [
    ...subscribeNewsletterKeys.all,
    'subscribe-newsletter',
    params,
  ],
}

export default subscribeNewsletterKeys
