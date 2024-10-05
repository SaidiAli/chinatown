import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode, useEffect} from 'react';
import {hydrateRoot} from 'react-dom/client';
import posthog from 'posthog-js';

if (!window.location.origin.includes('webcache.googleusercontent.com')) {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
        <PosthogInit />
      </StrictMode>,
    );
  });
}

function PosthogInit() {
  useEffect(() => {
    posthog.init('phc_F4xC9pLkcC9iCBkVI2x6qa8qHGhA3GfUWq8iY9ayfOg', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    });
  }, []);

  return null;
}
