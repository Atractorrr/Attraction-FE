import { SubscribeNewsletterParams } from './type'

const subscribeNewsletterKeys = {
  all: ['subscribe-newsletter'] as const,
  checkSubscribeState: (params: SubscribeNewsletterParams) => [
    ...subscribeNewsletterKeys.all,
    'check-subscribe-state',
    params,
  ],
  subscribeNewsletter: ({ type, ...params }: SubscribeNewsletterParams) => [
    ...subscribeNewsletterKeys.all,
    type ?? 'subscribe',
    params,
  ],
}

export default subscribeNewsletterKeys
