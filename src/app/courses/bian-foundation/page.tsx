"use client"; // This is a client component 👈🏽

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Page: React.FC = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };
  const faq = [
    {
      question: "Course Objective",
      answer:
        "BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. Certification addresses educational Levels 1 and 2 (according to Bloom’s Revised Taxonomy):",
      list1: `   Remembering (Bloom Level 1): The delegate will be able
                      to:Remember factual information including lists,Recognize
                      symptoms, settings and patterns,Recall how to perform an
                      existing process, and Identify strategies for retaining
                      information.`,
      list2: ` Understanding (Bloom Level 2): The delegate will be able
                      to:Summarize features,Classifythe different BIAN
                      artifacts,Clarifyby creating Business Scenarios, and
                      Predict a correct response or situation.`,
    },
    {
      question: "Learning Objectives",
      answer:
        "BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. Certification addresses educational Levels 1 and 2 (according to Bloom’s Revised Taxonomy):",
      list1: `   Remembering (Bloom Level 1): The delegate will be able
                      to:Remember factual information including lists,Recognize
                      symptoms, settings and patterns,Recall how to perform an
                      existing process, and Identify strategies for retaining
                      information.`,
      list2: ` Understanding (Bloom Level 2): The delegate will be able
                      to:Summarize features,Classifythe different BIAN
                      artifacts,Clarifyby creating Business Scenarios, and
                      Predict a correct response or situation.`,
    },
    {
      question: "Who should attend",
      answer:
        "BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. Certification addresses educational Levels 1 and 2 (according to Bloom’s Revised Taxonomy):",
      list1: `   Remembering (Bloom Level 1): The delegate will be able
                      to:Remember factual information including lists,Recognize
                      symptoms, settings and patterns,Recall how to perform an
                      existing process, and Identify strategies for retaining
                      information.`,
      list2: ` Understanding (Bloom Level 2): The delegate will be able
                      to:Summarize features,Classifythe different BIAN
                      artifacts,Clarifyby creating Business Scenarios, and
                      Predict a correct response or situation.`,
    },
    {
      question: "Prerequisites",
      answer:
        "BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. Certification addresses educational Levels 1 and 2 (according to Bloom’s Revised Taxonomy):",
      list1: `   Remembering (Bloom Level 1): The delegate will be able
                      to:Remember factual information including lists,Recognize
                      symptoms, settings and patterns,Recall how to perform an
                      existing process, and Identify strategies for retaining
                      information.`,
      list2: ` Understanding (Bloom Level 2): The delegate will be able
                      to:Summarize features,Classifythe different BIAN
                      artifacts,Clarifyby creating Business Scenarios, and
                      Predict a correct response or situation.`,
    },
    {
      question: "Topics Covered",
      answer:
        "BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. Certification addresses educational Levels 1 and 2 (according to Bloom’s Revised Taxonomy):",
      list1: `   Remembering (Bloom Level 1): The delegate will be able
                      to:Remember factual information including lists,Recognize
                      symptoms, settings and patterns,Recall how to perform an
                      existing process, and Identify strategies for retaining
                      information.`,
      list2: ` Understanding (Bloom Level 2): The delegate will be able
                      to:Summarize features,Classifythe different BIAN
                      artifacts,Clarifyby creating Business Scenarios, and
                      Predict a correct response or situation.`,
    },
  ];
  const pathname = usePathname(); // Get current route

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className="bg-[url(/courses/bian-foundation/hero.png)] bg-cover bg-right-bottom h-[870px] font-sans">
      <div
        className={`flex justify-center items-center fixed  w-full z-[999999] transition-transform duration-300 ${
          isVisible ? " block" : "hidden"
        }`}
      >
        <div className="w-full mx-auto flex justify-center gap-20 items-center h-[88px] relative bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
          <Image
            className="w-[90.49px] h-16"
            src="/logo.png"
            alt="Company Logo"
            width={90.49}
            height={64}
          />

          <div className="h-6 inline-flex items-center gap-8">
            {[
              { href: "/", label: "Partners" },
              { href: "#", label: "Consulting" },
              { href: "/course", label: "BIAN" },
              { href: "#", label: "Partners" },
              { href: "#", label: "Contact" },
              { href: "#", label: "About" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`relative justify-start text-lg font-normal leading-normal ${
                    pathname === item.href ? "text-[#0c71c3]" : "text-black"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <div className="h-11 px-5 py-3 bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
            <div className="relative justify-start text-white text-base font-semibold leading-tight">
              GET IN TOUCH
            </div>
          </div>
        </div>
      </div>
      <section
        data-aos="fade-up"
        className="flex flex-col items-center  pt-[320px]  justify-center text-center px-6 py-20"
      >
        <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">
          BIAN Foundation Certification
        </h1>
        <h4 className="mt-10 text-gray-600 max-w-[1165px] text-[24px] ">
          Attain in-depth knowledge and understanding of BIAN, learn how to
          architect a bank using BIAN standard and obtain BIAN Foundation
          Certification
        </h4>
        <button className="mt-[48px] flex items-center gap-2 bg-[#0C71C3] text-white  w-[320px] py-3 rounded-full text-lg font-semibold shadow-lg  transition">
          <span>
            <Image
              className="ml-4 "
              src="/arrow.svg"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </span>{" "}
          VIEW BIAN CALENDAR
        </button>
      </section>
      <section className="mb-10 flex flex-col justify-center items-center gap-10 mt-[260px] lg:w-[1190px] mx-auto">
        <div className="flex flex-row justify-center items-center  gap-10">
          <h1 className="text-[#262626] font-bold md:text-[50px] text-[30px] text-center md:text-start be-vietnam-bold ">
            Earn the new BIAN certification this year
          </h1>
        </div>
        <div className="flex justify-between items-center mt-[67px] w-full    ">
          <div>
            <Image
              className=""
              src="/courses/bian-foundation/bian.png"
              alt="bian"
              width={188}
              height={188}
            />
          </div>
          <div className="flex  flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                className=""
                src="/courses/bian-foundation/bianstar.svg"
                alt="bian"
                width={20}
                height={20}
              />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">
                Attain in-depth knowledge and understanding of BIAN
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className=""
                src="/courses/bian-foundation/bianstar.svg"
                alt="bian"
                width={20}
                height={20}
              />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">
                Learn how to architect a bank using BIAN standard
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className=""
                src="/courses/bian-foundation/bianstar.svg"
                alt="bian"
                width={20}
                height={20}
              />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">
                Obtain BIAN Foundation Certification through BIAN certification
                exam
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row mt-[88px] lg:justify-center  w-full lg:items-center flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-3  justify-start items-start lg:max-w-[950px]">
            <div className="flex items-center gap-4 ">
              <Image
                className="w-[20px] h-[20px] "
                src="/courses/bian-foundation/bianstar.svg"
                alt="bian"
                width={30}
                height={30}
              />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">
                CC&C has trained thousands of Architects world-wide
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className="w-[20px] h-[20px] "
                src="/courses/bian-foundation/bianstar.svg"
                alt="bian"
                width={30}
                height={30}
              />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">
                We are an experienced partner for major banks world-wide
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                className="w-[20px] h-[20px] "
                src="/courses/bian-foundation/bianstar.svg"
                alt="bian"
                width={30}
                height={30}
              />
              <p className="be-vietnam-medium text-[24px] text-[#393939]">
                Your trainer is an actual architect with hands-on experience!
              </p>
            </div>
          </div>
          <div className="lg:w-[380px] lg:h-[340px] bg-[#ECF6FE]  border-[3px] border-[#0C71C3] p-10 rounded-lg  flex flex-col  gap-5">
            <h1 className="be-vietnam-pro-semibold text-[20px] text-[#393939]">
              Quick facts
            </h1>
            <div className="flex flex-col  gap-4">
              <div className="flex items-center  gap-20">
                <p className=" text-[18px] text-[#393939]">Duration:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">
                  2 days
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className=" text-[18px] text-[#393939]">Delivery method:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">
                  Virtual Online
                </p>
              </div>
              <div className="flex items-center gap-11">
                <p className=" text-[18px] text-[#393939]">Prerequisites:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">
                  None
                </p>
              </div>
              <div className="flex items-center gap-12">
                <p className=" text-[18px] text-[#393939]">Examination:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">
                  Yes
                </p>
              </div>
              <div className="flex items-center gap-11">
                <p className=" text-[18px] text-[#393939]">Certification:</p>
                <p className="text-[#262626] be-vietnam-medium text-[18px]">
                  Yes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row mt-[60px] md:justify-between w-full md:items-center flex flex-col justify-center items-center gap-5">
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">
            VIEW BIAN CALENDAR
          </button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">
            DOWNLOAD BROUCHRE
          </button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">
            OTHER COURSES
          </button>
          <button className="px-5 py-2 bg-[#FF7D33] hover:bg-[#0C71C3] text-white be-vietnam-medium">
            ENQUIRE
          </button>
        </div>
      </section>

      <section className="my-10 flex flex-col gap-5 mt-[120px] pt-[120px] bg-[#FAFAFA]">
        <div className=" text-center flex justify-center items-center">
          <h1 className="be-vietnam-bold text-[40px] font-bold text-[#262626] w-[700px]">
            BIAN: The Way Ahead for Architecture Standards in Banking
          </h1>
        </div>
        <div className="flex justify-center items-center text-center  mt-6">
          <p className=" text-[#393939]  text-[24px] w-[776px]">
            The BIAN model is the new standard for modelling capabilities, APIs
            and microservices for a full range of banking activities.
          </p>
        </div>
        <div className="max-w-[1180px] mx-auto mt-[64px]">
          <div className="space-y-6 p-2 ">
            {faq.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-6  ${
                  selectedFAQ === index
                    ? "border-4 border-[#0C71C3]"
                    : "border border-[#EEEEEE]  "
                } bg-[#EEEEEE]  `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className=" inline-flex items-center justify-between w-full text-start  text-gray-800 md:text-xl font-medium "
                >
                  {item.question}
                  {selectedFAQ !== index ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="#0C71C3"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 8V16M16 12H8"
                        stroke="#0C71C3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 12H8"
                        stroke="#0C71C3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="#0C71C3"
                        stroke-width="1.5"
                      />
                    </svg>
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    selectedFAQ === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden flex flex-col gap-5 "
                >
                  <p className="text-[#525252] text-lg  mt-4">{item.answer}</p>
                  <ul className="flex flex-col gap-3 text-[#525252] text-[18px]  -ml-2 p-3 list-disc">
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="flex items-center gap-3 bg-[#0C71C3] hover:bg-blue-700 px-2 w-[200px] py-2 text-white rounded-full  text-[20px]">
            <Image
              className=""
              src="/courses/bian-foundation/button.svg"
              alt="button"
              width={40}
              height={40}
            />
            Contact us
          </button>
        </div>
      </section>
      <footer className="bg-[#0D2F4B]">
        <div>
          <div className="flex justify-center items-center gap-20 pt-[50px] pb-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/logo.png"
                alt="img"
                width={130}
                height={130}
                className="w-[130px] object-contain h-[130px]"
              />
              <p className="w-[500px] text-[#AAAAAA] tracking-tighter text-justify text-[18px]">
                CC&C is a global Strategy and Architecture consulting and
                training organization, and a leader in Enterprise Architecture,
                Digital Transformation, and IT Transformation.
              </p>
              {/* Subscription Form */}
              <div className="flex  gap-2 mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-[230px] rounded-md bg-white text-black placeholder-[#AAAAAA] focus:outline-none"
                />
                <button className="p-2 bg-[#195586]/60     text-white rounded-md hover:bg-[#2373A5]">
                  Subscribe
                </button>
              </div>
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
            <div className="flex flex-col gap-2 mt-16">
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
          <div className="flex justify-center items-center">
            <hr className=" lg:w-[1066px] border border-[#195586]/60" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center  lg:w-[1066px]   py-10">
              <p className="text-[#AAAAAA] text-[16px]">
                Copyright@2025 All rights reserved
              </p>
              <div className="flex gap-10">
                <p className="text-[#AAAAAA] text-[16px]">Privacy policy</p>
                <p className="text-[#AAAAAA] text-[16px]">
                  Terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
