const SUBSTITUTE_TERM = 'SUBSTITUTE-PRODUCT-ID-TERM';

const extractResourceFromUri = (uri) => {
  if (uri.includes('waitlist')) {
    return 'product-collection';
  } else if (uri.includes('product-collection-item')) {
    return 'product-collection-item';
  } else {
    throw new Error(
      `Invalid uri '${uri}'. For the purposes of this exercise, we've only mocked out the following two JSON API endpoints: '/api/customer/<customerId>/waitlist' and '/api/product-collection-item/'. Did you provide 1 of these 2 values to mockFetch()?`
    )
  }
}

/**
 * This is a utility that simulates the behavior of the global fetch.
 * It supports two mocked out endpoints and returns the mock data for those two
 * endpoints. See example usage:
 * 
 * import mockFetch from './utils/mock-fetch.js';
 * const res1 = await mockFetch(`/api/customer/${customerId}/waitlist/`, {
 *   headers: { Accept: 'application/vnd.api+json' }
 * });
 * const res1Data = await res1.json();
 * 
 * const res2 = await mockFetch(`/api/product-collection-item`, {
 *   headers: { Accept: 'application/vnd.api+json' },
 *   method: 'POST',
 *   body: JSON.stringify({
 *     data: {
 *       type: 'variant-collection-item',
 *       attributes: {},
 *       relationships: {
 *         'product-collection': {
 *           data: {
 *             id: collectionId,
 *             type: 'product-collection'
 *           }
 *         },
 *         'product': {
 *           data: {
 *             id: productId,
 *             type: 'product'
 *           }
 *         }
 *       }
 *     }
 *   })
 * });
 * const res2Data = await res1.json();
 * 
 * @param {*} uri 
 * @param {*} request 
 *
 */
export default async (uri, request) => {
  // Determine the path that the json document actually is hosted at.
  const desiredStatusCode = request.method.toLowerCase() === 'post' ? 201 : 200;
  const desiredResource = extractResourceFromUri(uri);
  const actualPath =
    `/mock-${desiredResource}-${request.method}-${desiredStatusCode}.json`

  // Retrieve contents of path.
  const response = await fetch(actualPath);
  const templateBody = await response.json();

  // Mock value into response body if appropriate and return the mocked response.
  const substituteValue = desiredResource === 'product-collection-item' ?
    JSON.parse(request.body).data.relationships.product.data.id : null;
  const mockedResponseBody = (substituteValue !== null) ?
    JSON.parse(JSON.stringify(templateBody).replace(SUBSTITUTE_TERM, substituteValue)) :
    templateBody;
  return {
    ok: mockedResponseBody.ok,
    json: async () => ({ data: mockedResponseBody.data })
  }
};