"use client";
import { useEffect } from "react";
import { setCookie } from "cookies-next"; // Set cookies on the client side
import { useSearchParams } from "next/navigation"; // Use useSearchParams for query params in Next.js App Router
import { toast } from "react-hot-toast";

const AffiliateRegister = () => {
  const searchParams = useSearchParams(); // Access query parameters

  useEffect(() => {
    // Extract the 'affiliateID' from the query parameters
    const affiliateID = searchParams.get("affiliateID"); // Looks for ?affiliateID=AFFILIATE123

    // If an affiliate ID is found, store it in cookies and Supabase app data
    if (affiliateID) {
      // Set the affiliate ID in cookies with a 90-day expiry
      setCookie("affiliateId", affiliateID, {
        maxAge: 90 * 24 * 60 * 60, // 90 days expiration
      });

      // Display a success message using toast
      toast.success(`Affiliate ID ${affiliateID} found and stored in cookies.`, { duration: 3000 });
    }
  }, [searchParams]);

  return null; // This is a background task, no UI needed
};

export default AffiliateRegister;
