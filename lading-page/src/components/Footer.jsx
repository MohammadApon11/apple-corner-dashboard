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
            <a href="#" className="font-semibold underline cursor-pointer ">
              apple.com,
            </a>{" "}
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
            <a href="#" className="font-semibold underline cursor-pointer">
              support.apple.com/kb/HT209218.
            </a>
          </p>
          <p>A subscription is required for Apple TV+.</p>
          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, and
            Apple Music.
          </p>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 pt-5 pb-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                Shop And Learn
              </a>
              <a href="#">Store</a>
              <a href="#">Mac</a>
              <a href="#">iPad</a>
              <a href="#">iPhone</a>
              <a href="#">Watch</a>
              <a href="#">Vision</a>
              <a href="#">AirPods</a>
              <a href="#">TV & Home</a>
              <a href="#">AirTag</a>
              <a href="#">Accessories</a>
              <a href="#">Gift Cards</a>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                Apple Wallet
              </a>
              <a href="#">Wallet</a>
              <a href="#">Apple Card</a>
              <a href="#">Apple Pay</a>
              <a href="#">iPhone</a>
              <a href="#">Apple Cash</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                Account
              </a>
              <a href="#">Manage Your Apple ID</a>
              <a href="#">Apple Store Account</a>
              <a href="#">iCloud.com</a>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                Apple Wallet
              </a>
              <a href="#">Apple One</a>
              <a href="#">Apple Music</a>
              <a href="#">Apple Arcade</a>
              <a href="#">Apple Fitness+</a>
              <a href="#">Apple News+</a>
              <a href="#">Apple Podcasts</a>
              <a href="#">Apple Books</a>
              <a href="#">App Store</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                Apple Store
              </a>
              <a href="#">Find a Store</a>
              <a href="#">Genius Bar</a>
              <a href="#">Today at Apple</a>
              <a href="#">Group Reservations</a>
              <a href="#">Apple Camp</a>
              <a href="#">Apple Store App</a>
              <a href="#">Certified Refurbished</a>
              <a href="#">Apple Trade In</a>
              <a href="#">Financing</a>
              <a href="#">Carrier Deals at Apple</a>
              <a href="#">Order Status</a>
              <a href="#">Shopping Help</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                For Business
              </a>
              <a href="#">Apple and Business</a>
              <a href="#">Shop for Business</a>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                For Education
              </a>
              <a href="#">Apple and Education</a>
              <a href="#">Shop for K-12</a>
              <a href="#">Shop for College</a>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                For Healthcare
              </a>
              <a href="#">Apple in Healthcare</a>
              <a href="#">Health on Apple Watch</a>
              <a href="#">Health Records on iPhone</a>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                For Government
              </a>
              <a href="#">Shop for Government</a>
              <a href="#">Shop for Veterans and Military</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                Apple Values
              </a>
              <a href="#">Accessibility</a>
              <a href="#">Education</a>
              <a href="#">Environment</a>
              <a href="#">Inclusion and Diversity</a>
              <a href="#">Privacy</a>
              <a href="#">Racial Equity and Justice</a>
              <a href="#">Supply Chain</a>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-600">
              <a href="#" className="font-bold text-primary">
                About Apple
              </a>
              <a href="#">Newsroom</a>
              <a href="#">Apple Leadership</a>
              <a href="#">Career Opportunities</a>
              <a href="#">Investors</a>
              <a href="#">Ethics & Compliance</a>
              <a href="#">Events</a>
              <a href="#">Contact Apple</a>
            </div>
          </div>
        </div>
        <a href="#" className="pb-5 border-b">
          More ways to shop:{" "}
          <span className="underline cursor-pointer text-[#0066CC]">
            Find an Apple Store
          </span>{" "}
          or{" "}
          <span className="underline cursor-pointer text-[#0066CC]">
            other retailer
          </span>{" "}
          near you. Or call 1-800-MY-APPLE.
        </a>
        <div className="flex items-center justify-between pt-5">
          <a href="#">
            Copyright © {currentYear} Apple Inc. All rights reserved.
          </a>
          <a href="#">
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
          </a>
          <a href="#">United States</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
