import mockFetch from '../utils/mock-fetch.js';

/**
  * This function should act as a service to communicate with the mocked out
  * JSON API to retrieve the given customer's 'waitlist'.
  * When fully implemented, it should return an object representing the list of
  * products for which the customer wishes to receive back-in-stock
  * notifications.
  */
export const getWaitlist = async (customerId) => {
  const path = `/api/customer/${customerId}/waitlist/`;
  const response = await mockFetch(path, {
    headers: {
      Accept: 'application/vnd.api+json'
    },
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error('Request failed: customer waitlist, GET', response);
  }
  const { data } = await response.json();

  /*
    TODO: Parse the json document into a model or format representing the
    customer's waitlist and return.
  */
};

/**
  * This function should act as a service to communicate with the mocked out
  * JSON API to put an item on the given waitlist.
  * When fully implemented, it should return an object representing the added
  * collection item.
  */
export const createWaitlistItem = async (collectionId, productId) => {
  const path = `/api/product-collection-item/`;
  const response = await mockFetch(path, {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-CSRFToken': 'mock-token'
    },
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'product-collection-item',
        relationships: {
          'product-collection': {
            data: {
              id: collectionId,
              type: 'product-collection'
            }
          },
          'product': {
            data: {
              id: productId,
              type: 'product'
            }
          }
        }
      }
    })
  });
  if (!response.ok) {
    throw new Error('Request failed: product collection item, POST', response);
  }
  const { data } = await response.json();
    

  /*
    TODO: Parse the json document into a model or format representing the added
    collection item and return.
  */
};