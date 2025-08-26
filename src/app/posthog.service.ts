import { Injectable } from '@angular/core';
import posthog from 'posthog-js';

@Injectable({
  providedIn: 'root'
})
export class PosthogService {

  constructor() { }

  // Eventlarni track qilish
  captureEvent(eventName: string, properties?: any): void {
    posthog.capture(eventName, properties);
  }

  // User identify qilish
  identify(userId: string, properties?: any): void {
    posthog.identify(userId, properties);
  }

  // User logout
  reset(): void {
    posthog.reset();
  }

  // Page view track qilish
  capturePageView(url?: string): void {
    posthog.capture('$pageview', {
      $current_url: url || window.location.href
    });
  }

  // User properties set qilish
  setPersonProperties(properties: any): void {
    posthog.setPersonProperties(properties);
  }

  // Feature flag tekshirish
  // isFeatureEnabled(flag: string): boolean {
  //   return posthog.isFeatureEnabled(flag);
  // }
  //
  // // A/B test uchun
  // getFeatureFlag(flag: string): string | boolean {
  //   return posthog.getFeatureFlag(flag);
  // }

  // Alias yaratish
  alias(alias: string): void {
    posthog.alias(alias);
  }
}
