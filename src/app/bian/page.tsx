"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Bian() {
  useEffect(() => {}, []);
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
  const trainings = [
    {
      id: 1,
      title: "Step 1: Capture current state",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit sit asperiores corporis pariatur neque totam repellendus, distinctio dolorem laboriosam soluta? Necessitatibus dolor architecto recusandae modi praesentium quae saepe facilis.",

      image: "/bian/training1.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 1,
      title: "Step 2: Map and classify",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit sit asperiores corporis pariatur neque totam repellendus, distinctio dolorem laboriosam soluta? Necessitatibus dolor architecto recusandae modi praesentium quae saepe facilis.",

      image: "/bian/training1.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 1,
      title: "Step 3: Align and wrap",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit sit asperiores corporis pariatur neque totam repellendus, distinctio dolorem laboriosam soluta? Necessitatibus dolor architecto recusandae modi praesentium quae saepe facilis.",

      image: "/bian/training1.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 1,
      title: "Step 4: Rationalize and reuse",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit sit asperiores corporis pariatur neque totam repellendus, distinctio dolorem laboriosam soluta? Necessitatibus dolor architecto recusandae modi praesentium quae saepe facilis.",

      image: "/bian/training1.png", // Add your image path
      link: "/foundation-training",
    },
  ];
  const CardData = [
    {
      id: 1,
      image: "/bian/training1.png", // Replace with actual image paths
      title: "Business Capability Mapping",
      description:
        "Whether you already have your own Business Capability Model or plan to create one, CC&C can help you align to BIAN, providing a clear, strategic view of how technology and processes align with business objectives. Our capability maps serve as a foundation for transformation, enabling more effective planning, investment, and execution.",
    },
    {
      id: 2,
      image: "/bian/training1.png",
      title: "Enterprise Architecture Alignment to Standards",
      description:
        "We ensure enterprise architectures align with industry frameworks such as BIAN, TOGAF, and IT4IT, driving interoperability, compliance, and future-proofed technology ecosystems. Our expertise helps banks and financial institutions seamlessly integrate best practices into their architecture strategi",
    },
    {
      id: 3,
      image: "/bian/training1.png",
      title: "Proof of Value",
      description:
        "We validate the feasibility and business impact of new architectural models, solutions, and transformations through structured proofs of value. By applying industry standards like BIAN, we ensure organizations gain measurable insights before committing to full-scale implementation.",
    },
    {
      id: 1,
      image: "/bian/training1.png", // Replace with actual image paths
      title: "Design Evaluation & Certification",
      description:
        "Our rigorous evaluation and certification process assesses architecture and solution designs against industry benchmarks, ensuring compliance, efficiency, and long-term sustainability. We help organizations mitigate risks, enhance interoperability, and achieve architectural excellence.",
    },
    {
      id: 2,
      image: "/bian/training1.png",
      title: "Practitioner and Executive Training",
      description:
        "We provide specialized training programs for architects, executives, and business and technology leaders, covering BIAN, enterprise architecture, and digital transformation best practices. Our tailored approach ensures organizations build in-house expertise to drive continuous innovation.",
    },
    {
      id: 3,
      image: "/bian/training1.png",
      title: "Discovery Workshops and Use Case Ideation",
      description:
        "Through targeted workshops, we help organizations identify high-impact transformation opportunities, refine use cases, and create actionable roadmaps. Our structured approach aligns business and IT teams, ensuring initiatives deliver tangible value.",
    },
    {
      id: 1,
      image: "/bian/training1.png", // Replace with actual image paths
      title: "ANZIIF",
      description:
        "Insurance and finance industry professional association ANZIIF wanted to elevate the member experience on its Sitecore website.",
    },
    {
      id: 2,
      image: "/bian/training1.png",
      title: "BIAN-aligned Design & Implementation",
      description:
        "As a globally accredited BIAN training provider, we design and implement BIAN-aligned architectures that drive standardization, agility, and operational efficiency. Our expertise ensures seamless adoption of BIAN principles across banking ecosystems.",
    },
    {
      id: 3,
      image: "/bian/training1.png",
      title: "Architecture Governance",
      description:
        "We establish robust governance frameworks to enforce architectural standards, drive consistency, and enable effective decision-making across enterprise initiatives. Our governance models help organizations reduce complexity, improve compliance, and accelerate transformation efforts.",
    },
  ];
  return (
    <div className="bg-[url(/bg.png)] bg-cover bg-center h-screen font-sans">
      <div
        className={`flex justify-center items-center fixed top-10 w-full z-[999999] transition-transform duration-300 ${
          isVisible ? " block" : "hidden"
        }`}
      >
        <div className="w-[1128px] h-[88px] relative bg-white rounded-[100px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="h-6 left-[258px] top-[32px] absolute inline-flex justify-start items-center gap-8">
            <div className="relative justify-start text-[#393939] text-lg font-normal leading-normal">
              Why us
            </div>
            <Link href="/bian">
              <div className="relative justify-start text-[#393939] text-lg font-normal leading-normal">
                Banking & BIAN
              </div>
            </Link>
            <div className="relative justify-start text-[#393939] text-lg font-normal leading-normal">
              Architecture & tools
            </div>
            <div className="relative justify-start text-[#393939] text-lg font-normal leading-normal">
              Training
            </div>
            <div className="relative justify-start text-[#393939] text-lg font-normal leading-normal">
              Contact us
            </div>
          </div>
          <div className="h-11 px-5 py-3 left-[943px] top-[22px] absolute bg-[#0c71c3] rounded-[100px] inline-flex justify-center items-center gap-2.5">
            <div className="relative justify-start text-white text-base font-semibold leading-tight">
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

      <section className=" mx-auto flex w-full gap-20  pt-[320px] justify-center items-center">
        <Image
          className="w-[300px] h-[300px] left-[40px] "
          src="/bian/home.png"
          alt="Company Logo"
          width={300}
          height={300}
        />
        <div className="">
          <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 leading-[90px]">
            Future-Proof Your Banking <br />{" "}
            <span className="text-[#F68827]">Architecture With BIAN</span>
          </h1>
          <p className="text-lg font-medium max-w-[600px] mt-6">
            CC&C’s leadership position in BIAN certification training, adoption,
            and implementation is helping banks fast-track their BIAN journey.
          </p>
        </div>
      </section>

      <section className=" mx-auto flex w-full flex-col  pt-[420px] justify-center items-center">
        <h1 className="text-[30px] font-bold text-black/70 max-w-[1440px] text-center">
          Navigate the complexities of legacy systems and architecture with CC&C
          Solutions – trusted partners to the world’s leading financial
          institutions.
        </h1>
        <Image
          className="w-[1440px] h-[1440px] left-[40px] mt-40 rounded"
          src="/bian/bian.jpeg"
          alt="Company Logo"
          width={1440}
          height={1440}
        />
      </section>

      <section className=" mx-auto flex w-full flex-col  pt-20 justify-center items-center">
        <h1 className="text-[30px] font-bold text-black/70 max-w-[1440px] text-center">
          How CC&C helps banks move to a <br /> modern, composable, and agile
          architecture
        </h1>
        <p className="text-[19px] text-center mt-10">
          A four-step process using BIAN to simplify and modernize your banking
          architecture
        </p>
        <section className="py-12 px-6">
          <div className="max-w-[1024px] space-y-8">
            {trainings.map((training) => (
              <div
                key={training.id}
                className="flex flex-col md:flex-row w- justify-  items-center  gap-10"
              >
                <div className="w-full md:w-1/2 ">
                  <Image
                    src={training.image}
                    alt={training.title}
                    width={400}
                    height={250}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full ">
                  <h3 className="text-lg font-semibold">{training.title}</h3>
                  <ul className="">
                    <li className="text-gray-600 mt-2 c">
                      {training.description}
                    </li>{" "}
                  </ul>
                  <Link href={training.link}>
                    <button className="mt-4 bg-[#0c71c3] text-white px-4 py-2 rounded-md ">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className=" mx-auto flex w-full flex-col  pt-20 justify-center items-center">
        <h1 className="text-[30px] font-bold text-black/70 max-w-[1440px] text-center">
          CC&C Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
          {CardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border p-4"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
