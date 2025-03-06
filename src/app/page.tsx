"use client";
import Image from "next/image";
const cardData = [
  {
    title: "Banking Architecture",
    description:
      "We work in close partnership with leading industry bodies to develop the deep expertise and tools that can radically simplify and modernize your banking landscape.",
    icon: "/build.svg",
  },
  {
    title: "BIAN Implementation",
    description:
      "Our team have the expertise to take BIAN from a reference architecture to detailed design and development, unlocking it’s potential and delivering tangible benefits to your organization",
    icon: "/cloud.svg",
  },
  {
    title: "Digital Transformation",
    description:
      "The rapidly growing gap between customer expectations and legacy capabilities has made our disciplined application of architecture across business, application and data crucial to success",
    icon: "/integration.svg",
  },
];
const cardData2 = [
  {
    title: "Banking Architecture",
    description:
      "We work in close partnership with leading industry bodies to develop the deep expertise and tools that can radically simplify and modernize your banking landscape.",
    icon: "/build.svg",
  },
  {
    title: "BIAN Implementation",
    description:
      "Our team have the expertise to take BIAN from a reference architecture to detailed design and development, unlocking it’s potential and delivering tangible benefits to your organization",
    icon: "/cloud.svg",
  },
  {
    title: "Digital Transformation",
    description:
      "The rapidly growing gap between customer expectations and legacy capabilities has made our disciplined application of architecture across business, application and data crucial to success",
    icon: "/integration.svg",
  },
];
export default function Home() {
  return (
    <div className="bg-[url(/bg.png)] bg-cover bg-center h-screen">
      <div className="flex justify-center items-center fixed top-10 w-full">
        <div className="w-[1128px] h-[88px] relative bg-white  rounded-[100px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="h-6 left-[258px] top-[32px] absolute inline-flex justify-start items-center gap-8">
            <div className="relative justify-start text-[#393939] text-lg font-normal  leading-normal">
              Why us
            </div>
            <div className="relative justify-start text-[#393939] text-lg font-normal  leading-normal">
              Banking & BIAN
            </div>
            <div className="relative justify-start text-[#393939] text-lg font-normal  leading-normal">
              Architecture & tools
            </div>
            <div className="relative justify-start text-[#393939] text-lg font-normal  leading-normal">
              Training
            </div>
            <div className="relative justify-start text-[#393939] text-lg font-normal  leading-normal">
              Contact us
            </div>
          </div>
          <div className="h-11 px-5 py-3 left-[943px] top-[22px] absolute bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
            <div className="relative justify-start text-white text-base font-semibold  leading-tight">
              GET IN TOUCH
            </div>
          </div>
          <Image
            className="w-[90.49px] h-16 left-[40px] top-[12px] absolute"
            src="/logo.png"
            alt="Company Logo"
            width={90.49}
            height={64}
          />
        </div>
      </div>

      <section className="flex flex-col items-center  pt-[320px]  justify-center text-center px-6 py-20">
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">
          Powering Digital Transformation <br />
          <span className="text-gray-900">
            Through World-Class Architecture
          </span>
        </h1>
        <p className="mt-10 text-gray-600 max-w-[787px] text-[24px] ">
          Architecture by Design Consultancy Skills Transformation CC&C
          Solutions has been providing industry-leading architecture consulting.
        </p>
        <button className="mt-[48px] flex items-center gap-2 bg-[#0C71C3] text-white  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
          <span>
            <Image
              className="ml-4 "
              src="/arrow.svg"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </span>{" "}
          TALK TO US
        </button>
      </section>
      <section className="flex justify-center items-center mt-[290px]">
        <div className="flex items-center gap-40">
          <div>
            <Image
              src="/team.png"
              className="rounded-3xl"
              alt="Company Logo"
              width={524}
              height={572}
            />
          </div>
          <div className="w-[572px]">
            <h1 className="text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
              Architecture consulting & skills
            </h1>
            <p className="text-[20px] text-gray-600 mt-6 text-justify tracking-tight">
              CC&C Solutions has been providing industry-leading architecture
              consulting, training, and digital transformation delivery services
              for some of the most successful global organisations for over 20
              years. Bringing together the most talented leaders and experts in
              the fields of Financial Services, Insurance, Telecommunications,
              Retail and Health we have an unparalleled record for delighting
              and making our customers successful
            </p>
            <button className="mt-[32px] flex items-center gap-2 bg-[#0C71C3] text-white  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
              <span>
                <Image
                  className="ml-4 "
                  src="/arrow.svg"
                  alt="Company Logo"
                  width={40}
                  height={40}
                />
              </span>{" "}
              TALK TO US
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#0C71C3] flex flex-col justify-center items-center mt-[160px] pb-[120px]">
        <h1 className="mt-16 text-white font-extrabold text-[56px] leading-[70px]">
          Accelerating Your Banking Transformation
        </h1>
        <p className="text-[20px] mt-6 max-w-[1440px] text-center text-[#EEEEEE]  leading-[50px]">
          CC&C Solutions has been providing industry-leading architecture
          consulting, training, and digital transformation delivery services for
          some of the most successful global organisations for over 20 years.
          Bringing together the most talented leaders and experts in the fields
          of Financial Services, Insurance, Telecommunications, Retail and
          Health we have an unparalleled record for delighting and making our
          customers successful
        </p>
        <div className="flex justify-center gap-6 mt-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group w-[360px] h-[559px] relative bg-[#0c71c3] rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px] absolute bg-[#0d9eff] group-hover:bg-[#0C71C3] rounded-xl inline-flex justify-center items-center">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <div className="w-[203px] left-[24px] top-[128px] absolute text-[32px] font-extrabold leading-10 text-[#eeeeee] group-hover:text-black transition-all duration-300">
                {card.title}
              </div>

              {/* Description */}
              <div className="w-[302px] left-[24px] top-[224px] absolute text-xl leading-loose text-[#e0e0e0] group-hover:text-black transition-all duration-300">
                {card.description}
              </div>

              {/* Learn More Button */}
              <button
                className="absolute bottom-0 right-0 px-5 py-2 bg-[#0d9eff] text-white rounded-br-3xl rounded-tl-3xl text-sm font-semibold flex items-center gap-2 transition-all duration-300
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LEARN MORE
                <span>
                  <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#F5F5F5] flex flex-col justify-center items-center pt-[160px] pb-[120px]">
        <h1 className="mt-16 text-black font-extrabold text-[56px] leading-[70px]">
          Accelerating Your Banking Transformation
        </h1>
        <p className="text-[20px] mt-6 max-w-[1440px] text-center text-black  leading-[50px]">
          CC&C Solutions has been providing industry-leading architecture
          consulting, training, and digital transformation delivery services for
          some of the most successful global organisations for over 20 years.
          Bringing together the most talented leaders and experts in the fields
          of Financial Services, Insurance, Telecommunications, Retail and
          Health we have an unparalleled record for delighting and making our
          customers successful
        </p>
        <div className="flex justify-center gap-6 mt-10">
          {cardData2.map((card, index) => (
            <div
              key={index}
              className="group w-[360px] h-[559px] relative bg-white rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hover:bg-[#0c71c3]"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px] absolute bg-[#0c71c3] group-hover:bg-[#0D9EFF] rounded-xl inline-flex justify-center items-center">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <div className="w-[203px] left-[24px] top-[128px] absolute text-[32px] font-extrabold leading-10 text-black group-hover:text-[#e0e0e0] transition-all duration-300">
                {card.title}
              </div>

              {/* Description */}
              <div className="w-[302px] left-[24px] top-[224px] absolute text-xl leading-loose text-black group-hover:text-[#e0e0e0] transition-all duration-300">
                {card.description}
              </div>

              {/* Learn More Button */}
              <button
                className="absolute bottom-0 right-0 px-5 py-2 bg-[#0d9eff] text-white rounded-br-3xl rounded-tl-3xl text-sm font-semibold flex items-center gap-2 transition-all duration-300
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LEARN MORE
                <span>
                  <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center  mt-[120px]">
        <div className="flex items-center gap-40">
          <div>
            <Image
              src="/lap.png"
              className="rounded-3xl"
              alt="Company Logo"
              width={524}
              height={572}
            />
          </div>
          <div className="w-[672px] flex flex-col items-center">
            <h1 className="text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
              Helping Organisations Excel in Architecture for Over 20 Years
            </h1>
            <p className="text-[20px] text-gray-600 mt-6 text-justify tracking-tight">
              As the pace of innovation, customer expectations and competition
              continue to increase, the difference between leading and lagging
              lies in the mastery of business and enterprise architecture. CC&C
              Solutions stands at the forefront of this divide, offering over
              two decades of specialized experience in the Financial Services,
              Insurance, Telecommunications, Retail, and Health industries. Our
              commitment is not just to consult but to transform your
              operational capabilities through disciplined best practices
            </p>
            <div className="relative w-[350px]">
              <div className=" border-2 p-2 relative border-[#ffc40e] inline-flex justify-center items-center mt-40 overflow-hidden">
                <div className="h-20  bg-[#ffc40e] px-8 inline-flex justify-center items-center gap-2.5">
                  <div className="relative justify-start text-neutral-800 text-[32px] font-extrabold leading-10">
                    over 20+ years
                  </div>
                </div>
              </div>
              <Image
                src="/kama.svg"
                className="absolute top-10 -right-16 -z-10"
                alt="Company Logo"
                width={180}
                height={180}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0C71C3] flex flex-col justify-center items-center mt-[160px] pb-[120px]">
        <h1 className="mt-16 text-white font-extrabold text-[56px] leading-[70px]">
          Accelerating Your Banking Transformation
        </h1>
        <p className="text-[20px] mt-6 max-w-[1440px] text-center text-[#EEEEEE]  leading-[50px]">
          CC&C Solutions has been providing industry-leading architecture
          consulting, training, and digital transformation delivery services for
          some of the most successful global organisations for over 20 years.
          Bringing together the most talented leaders and experts in the fields
          of Financial Services, Insurance, Telecommunications, Retail and
          Health we have an unparalleled record for delighting and making our
          customers successful
        </p>
        <div className="flex justify-center gap-6 mt-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group w-[360px] h-[559px] relative bg-[#0c71c3] rounded-[20px] border border-[#eeeeee] overflow-hidden transition-all duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="w-[67.2px] h-16 left-[24px] top-[24px] absolute bg-[#0d9eff] group-hover:bg-[#0C71C3] rounded-xl inline-flex justify-center items-center">
                <Image src={card.icon} alt="Icon" width={40} height={40} />
              </div>

              {/* Title */}
              <div className="w-[203px] left-[24px] top-[128px] absolute text-[32px] font-extrabold leading-10 text-[#eeeeee] group-hover:text-black transition-all duration-300">
                {card.title}
              </div>

              {/* Description */}
              <div className="w-[302px] left-[24px] top-[224px] absolute text-xl leading-loose text-[#e0e0e0] group-hover:text-black transition-all duration-300">
                {card.description}
              </div>

              {/* Learn More Button */}
              <button
                className="absolute bottom-0 right-0 px-5 py-2 bg-[#0d9eff] text-white rounded-br-3xl rounded-tl-3xl text-sm font-semibold flex items-center gap-2 transition-all duration-300
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LEARN MORE
                <span>
                  <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
