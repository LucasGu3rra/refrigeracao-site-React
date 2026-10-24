const ATTRIBUTION_KEYS = new Set([
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
  'gclid', 'dclid', 'gbraid', 'wbraid', 'gad_source', 'gad_campaignid',
]);

// Keep campaign parameters inside the site, without storage or sending them to WhatsApp.
export function getAttributionSearch(search) {
  const filtered = new URLSearchParams();
  for (const [key, value] of new URLSearchParams(search)) {
    if (ATTRIBUTION_KEYS.has(key)) filtered.set(key, value);
  }
  const query = filtered.toString();
  return query ? `?${query}` : '';
}
