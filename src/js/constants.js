export const EXPERIMENTAL_FLAG = 'experimental';

export const ACCEPTED_MIME_TYPES = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/apng',
  'image/gif',
  'image/webp',
  'image/avif'
];

// Item info API configuration.
// Set `ITEM_INFO_API_URL` to the endpoint that accepts a `barcode` query param
// (e.g. https://api.example.com/items). If the API requires an API key, set
// `ITEM_INFO_API_KEY` to the value. Leave empty to disable automatic lookups.
// Default to the official API host for UPC Database
export const ITEM_INFO_API_URL = 'https://api.upcdatabase.org';
// Do not store API keys in source. Read from build-time env variable.
// During local development you can set UPC_API_KEY in your environment.
// In CI (GitHub Actions) set a repository Secret named `UPC_API_KEY` and
// the workflow below will expose it as `UPC_API_KEY` during build.
export const ITEM_INFO_API_KEY = (typeof process !== 'undefined' && process?.env?.UPC_API_KEY) || '';

// Optional: a server-side proxy endpoint (recommended). Configure this to a
// relative function path like `/.netlify/functions/upc` or a deployed proxy URL.
// When set, the client will call the proxy instead of calling the API directly
// which avoids CORS and keeps your API key secret server-side.
export const ITEM_INFO_PROXY_URL = (typeof process !== 'undefined' && process?.env?.ITEM_INFO_PROXY_URL) || '';
