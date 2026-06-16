

import { Link } from "react-router-dom";

const QuickAbout = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGES */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[26px] border border-[#d7e3e7]">
              <img
                src="https://lh3.googleusercontent.com/u/0/d/19bHn_GcSYq7DivzhavwHjia3cw0B-P2Z"
                alt="Women working"
                className="w-full h-[340px] sm:h-[420px] object-cover"
              />
            </div>

            {/* FLOATING IMAGE */}
            <div className="absolute -bottom-5 right-4 sm:right-6 overflow-hidden rounded-[20px] border-[6px] border-[#fcfcfc] shadow-md">
              <img
                src="/images/about-image-2.png"
                alt="Handmade products"
                className="w-[120px] sm:w-[170px] h-[150px] sm:h-[210px] object-cover"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl">

            {/* LABEL */}
            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] mb-5 uppercase">
              About Aamdani
            </span>

            {/* HEADING */}
            <h2 className="text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Creating Opportunities
              <br />
              For Women Through
              <br />
              Handmade Businesses
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
              Aamdani is an initiative focused on supporting local women who
              run homemade businesses by helping them showcase products,
              share stories, and reach a wider audience.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
              Through community support and meaningful opportunities,
              we aim to encourage confidence, independence, and
              sustainable livelihoods.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid sm:grid-cols-2 gap-4 mt-7">

              <div className="p-5 rounded-[22px] border border-[#d7e3e7] bg-white">
                <h3 className="text-lg font-semibold text-[#4a4a4a]">
                  100% Handmade
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#7b8790]">
                  Products crafted with care by local women.
                </p>
              </div>

              <div className="p-5 rounded-[22px] border border-[#d7e3e7] bg-white">
                <h3 className="text-lg font-semibold text-[#4a4a4a]">
                  Community Driven
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#7b8790]">
                  Supporting sustainable growth and opportunities.
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-7">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#5A97A9] text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                Know More About Us

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 7H17V16"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QuickAbout;