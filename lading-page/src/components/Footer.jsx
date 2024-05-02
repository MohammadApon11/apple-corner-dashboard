import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#F5F5F7]">
      <div className="max-w-[980px] mx-auto text-[12px] p-4 text-gray-600">
        <div className="flex flex-col gap-2  pb-5 border-b border-gray-400">
          <p>
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </p>
          <p>
            Available in the U.S. on{" "}
            <span className="font-semibold underline cursor-pointer ">
              apple.com,
            </span>{" "}
            in the Apple Store app, and at Apple Stores.
          </p>
          <p>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at{" "}
            <span className="font-semibold underline cursor-pointer">
              support.apple.com/kb/HT209218.
            </span>
          </p>
          <p>A subscription is required for Apple TV+.</p>
          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, and
            Apple Music.
          </p>
        </div>
        <div className="grid grid-cols-5 pt-5 pb-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">Shop And Learn</p>
              <p>Store</p>
              <p>Mac</p>
              <p>iPad</p>
              <p>iPhone</p>
              <p>Watch</p>
              <p>Vision</p>
              <p>AirPods</p>
              <p>TV & Home</p>
              <p>AirTag</p>
              <p>Accessories</p>
              <p>Gift Cards</p>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">Apple Wallet</p>
              <p>Wallet</p>
              <p>Apple Card</p>
              <p>Apple Pay</p>
              <p>iPhone</p>
              <p>Apple Cash</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">Account</p>
              <p>Manage Your Apple ID</p>
              <p>Apple Store Account</p>
              <p>iCloud.com</p>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">Apple Wallet</p>
              <p>Apple One</p>
              <p>Apple Music</p>
              <p>Apple Arcade</p>
              <p>Apple Fitness+</p>
              <p>Apple News+</p>
              <p>Apple Podcasts</p>
              <p>Apple Books</p>
              <p>App Store</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">Apple Store</p>
              <p>Find a Store</p>
              <p>Genius Bar</p>
              <p>Today at Apple</p>
              <p>Group Reservations</p>
              <p>Apple Camp</p>
              <p>Apple Store App</p>
              <p>Certified Refurbished</p>
              <p>Apple Trade In</p>
              <p>Financing</p>
              <p>Carrier Deals at Apple</p>
              <p>Order Status</p>
              <p>Shopping Help</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">For Business</p>
              <p>Apple and Business</p>
              <p>Shop for Business</p>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">For Education</p>
              <p>Apple and Education</p>
              <p>Shop for K-12</p>
              <p>Shop for College</p>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">For Healthcare</p>
              <p>Apple in Healthcare</p>
              <p>Health on Apple Watch</p>
              <p>Health Records on iPhone</p>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">For Government</p>
              <p>Shop for Government</p>
              <p>Shop for Veterans and Military</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">Apple Values</p>
              <p>Accessibility</p>
              <p>Education</p>
              <p>Environment</p>
              <p>Inclusion and Diversity</p>
              <p>Privacy</p>
              <p>Racial Equity and Justice</p>
              <p>Supply Chain</p>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <p className="font-bold text-primary">About Apple</p>
              <p>Newsroom</p>
              <p>Apple Leadership</p>
              <p>Career Opportunities</p>
              <p>Investors</p>
              <p>Ethics & Compliance</p>
              <p>Events</p>
              <p>Contact Apple</p>
            </div>
          </div>
        </div>
        <p className="pb-5 border-b">
          More ways to shop:{" "}
          <span className="underline cursor-pointer text-[#0066CC]">
            Find an Apple Store
          </span>{" "}
          or{" "}
          <span className="underline cursor-pointer text-[#0066CC]">
            other retailer
          </span>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
        <div className="flex items-center justify-between pt-5">
          <p>Copyright © {currentYear} Apple Inc. All rights reserved.</p>
          <p>
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
          </p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
