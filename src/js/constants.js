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
export const ITEM_INFO_API_URL = '';
export const ITEM_INFO_API_KEY = '4190D3F1E6057DD921DA7E426A79AAF3';
