import { watchEffect } from "vue";
import { getWaitlist, createWaitlistItem } from "@/services/waitlist";


const useWaitlist = () => {
  watchEffect(() => getWaitlist('any-customer-id'));
  watchEffect(() => createWaitlistItem('any-collection-id', 'any-product-id'))
  return {
    // TO BE IMPLEMENTED
  };
};

export default useWaitlist;