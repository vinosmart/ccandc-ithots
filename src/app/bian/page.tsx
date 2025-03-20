"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaCogs,
  FaBolt,
  FaLayerGroup,
  FaPuzzlePiece,
  FaChartLine,
  FaStream,
} from "react-icons/fa";
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
  const testimonials = [
    {
      name: "ANZ BANK",
      title: "Chief Architect, AXA Japan",
      review:
        "ANZ has discovered CC & C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation",
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
  const trainings = [
    {
      id: 1,
      title: "Step 1: Capture current state",
      description: "  Fragmented enterprise landscape",
      description1: "  Duplicated capabilities",
      description2: " Point-to-point API’s with no reuse",
      description3: "Control gaps and regulatory risk",
      description4: "  Slow time to market",
      description5: "  High operational expense",

      image: "/cc/1.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 2,
      title: "Step 2: Map and classify",
      description: "  Define BIAN-based Service Landscape and map applications",
      description1: " Classify API’s and identify degree of BIAN alignment",
      description2: " Identify duplication of capabilities",
      description3: "Improve change impact analysis",
      image: "/cc/2.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 3,
      title: "Step 3: Align and wrap",
      description: " Group capabilities and align to business domains",
      description1:
        "  Leverage BIAN API’s to expose standard interfaces and abstract complexity",
      description2: "Identify applications to invest vs retire",
      description3: "Guide transformation planning",
      image: "/cc/3.png", // Add your image path
      link: "/foundation-training",
    },
    {
      id: 4,
      title: "Step 4: Rationalize and reuse",
      description: " Rationalize capabilities to BIAN Service Domains",
      description1: "  Reusable BIAN-aligned API’s",
      description2:
        "Alignment to other banks and vendors who have adopted BIAN",
      description3: "Reduced cost of change and operational expense",
      image: "/cc/4.png", // Add your image path
      link: "/foundation-training",
    },
  ];
  const CardData = [
    {
      id: 1,
      image: "/service-offerings/1.jpg", // Replace with actual image paths
      title: "Business Capability Mapping",
      description:
        "Whether you already have your own Business Capability Model or plan to create one, CC&C can help you align to BIAN, providing a clear, strategic view of how technology and processes align with business objectives. Our capability maps serve as a foundation for transformation, enabling more effective planning, investment, and execution.",
    },
    {
      id: 2,
      image: "/service-offerings/2.jpg",
      title: "Enterprise Architecture Alignment to Standards",
      description:
        "We ensure enterprise architectures align with industry frameworks such as BIAN, TOGAF, and IT4IT, driving interoperability, compliance, and future-proofed technology ecosystems. Our expertise helps banks and financial institutions seamlessly integrate best practices into their architecture strategi",
    },
    {
      id: 3,
      image: "/service-offerings/3.jpg",
      title: "Proof of Value",
      description:
        "We validate the feasibility and business impact of new architectural models, solutions, and transformations through structured proofs of value. By applying industry standards like BIAN, we ensure organizations gain measurable insights before committing to full-scale implementation.",
    },
    {
      id: 4,
      image: "/service-offerings/4.jpg", // Replace with actual image paths
      title: "Design Evaluation & Certification",
      description:
        "Our rigorous evaluation and certification process assesses architecture and solution designs against industry benchmarks, ensuring compliance, efficiency, and long-term sustainability. We help organizations mitigate risks, enhance interoperability, and achieve architectural excellence.",
    },
    {
      id: 5,
      image: "/service-offerings/5.jpg",
      title: "Practitioner and Executive Training",
      description:
        "We provide specialized training programs for architects, executives, and business and technology leaders, covering BIAN, enterprise architecture, and digital transformation best practices. Our tailored approach ensures organizations build in-house expertise to drive continuous innovation.",
    },
    {
      id: 6,
      image: "/service-offerings/6.jpg",
      title: "Discovery Workshops and Use Case Ideation",
      description:
        "Through targeted workshops, we help organizations identify high-impact transformation opportunities, refine use cases, and create actionable roadmaps. Our structured approach aligns business and IT teams, ensuring initiatives deliver tangible value.",
    },
    // {
    //   id: 1,
    //   image: "/service-offerings/.jpg", // Replace with actual image paths
    //   title: "ANZIIF",
    //   description:
    //     "Insurance and finance industry professional association ANZIIF wanted to elevate the member experience on its Sitecore website.",
    // },
    {
      id: 7,
      image: "/service-offerings/7.jpg",
      title: "BIAN-aligned Design & Implementation",
      description:
        "As a globally accredited BIAN training provider, we design and implement BIAN-aligned architectures that drive standardization, agility, and operational efficiency. Our expertise ensures seamless adoption of BIAN principles across banking ecosystems.",
    },
    {
      id: 8,
      image: "/service-offerings/8.jpg",
      title: "Architecture Governance",
      description:
        "We establish robust governance frameworks to enforce architectural standards, drive consistency, and enable effective decision-making across enterprise initiatives. Our governance models help organizations reduce complexity, improve compliance, and accelerate transformation efforts.",
    },
  ];
  const features = [
    {
      id: 1,
      icon: (
        <FaCogs className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It is Canonical",
      description:
        "The business function component designs BIAN specifies are standard for every use and user. The business role or purpose of each component can represent system needs of any bank and can be consistently interpreted in any deployment.",
    },
    {
      id: 2,
      icon: (
        <FaBolt className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It Enables Agility",
      description:
        "By partitioning a bank’s functionality, data, and interfaces into discrete self-contained service centers and breaking down monolithic design, BIAN enables banks to innovate and get to production much faster.",
    },
    {
      id: 3,
      icon: (
        <FaLayerGroup className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It is Stable Over Time",
      description:
        "The BIAN model defines what each component does but does not attempt to define how it should do it. This ensures stability over time.",
    },
    {
      id: 4,
      icon: (
        <FaPuzzlePiece className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It Supports Composability",
      description:
        "When solution providers and banks align with the model, banks can more easily mix and match system components developed by different providers.",
    },
    {
      id: 5,
      icon: (
        <FaChartLine className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It can be adopted incrementally",
      description:
        "Systems built aligning to the model can be integrated alongside legacy systems and adopted incrementally while evolving with best practices.",
    },
    {
      id: 6,
      icon: (
        <FaStream className="text-[#0c71c3] text-5xl group-hover:text-white group" />
      ),
      title: "It Helps Eliminate Complexity",
      description:
        "BIAN components support discrete and autonomous business functions, reducing overlaps, duplication, and redundancies in system design.",
    },
  ];
  const courses = [
    {
      id: 1,
      image: "/training/1.jpg", // Replace with actual image URL
      title: "BIAN Foundation Certification Training",
      instructor:
        "Attain in-depth knowledge and understanding of the BIAN standard’s banking architecture with BIAN Foundation Certification training from our experts. Your trainer is an experienced BIAN architect who can address the “how” and “why” along with the “what”",
      rating: 4.7,
      reviews: 358435,
      price: 549,
      originalPrice: 3299,
      badges: ["Learn more"],
    },
    {
      id: 2,
      image: "/training/2.jpg", // Replace with actual image URL
      title: "BIAN Data Architecture & Design Specialist Certification",
      instructor:
        "Learn BIAN’s Business Object Model (BOM) in detail through an end-to-end use case. Your trainer is a BIAN-certified data specialist who can provide a practical working knowledge of how BIAN can be utilized to design a world-class data architecture.Learn More.",
      rating: 4.7,
      reviews: 429680,
      price: 499,
      originalPrice: 3099,
      badges: ["Learn more"],
    },
    {
      id: 3,
      image: "/training/3.jpg", // Replace with actual image URL
      title: "BIAN Foundation Certification Training",
      instructor:
        "Attain in-depth knowledge and understanding of the BIAN standard’s banking architecture with BIAN Foundation Certification training from our experts. Your trainer is an experienced BIAN architect who can address the “how” and “why” along with the “what”",
      rating: 4.7,
      reviews: 358435,
      price: 549,
      originalPrice: 3299,
      badges: ["Learn more"],
    },
    {
      id: 4,
      image: "/training/1.jpg", // Replace with actual image URL
      title: "BIAN Foundation Certification Training",
      instructor:
        "Attain in-depth knowledge and understanding of the BIAN standard’s banking architecture with BIAN Foundation Certification training from our experts. Your trainer is an experienced BIAN architect who can address the “how” and “why” along with the “what”",
      rating: 4.7,
      reviews: 358435,
      price: 549,
      originalPrice: 3299,
      badges: ["Learn more"],
    },
  ];
  const videoCards = [
    {
      id: 1,
      image: "/cc/august24.jpg", // Replace with actual image path
      title: "Learnings and tips for rolling out BIAN in your organization",
      description:
        "Interested in adopting BIAN in your enterprise, and keen to benefit from the learnings of those who have gone before you?",
      details:
        "Mamta Sarangal and Nishan Jebanasam from CC and C Solutions will share learnings from the work done with banks across Australia, Europe, North America, and Asia so that you can maximise the success of your own BIAN journey.",
      buttonText: "Watch Video",
    },
    {
      id: 2,
      image: "/cc/august24.jpg",
      title: "Understanding BIAN Framework for Digital Banking",
      description:
        "Discover how BIAN helps digital banking transformation and enhances interoperability.",
      details:
        "Experts discuss best practices for leveraging BIAN’s architecture to drive efficiency in digital banking solutions.",
      buttonText: "Watch Video",
    },
    {
      id: 3,
      image: "/cc/august24.jpg",
      title: "BIAN Adoption Case Study: Success Stories",
      description:
        "Learn how banks have successfully adopted BIAN to streamline their systems and improve agility.",
      details:
        "Real-world case studies showcasing how BIAN implementation led to cost savings and improved banking operations.",
      buttonText: "Watch Video",
    },
    {
      id: 4,
      image: "/cc/august24.jpg",
      title: "Future Trends in Banking with BIAN Standards",
      description:
        "Explore how emerging technologies align with BIAN to shape the future of banking.",
      details:
        "Industry leaders share insights on how AI, blockchain, and cloud computing integrate with BIAN for next-gen banking.",
      buttonText: "Watch Video",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? courses : courses.slice(0, 3);
  return (
    <div className=" font-sans">
      <div
        className={`flex justify-center items-center fixed top-10 w-full z-[999999] transition-transform duration-300 ${
          isVisible ? " block" : "hidden"
        }`}
      >
        <div className="w-[1128px] h-[88px] relative bg-white rounded-[100px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="h-6 left-[258px] top-[32px] absolute inline-flex justify-start items-center gap-8">
            <Link href="/">
              <div className="relative justify-start text-[#393939] text-lg font-normal leading-normal">
                Why us
              </div>
            </Link>
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

      <section className=" mx-auto flex w-full gap-20 bg-[url(/bg.png)] bg-cover bg-center h-screen  pt-[120px] justify-center items-center">
        {/* <Image
          className="w-[300px] h-[300px] left-[40px] "
          src="/bian/home.png"
          alt="Company Logo"
          width={300}
          height={300}
        /> */}
        <div className="justify-center items-center flex flex-col">
          <h1 className="text-4xl sm:text-[72px] font-extrabold text-gray-900 text-center leading-[90px]">
            Future-Proof Your Banking <br />{" "}
            <span className="text-[#F68827]">Architecture With BIAN</span>
          </h1>
          <p className="text-lg font-medium text-center max-w-[600px] mt-6">
            CC&C’s leadership position in BIAN certification training, adoption,
            and implementation is helping banks fast-track their BIAN journey.
          </p>
        </div>
      </section>

      <section className=" mx-auto flex w-full flex-col  pt-[120px] justify-center items-center">
        <h1 className="text-[40px] max-w-[1440px] text-center text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
          Navigate the complexities of legacy systems and architecture with CC&C
          Solutions – trusted partners to the world’s leading financial
          institutions.
        </h1>
        <Image
          className="2xl:w-[1440px] w-[1300px] mt-40 rounded"
          src="/bian/bian.jpeg"
          alt="Company Logo"
          width={1440}
          height={1440}
        />
      </section>

      <section className=" mx-auto flex w-full flex-col  pt-40 justify-center items-center">
        <h1 className="text-[40px]  text-black/70 max-w-[1440px] text-center text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
          How CC&C helps banks move to a <br /> modern, composable, and agile
          architecture
        </h1>
        <p className="text-[19px] text-center mt-10">
          A four-step process using BIAN to simplify and modernize your banking
          architecture
        </p>
        <section className="py-12 flex justify-center items-center  mt-14">
          <div className="  grid grid-cols-2 items-center gap-[80px] max-w-[1400px]">
            {trainings.map((training) => (
              <div key={training.id} className="flex gap-10  items-center ">
                <Image
                  src={training.image}
                  alt={training.title}
                  width={200}
                  height={250}
                  className="rounded-lg -mt-6 xl:h-[200px] xl:w-[200px]"
                />
                <div className="w-full ">
                  <h3 className="text-[24px] font-semibold">
                    {training.title}
                  </h3>
                  <ul className=" text-lg">
                    <li className="text-gray-600 mt-2 c">
                      {training.description}
                    </li>
                    <li className="text-gray-600 mt-2 c">
                      {training.description1}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description2}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description3}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description4}
                    </li>{" "}
                    <li className="text-gray-600 mt-2 c">
                      {training.description5}
                    </li>
                  </ul>
                  {/* <Link href={training.link}>
                    <button className="mt-4 bg-[#0c71c3] text-white px-4 py-2 rounded-md ">
                      Learn More
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className=" mx-auto flex w-full flex-col  pt-40 justify-center items-center">
        <h1 className="text-[40px]  text-black/70 max-w-[1440px] text-center text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px]">
          CC&C Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-10  mx-auto">
          {CardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-lg 2xl:w-[400px] overflow-hidden border p-6"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="w-full   object-cover rounded-lg"
              />
              <h3 className="text-[24px] font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600  text-lg mt-3">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" mx-auto flex w-full flex-col  pt-40 justify-center items-center">
        <h1 className="text-[40px] text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/70 max-w-[1440px] text-center">
          How Does BIAN Deliver Benefit
        </h1>
        <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white hover:bg-[#F68827] p-10 rounded-tl-3xl  rounded-b-3xl  drop-shadow-xl border flex items-start gap-4 group"
            >
              <div className="">{feature.icon}</div>
              <div className="text-[#2A2A2A] group-hover:text-white">
                <h3 className="text-[25px] font-semibold">{feature.title}</h3>
                <p className=" text-base mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col pt-40 justify-center items-center">
        <h1 className="text-[40px] text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/70 max-w-[1440px] text-center">
          Our BIAN Training
        </h1>
        <div className=" px-6 py-10 flex flex-wrap max-w-[1440px]    justify-center w-full gap-6">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 xl:w-[400px]   rounded-lg shadow-lg border"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={160}
                className="rounded-lg w-full object-cover"
              />
              <div className="mt-4">
                <h3 className="text-[24px] font-bold">{course.title}</h3>
                <p className="text-gray-600 text-lg mt-3">
                  {course.instructor}
                </p>
                <div className="flex gap-2 mt-3">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-[#0c71c3] text-white text-sm px-4 py-2 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#0c71c3] text-white px-6 py-3 rounded-lg text-lg mt-4 hover:bg-[#095a9c] transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </section>
      <section className="flex w-full flex-col pt-40 justify-center items-center">
        <h1 className="text-[40px] text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/70 max-w-[1440px] text-center">
          Our Banking Clients
        </h1>
        <Image
          src="/bian/logos-bank.jpg"
          alt=""
          width={900}
          height={550}
          className="w-[1000px]  mt-20 border shadow-lg rounded-lg"
        />
      </section>
      <section className="flex flex-col items-center justify-center mt-[202px]">
        <h1 className="text-[40px] text-4xl sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/70 max-w-[1440px] text-center">
          Testimonials
        </h1>
        <div className="md:w-[1128px]">
          <div className="flex items-center justify-between pt-40 w-full ">
            <h1 className=" text-black font-extrabold  text-[56px]">
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
                  <div className="border rounded-xl shadow-lg relative p-6 w-[350px]  border-[#E0E0E0] h-[466px] bg-white">
                    <h3 className="text-[24px] font-bold">
                      {testimonial.name}
                    </h3>
                    {/* <p className="text-blue-500 text-base">
                      {testimonial.title}
                    </p> */}
                    <p className="text-[#444444] text-lg mt-3">
                      {testimonial.review}
                    </p>
                    <div className="text-yellow-400 absolute bottom-4  w-full flex   mt-10 gap-20">
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

      <section className="max-w-[1440px] mx-auto px-6 py-16  mt-[202px]">
        <h2 className=" sm:text-[56px] font-extrabold text-gray-900 leading-[70px] text-black/80 text-center mb-10">
          BIAN Insights and Learnings
        </h2>

        <div className="flex flex-col gap-10">
          {videoCards.map((video) => (
            <div
              key={video.id}
              className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg"
            >
              {/* Left: Video Thumbnail */}
              <div className="w-full md:w-1/2">
                <Image
                  src={video.image}
                  alt={video.title}
                  width={600}
                  height={350}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-black/80">
                  {video.title}
                </h3>
                <p className="text-lg text-black/70 mt-2">
                  {video.description}
                </p>
                <p className="text-gray-600 text-base mt-2">{video.details}</p>

                {/* Watch Video Button */}
                <button className="mt-4 bg-[#0c71c3] text-white px-5 py-3 rounded-lg text-lg hover:bg-[#095a9c] transition">
                  {video.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-[#0D2F4B] mt-[120px]">
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
}
