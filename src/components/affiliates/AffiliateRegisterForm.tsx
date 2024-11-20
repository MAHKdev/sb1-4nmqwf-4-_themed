"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSearchParams } from 'next/navigation'; // Use searchParams to access URL query parameters
import { User, Mail, Twitter, Hash } from 'lucide-react';

const AffiliateRegisterForm = () => {
    const supabase = createClientComponentClient();
    const searchParams = useSearchParams(); // Use searchParams to access URL query parameters

    // State variables for affiliate form
    const [affiliateName, setAffiliateName] = useState<string>("");
    const [affiliateEmail, setAffiliateEmail] = useState<string>("");
    const [twitterHandle, setTwitterHandle] = useState<string>("");
    const [followers, setFollowers] = useState<string>("");
    const [couponCode, setCouponCode] = useState<string>(""); // Manually set or automatically generated
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    // Fetch the query parameters from the URL using searchParams
    useEffect(() => {
        const name = searchParams.get('name');
        const email = searchParams.get('email');
        const twitterhandle = searchParams.get('twitterhandle');
        const followersCount = searchParams.get('followers');

        if (name) setAffiliateName(name);
        if (email) setAffiliateEmail(email);
        if (twitterhandle) setTwitterHandle(twitterhandle);
        if (followersCount) setFollowers(followersCount);

    }, [searchParams]); // Ensure the effect runs when searchParams change

    // Form validation
    const validateForm = () => {
        if (!affiliateName || affiliateName.trim() === "") {
            setErrorMessage("Name is required.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(affiliateEmail)) {
            setErrorMessage("Invalid email format.");
            return false;
        }

        if (!twitterHandle || twitterHandle.trim() === "" || twitterHandle.includes(" ")) {
            setErrorMessage("Invalid Twitter handle.");
            return false;
        }

        if (followers && isNaN(Number(followers))) {
            setErrorMessage("Followers count must be a number.");
            return false;
        }

        // Clear the error message if everything is valid
        setErrorMessage("");
        return true;
    };

    const handleAffiliateRegistration = async () => {
        if (!validateForm()) {
            return; // Prevent submission if validation fails
        }

        setIsSubmitting(true);

        try {
            // Step 1: Generate or set the coupon code (this could be generated automatically or manually)
            const generatedCouponCode = couponCode || generateCouponCode(); // Function to generate coupon

            // Step 2: Insert new affiliate and coupon code into Supabase
            const { data, error } = await supabase.from("affiliates").insert([
                {
                    name: affiliateName,
                    email: affiliateEmail,
                    twitter_handle: twitterHandle,
                    followers: parseInt(followers) || 0, // Store followers count if present
                    coupon_code: generatedCouponCode,
                },
            ]);

            if (error) {
                console.error("Error inserting affiliate:", error);
                setSuccessMessage("Failed to register affiliate.");
            } else {
                setSuccessMessage(`Affiliate ${affiliateName} registered successfully with coupon code ${generatedCouponCode}`);
            }
        } catch (error) {
            console.error("Error registering affiliate:", error);
            setSuccessMessage("An error occurred while registering the affiliate.");
        }

        setIsSubmitting(false);
    };

    // Optional: Generate a random coupon code (you can replace this with your own logic)
    const generateCouponCode = () => {
        return "COUPON_" + Math.random().toString(36).substr(2, 8).toUpperCase();
    };

    return (
        <div className="card bg-base-100 shadow-xl max-w-md">
            <div className="card-body items-center text-center" id='affiliateForm'>
                <h2 className="card-title">Ready to Get Started?</h2>
                <p>Provide a few more details that we can verify to create your account and set up your referral links.</p>

                <div className="affiliate-register-form flex flex-col gap-4 w-full max-w-md" >

                    <div >
                        <label className="input input-bordered flex items-center gap-2 w-full" htmlFor="affiliateName">
                            <User className="text-secondary" />
                            <input
                                type="text"
                                id="affiliateName"
                                value={affiliateName} 
                                className="grow"
                                placeholder="Dave"
                                onChange={(e) => setAffiliateName(e.target.value)}
                                required
                            />
                            {affiliateName && <div className="btn btn-ghost btn-sm btn-circle" onClick={() => setAffiliateName("")}>✕</div>}
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 w-full" htmlFor="affiliateEmail">
                            <Mail className="text-secondary" />
                            <input
                                type="email"
                                id="affiliateEmail"
                                className="grow"
                                placeholder="qR8b4@example.com"
                                value={affiliateEmail}
                                onChange={(e) => setAffiliateEmail(e.target.value)}
                                required
                            />
                            {affiliateEmail && <div className="btn btn-ghost btn-sm btn-circle" onClick={() => setAffiliateEmail("")}>✕</div>}
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 w-full" htmlFor="twitterHandle">
                            <Twitter className="text-secondary" />
                            <input
                                type="text"
                                id="twitterHandle"
                                className="grow"
                                placeholder="davthewave"
                                value={twitterHandle}
                                onChange={(e) => setTwitterHandle(e.target.value)}
                                required
                            />
                            {twitterHandle && <div className="btn btn-ghost btn-sm btn-circle" onClick={() => setTwitterHandle("")}>✕</div>}
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 w-full" htmlFor="followers">
                            <Hash className="text-secondary" />
                            <input
                                type="number"
                                id="followers"
                                className="grow"
                                placeholder="146.6k"
                                value={followers}
                                onChange={(e) => setFollowers(e.target.value)}
                            />
                            {followers && <div className="btn btn-ghost btn-sm btn-circle" onClick={() => setFollowers("")}>✕</div>}
                        </label>
                    </div>

                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                    <button
                        className="btn btn-primary"
                        onClick={handleAffiliateRegistration}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Registering..." : "Register Affiliate"}
                    </button>
                    <p className="text-xs text-left ">By clicking “Register affiliate” you agree to our Terms of Service and Privacy Policy.</p>

                    {successMessage && <p>{successMessage}</p>}

                </div>

            </div>

            <div className="mockup-code">
                <pre><code>your Link: kido.do/{affiliateName ? affiliateName.toUpperCase().replace(/\s/g, '') : 'DAVE'}</code></pre>
                <pre><code>_</code></pre>
                <pre><code>sets 90 day cookie</code></pre>
                <pre><code>links affiliate to user forever</code></pre>

            </div>

        </div>
    );
};

export default AffiliateRegisterForm;
