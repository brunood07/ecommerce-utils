import { getCurrentOrder, getCurrentOrderShippingMethods } from '@oracle-cx-commerce/commerce-utils/selector';

export const getShippingMethods = (state) => {
  const shippingMethods = getCurrentOrderShippingMethods(state);

  return Object.values(shippingMethods)[0] || {};
};

export const getShippingGroups = (state) => {
  const order = getCurrentOrder(state);
  const { shippingGroups = {} } = order;

  return Object.values(shippingGroups) || [];
};



