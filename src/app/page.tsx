"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Marquee from "../../components/marquee";
import StatsCounter from "../../components/StatsCounter";
const testimonials = [
  {
    name: "Jerome Bell",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Albert Flores",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Guy Hawkins",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Albert Flores",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Guy Hawkins",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Albert Flores",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Guy Hawkins",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Albert Flores",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
  {
    name: "Guy Hawkins",
    title: "Chief Architect, AXA Japan",
    review:
      "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
    rating: 5,
  },
];
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
    <div className="bg-[url(/bg.png)] bg-cover bg-center h-screen font-sans">
      <div className="flex justify-center items-center fixed top-10 w-full z-[999999]">
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
        <h1 className="mt-40 text-white font-extrabold text-[56px] leading-[70px]">
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
        <h1 className="mt-10 text-black font-extrabold text-[56px] leading-[70px]">
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
        <h1 className="mt-40 text-white font-extrabold text-[56px] leading-[70px]">
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
      <section className="flex flex-col items-center justify-center mt-[202px]">
        <div className="md:w-[1128px]">
          <div className="flex items-center justify-between  w-full ">
            <h1 className=" text-black font-extrabold text-[56px]">
              What our clients say
            </h1>
            <button className=" flex items-center gap-2 mt-5 bg-[#0C71C3] text-white  px-6 py-3 rounded-full text-lg font-semibold shadow-lg  transition">
              VIEW ALL REVIEWS
            </button>
          </div>
          <div className="relative mt-[60px]">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              // pagination={{ clickable: true }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="px-4 custom-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="p-4">
                  <div className="border rounded-xl shadow-lg p-6 w-[350px]  border-[#E0E0E0] h-[466px] bg-white">
                    <h3 className="text-[24px] font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-500 text-base">
                      {testimonial.title}
                    </p>
                    <p className="text-[#444444] text-lg mt-3">
                      {testimonial.review}
                    </p>
                    <div className="text-yellow-400 flex justify-between mt-10 space-x-1">
                      <Image
                        src={"/kama2.svg"}
                        alt="star"
                        width={100}
                        height={100}
                      />
                      <Image
                        src={"/star.svg"}
                        alt="star"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute right-0 flex items-center gap-4 mt-10">
              <button className="custom-prev  w-[50px] h-[50px] flex justify-center items-center bg-white border border-[#8D8D8D] text-white p-2 rounded-full shadow-lg">
                <Image
                  src="/arrow-wiper.svg"
                  alt="arrow"
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              </button>
              <button className="custom-next   w-[50px] h-[50px] flex justify-center items-center bg-white border border-[#8D8D8D] text-white p-2 rounded-full shadow-lg">
                <Image
                  src="/arrow-wiper.svg"
                  alt="arrow"
                  className="transform rotate-180 cursor-pointer"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-[202px]">
        <div className="md:w-[1128px]">
          <div className="flex flex-col    w-full ">
            <h1 className=" text-black font-extrabold text-[56px]">
              Our Clients
            </h1>
            <p className="text-[20px] text-gray-600 mt-6 max-w-[770px] text-justify tracking-tight">
              As a multinational consultancy, we work with enterprises of all
              sizes, from start-ups to global organizations, not-for-profits to
              government bodies. We are committed to delivering excellent
              outcomes for each client.
            </p>
          </div>
          <div className="storybook-fix relative flex w-full max-w-[1100px] gap-4 md:gap-10 mt-20 items-center justify-center overflow-hidden rounded-md  bg-background flex-col">
            <Marquee>
              <Image
                src="/logo/1.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/2.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/3.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px] "
                width={150}
                height={150}
              />
              <Image
                src="/logo/4.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/5.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/6.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px] "
                width={150}
                height={150}
              />
              <Image
                src="/logo/7.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/8.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/9.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />{" "}
              <Image
                src="/logo/10.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />{" "}
              <Image
                src="/logo/11.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/12.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
            </Marquee>
            <Marquee reverse>
              <Image
                src="/logo/1.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/2.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/3.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px] "
                width={150}
                height={150}
              />
              <Image
                src="/logo/4.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/5.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/6.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px] "
                width={150}
                height={150}
              />
              <Image
                src="/logo/7.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/8.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/9.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />{" "}
              <Image
                src="/logo/10.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />{" "}
              <Image
                src="/logo/11.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
              <Image
                src="/logo/12.png"
                alt="Company logo"
                className=" object-contain shadow w-[100px] md:w-[150px]"
                width={150}
                height={150}
              />
            </Marquee>
          </div>
        </div>
      </section>
      <section className="mt-[202px]">
        <div className="bg-[url(/num.png)] bg-contain bg-center h-[900px]">
          <div>
            <h1 className=" text-white text-center pt-40 font-extrabold text-[56px]">
              Our Numbers Speak
            </h1>
          </div>
          <main>
            <StatsCounter />
          </main>
        </div>
      </section>
      <section className=" flex justify-center items-center flex-col bg-[#FAFAFA]">
        <div className="md:w-[1128px] mt-40">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[56px]">Our Team: Our People</p>
            <p className="text-[20px] leading-[36px] text-[#393939]">
              CC&C harnesses the collective power of global expertise in
              architecture, data, digital transformation, and modern delivery
              paradigms to redefine the landscape of IT consulting. Our team,
              composed of consultant experts from around the world, brings deep,
              cross-domain experience to the forefront of every engagement
            </p>
            <p className="text-[20px] leading-[36px] text-[#393939]">
              Our team have a 20+ year track record of delivering tailored,
              impactful solutions that drive real, measurable outcomes.
            </p>
            <p className="text-[20px] leading-[36px] text-[#393939]">
              Whether its through strategic consultancy, the implementation of
              advanced IT strategies, or guiding digital transformation efforts,
              our focus remains unwavering: to empower our clients with the
              tools and knowledge necessary for enduring success in a
              digital-first world.
            </p>
          </div>
        </div>
        <div className="md:w-[1128px] py-20">
          <div className="relative">
            <Image
              src="/last.png"
              alt="background"
              className="w-[700px]"
              layout="responsive"
              width={700}
              height={60}
            />
          </div>
          <div className="absolute -mt-[200px] px-[50px]">
            <p className="text-[24px] text-white">
              Helping Organisations Excel in Architecture over 20 years
            </p>
            <p className="text-[36px] text-white font-bold">
              Learn more about our services
            </p>
            <button className="mt-[24px] flex items-center gap-2 bg-white text-[#0C71C3]  w-[202px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
              <span>
                <Image
                  className="ml-4 "
                  src="/arrow2.svg"
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
      <section className="bg-[#0D2F4B]">
        <div>
          <div className="flex justify-center items-center p-20 gap-20 py-[50px]">
            <div className="flex flex-col gap-4">
              <Image
                src="/logo.png"
                alt="img"
                width={90}
                height={90}
                className="w-[90px] h-[90px]"
              />
              <p className="w-[500px] text-[#AAAAAA] text-[18px]">
                CC&C is a global Strategy and Architecture consulting and
                training organization, and a leader in Enterprise Architecture,
                Digital Transformation, and IT Transformation. We passionately
                believe in enhancing customers’ competence and self-sufficiency
                in the unique space that links business strategy with IT value
                delivery.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-6 text-[#AAAAAA] text-[18px]">
              <a href="#">Home</a>
              <a href="#">Why us</a>
              <a href="#">Banking BAIN</a>
              <a href="#">Architecture & tools</a>
            </div>
            <div className="flex flex-col gap-4 text-[#AAAAAA] text-[18px]">
              <a href="#">Training</a>
              <a href="#">Enquire now</a>
              <a href="#">Contact us</a>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/insta.svg"
                alt="instragram"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
              <Image
                src="/fb.svg"
                alt="facebook"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
            </div>
          </div>
          <hr className="mx-[420px] border border-[#195586]" />
          <div className="flex justify-center items-center gap-[450px] py-10">
            <p className="text-[#AAAAAA] text-[18px]">
              Copyright@2025 All rights reserved
            </p>
            <div className="flex gap-10">
              <p className="text-[#AAAAAA] text-[18px]">Privacy policy</p>
              <p className="text-[#AAAAAA] text-[18px]">Terms and conditions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
