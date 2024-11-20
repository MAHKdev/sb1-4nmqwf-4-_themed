"use client";

import { useState, useEffect } from "react";
import apiClient from "@/lib/axios";
import config from "@/config";
import { getCookie } from "cookies-next"; // Import cookies-next to manage cookies
import useStore from '@/store/zustandStore'; // Zustand store



// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// Users must be authenticated. It will prefill the Checkout data with their email and/or credit card (if any)
// You can also change the mode to "subscription" if you want to create a subscription instead of a one-time payment
const ButtonCheckout = ({ priceId, mode = "payment", customText = '', icon = true, customClass = '', ...props }) => {
  const { appData, middlewareSetAppData, middlewareReadAppData } = useStore();

  const [isLoading, setIsLoading] = useState(false);
  const [affiliateCouponId, setAffiliateCouponId] = useState(null);

  //Effect to handle the affiliate cookie entirely.
  const fetchCookieAffiliateId = async () => {
    const affiliateIdFromCookie = getCookie("affiliateId");
    const affiliateIdFromAppData = appData?.user?.affiliateID;

    // Only fetch affiliate details if affiliateId is found in cookie or appData
    if (affiliateIdFromCookie || affiliateIdFromAppData) {
      const getAffiliateCouponId = async () => {
        // Fetch affiliate details from the server
        try {
          const affiliateData = await fetchAffiliateDetails(); //apiClient.post("/stripe/create-checkout", paymentData);


          if (affiliateData && affiliateData.coupon_id) {
            setAffiliateCouponId(affiliateData.coupon_id); // Store the affiliate's couponId
          }

        } catch (error) {
          console.error('Error fetching affiliate details:', error);
        }
      };

      getAffiliateCouponId();
    }
  };


  const handlePayment = async () => {
    setIsLoading(true);
    try {
      fetchCookieAffiliateId()
    } catch (error) {
      console.error('Error fetching affiliate details:', error);
    }

    try {
      const paymentData = {
        priceId,
        mode,
        successUrl: window.location.href,
        cancelUrl: window.location.href,
      };

      if (affiliateCouponId) {
        paymentData.couponId = affiliateCouponId;
      } else {
        if (config.stripe.standardCouponId
          && config.stripe.standardCouponId !== ""
          && config.stripe.standardCouponId !== null
          && config.stripe.standardCouponId !== undefined) {
          paymentData.couponId = config.stripe.standardCouponId;
        }
      }

      // paymentData.couponId = "EG54kKxQ";  //for TESTING the welcome 20 only.

      const res = await apiClient.post("/stripe/create-checkout", paymentData);

      window.location.href = res.url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className={`btn btn-primary group ${customClass}`}
      onClick={() => handlePayment()}
      {...props}
    >
      {icon &&
        (isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <svg
            className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
            viewBox="0 0 375 509"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
          </svg>
        ))}
      {customText !== '' ? customText : `select ${config?.appName}`}
    </button>
  );
};

export default ButtonCheckout;