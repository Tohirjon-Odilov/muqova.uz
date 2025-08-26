import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import posthog from 'posthog-js';

// PostHog konfiguratsiyasi
posthog.init(
  'phc_3jhbVvYHewH7yO7MiOWx126EuBVPFAxMprdRSA7iyRW',
  {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
        posthog.debug();
    },
    capture_pageview: false, // Manual page tracking uchun
    capture_pageleave: true
  }
);

posthog.capture('my event', { property: 'value' })

// Faqat module bootstrap
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error('Bootstrap xatosi:', err));
