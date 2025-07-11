"use client";

import { useEffect } from "react";

export default function CookieConsent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/tarteaucitronjs@latest/tarteaucitron.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      tarteaucitron.init({
        privacyUrl: "/privacy" /* Privacy policy url */,
        bodyPosition:
          "bottom" /* or top to bring it as first element for accessibility */,

        hashtag: "#tarteaucitron" /* Open the panel with this hashtag */,
        cookieName: "tarteaucitron" /* Cookie name */,

        orientation:
          "middle" /* Banner position (top - bottom - middle - popup) */,

        groupServices: false /* Group services by category */,
        showDetailsOnClick: true /* Click to expand the description */,
        serviceDefaultState: "wait" /* Default state (true - wait - false) */,

        showAlertSmall: false /* Show the small banner on bottom right */,
        cookieslist: false /* Show the cookie list */,

        showIcon: true /* Show cookie icon to manage cookies */,
        // "iconSrc": "", /* Optional: URL or base64 encoded image */
        iconPosition:
          "BottomRight" /* Position of the icon between BottomRight, BottomLeft, TopRight and TopLeft */,

        adblocker: false /* Show a Warning if an adblocker is detected */,

        DenyAllCta: true /* Show the deny all button */,
        AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
        highPrivacy: true /* HIGHLY RECOMMANDED Disable auto consent */,
        alwaysNeedConsent:
          false /* Ask the consent for "Privacy by design" services */,

        handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,

        removeCredit: false /* Remove credit link */,
        moreInfoLink: true /* Show more info link */,
        useExternalCss:
          false /* If false, the tarteaucitron.css file will be loaded */,
        useExternalJs:
          false /* If false, the tarteaucitron.services.js file will be loaded */,

        // "cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for subdomain website */

        readmoreLink:
          "" /* Change the default readmore link pointing to tarteaucitron.io */,

        mandatory: true /* Show a message about mandatory cookies */,
        mandatoryCta:
          true /* Show the disabled accept button when mandatory on */,

        // "customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */

        googleConsentMode:
          true /* Enable Google Consent Mode v2 for Google ads and GA4 */,
        bingConsentMode:
          true /* Enable Bing Consent Mode for Clarity and Bing Ads */,
        softConsentMode:
          false /* Soft consent mode (consent is required to load the services) */,

        dataLayer:
          false /* Send an event to dataLayer with the services status */,
        serverSide:
          false /* Server side only, tags are not loaded client side */,

        partnersList:
          false /* Details the number of partners on the popup and middle banner */,
      });

      // Ajout de Google Analytics via GTM
      // @ts-ignore
      tarteaucitron.user.googletagmanagerId = "GTM-5FMD5G9K"; // ton ID
      // @ts-ignore
      tarteaucitron.job = tarteaucitron.job || [];
      // @ts-ignore
      tarteaucitron.job.push("googletagmanager");
    };

    document.head.appendChild(script);
  }, []);

  return null;
}
