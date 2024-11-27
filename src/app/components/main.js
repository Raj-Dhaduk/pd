// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import "./../../../assets/css/main.css";
// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//         setShowScrollTop(true);
//       } else {
//         setIsSticky(false);
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (isLoading) {
//     return (
//       <div
//         className="page-loading fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-primary-light-1 dark:bg-primary-dark-1 opacity-100 visible pointer-events-auto"
//         role="status"
//         aria-live="polite"
//         aria-atomic="true"
//         aria-label="Loading..."
//       >
//         <div className="grid-loader">
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <header
//         className={`ic-navbar ${
//           isSticky
//             ? "fixed top-0 left-0 animate-slideDown bg-[rgba(105,105,223,0.75)] text-[rgb(30,31,36)] shadow-md "
//             : "absolute bg-transparent"
//         } z-50 flex w-full items-center transition-all duration-300`}
//         role="banner"
//         aria-label="Navigation bar"
//       >
//         <div className="container">
//           <div className="ic-navbar-container relative -mx-5 flex items-center justify-between">
//             <div className="w-60 lg:w-56 max-w-full px-5">
//               <Link
//                 href="/"
//                 className="ic-navbar-logo block w-full py-5 text-primary-color"
//               >
//                 <svg
//                   className="w-full fill-current"
//                   id="NavbarBrand"
//                   data-name="NavbarBrand"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 500 118.11"
//                 >
//                   {/* SVG path data */}
//                 </svg>
//               </Link>
//             </div>
//             <div className="flex w-full items-center justify-between px-5">
//               <div>
//                 <button
//                   type="button"
//                   className="ic-navbar-toggler absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px]/none text-primary-color ring-primary focus:ring-2 lg:hidden"
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   aria-expanded={isMenuOpen}
//                   aria-label="Toggle navigation menu"
//                 >
//                   <i className="lni lni-menu" />
//                 </button>
//                 <nav
//                   id="navbarMenu"
//                   className={`ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg ${
//                     isMenuOpen ? "block" : "hidden"
//                   } bg-primary-light-1 py-5 shadow-lg dark:bg-primary-dark-1 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6`}
//                 >
//                   <ul
//                     className="block lg:flex"
//                     role="menu"
//                     aria-label="Navigation menu"
//                   >
//                     <li className="group relative">
//                       <Link
//                         href="#home"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Home
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#services"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Services
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#portfolio"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Portfolio
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#pricing"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Pricing
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#team"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Team
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#contact"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               <div className="flex items-center justify-end pr-[52px] lg:pr-0">
//                 <button
//                   type="button"
//                   className="inline-flex items-center text-primary-color text-[24px]/none"
//                   aria-label="Switch theme"
//                 >
//                   {/* Theme toggle icon */}
//                 </button>
//                 <div className="hidden sm:flex">
//                   <Link
//                     href="#"
//                     className="btn-navbar ml-5 px-6 py-3 rounded-md bg-primary-color bg-opacity-20 text-base font-medium text-primary-color hover:bg-opacity-100 hover:text-primary"
//                     role="button"
//                   >
//                     Get Started
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <main className="main relative">
//         {/* Hero section */}
//         <section
//           id="home"
//           className="relative overflow-hidden bg-primary text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px]"
//         >
//           <div className="container">
//             <div className="-mx-5 flex flex-wrap items-center">
//               <div className="w-full px-5">
//                 <div className="scroll-revealed mx-auto max-w-[780px] text-center">
//                   <h1 className="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
//                     Tailwind CSS Company Landing Page by Ranyeh
//                   </h1>
//                   <p className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Possimus qui impedit veniam, nesciunt nostrum vel repellat
//                     reprehenderit dignissimos harum, iste ex sit illo?
//                   </p>
//                   <ul className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
//                     <li>
//                       <a
//                         href="javascript:void(0)"
//                         className="inline-flex items-center justify-center rounded-md bg-primary-color text-primary px-5 py-3 text-center text-base font-medium shadow-md hover:bg-primary-light-5 md:px-7 md:py-[14px]"
//                         role="button"
//                       >
//                         Get Started
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="javascript:boid(0)"
//                         className="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-primary-color hover:bg-primary-color hover:text-primary md:px-7 md:py-[14px]"
//                         role="button"
//                       >
//                         <i className="lni lni-play text-lg/none" /> Watch Intro
//                       </a>
//                     </li>
//                   </ul>
//                   <div>
//                     <p className="mb-4 text-center text-primary-color">
//                       Powered by
//                     </p>
//                     <div className="scroll-revealed flex items-center justify-center gap-4 text-center">
//                       <a
//                         href="https://tailwindcss.com/"
//                         target="_blank"
//                         className="text-primary-color/60 hover:text-primary-color"
//                       >
//                         <svg
//                           className="fill-current"
//                           height={26}
//                           viewBox=".16 .18 799.8 98.72"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="m248.04 41.78h-14.42v27.79c0 7.41 4.89 7.29 14.42 6.83v11.23c-19.3 2.32-26.98-3.01-26.98-18.06v-27.79h-10.7v-12.05h10.7v-15.55l12.56-3.7v19.25h14.42zm54.98-12.05h12.56v57.9h-12.56v-8.34c-4.42 6.14-11.29 9.85-20.36 9.85-15.81 0-28.95-13.32-28.95-30.46 0-17.25 13.14-30.45 28.95-30.45 9.07 0 15.94 3.7 20.36 9.72zm-18.38 47.48c10.47 0 18.38-7.76 18.38-18.53s-7.91-18.53-18.38-18.53-18.37 7.76-18.37 18.53 7.9 18.53 18.37 18.53zm51.87-56.16c-4.42 0-8.03-3.71-8.03-7.99.01-1.05.22-2.09.62-3.06a7.997 7.997 0 0 1 4.34-4.32c.97-.4 2.02-.61 3.07-.61s2.09.21 3.07.61c.97.4 1.85.99 2.6 1.73.74.75 1.33 1.63 1.74 2.59.4.97.61 2.01.61 3.06 0 4.28-3.6 7.99-8.02 7.99zm-6.28 66.58v-57.9h12.56v57.9zm27.1 0v-84.53h12.56v84.53zm94.08-57.9h13.26l-18.26 57.9h-12.33l-12.09-39.02-12.21 39.02h-12.33l-18.26-57.9h13.26l11.28 39.95 12.21-39.95h11.98l12.09 39.95zm28.84-8.68c-4.42 0-8.02-3.71-8.02-7.99 0-1.05.21-2.09.61-3.06.41-.96 1-1.84 1.74-2.59.75-.74 1.63-1.33 2.6-1.73.98-.4 2.02-.61 3.07-.61a8.044 8.044 0 0 1 5.67 2.34c.75.75 1.34 1.63 1.74 2.59.41.97.62 2.01.62 3.06 0 4.28-3.61 7.99-8.03 7.99zm-6.28 66.58v-57.9h12.56v57.9zm80.02-35.55v35.55h-12.56v-34.27c0-8.81-5.12-13.44-13.03-13.44-8.26 0-14.77 4.87-14.77 16.68v31.03h-12.56v-57.9h12.56v7.41c3.84-6.02 10.12-8.91 18.03-8.91 13.02 0 22.33 8.8 22.33 23.85zm59.54-45.51h12.56v81.06h-12.56v-8.34c-4.42 6.14-11.28 9.85-20.35 9.85-15.82 0-28.96-13.32-28.96-30.46 0-17.25 13.14-30.45 28.96-30.45 9.07 0 15.93 3.7 20.35 9.72zm-18.37 70.64c10.46 0 18.37-7.76 18.37-18.53s-7.91-18.53-18.37-18.53c-10.47 0-18.38 7.76-18.38 18.53s7.91 18.53 18.38 18.53zm42.33-18.53c0-17.25 13.14-30.45 30.7-30.45 11.4 0 21.28 5.9 25.93 14.94l-10.81 6.25c-2.56-5.44-8.26-8.92-15.24-8.92-10.23 0-18.02 7.76-18.02 18.18s7.79 18.18 18.02 18.18c6.98 0 12.68-3.59 15.47-8.91l10.82 6.13c-4.89 9.15-14.77 15.06-26.17 15.06-17.56 0-30.7-13.32-30.7-30.46zm108.85 12.62c0 11.58-10.12 17.84-22.68 17.84-11.63 0-20-5.22-23.72-13.55l10.81-6.26c1.87 5.22 6.52 8.34 12.91 8.34 5.59 0 9.89-1.85 9.89-6.48 0-10.31-31.28-4.52-31.28-25.25 0-10.88 9.42-17.71 21.28-17.71 9.53 0 17.44 4.4 21.51 12.04l-10.58 5.91c-2.09-4.52-6.16-6.6-10.93-6.6-4.54 0-8.49 1.96-8.49 6.13 0 10.54 31.28 4.17 31.28 25.59zm53.62 0c0 11.58-10.12 17.84-22.68 17.84-11.63 0-20.01-5.22-23.73-13.55l10.82-6.26c1.86 5.22 6.51 8.34 12.91 8.34 5.58 0 9.88-1.85 9.88-6.48 0-10.31-31.28-4.52-31.28-25.25 0-10.88 9.42-17.71 21.28-17.71 9.54 0 17.45 4.4 21.52 12.04l-10.59 5.91c-2.09-4.52-6.16-6.6-10.93-6.6-4.53 0-8.49 1.96-8.49 6.13 0 10.54 31.29 4.17 31.29 25.59z" />
//                           <path d="m82.79.18c-22.03 0-35.81 10.97-41.32 32.91 8.27-10.97 17.91-15.09 28.93-12.35 6.28 1.57 10.77 6.11 15.75 11.14 8.1 8.18 17.48 17.66 37.96 17.66 22.03 0 35.8-10.97 41.31-32.91-8.26 10.97-17.9 15.08-28.92 12.34-6.28-1.56-10.78-6.11-15.75-11.13-8.1-8.19-17.48-17.66-37.96-17.66zm-41.32 49.36c-22.03 0-35.8 10.97-41.31 32.91 8.26-10.97 17.9-15.08 28.92-12.34 6.29 1.56 10.78 6.11 15.75 11.13 8.1 8.19 17.48 17.66 37.96 17.66 22.04 0 35.81-10.97 41.32-32.91-8.27 10.97-17.91 15.09-28.92 12.35-6.29-1.57-10.78-6.11-15.76-11.14-8.1-8.18-17.48-17.66-37.96-17.66z" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full px-5">
//                 <div className="scroll-revealed relative z-10 mx-auto max-w-[845px]">
//                   <figure className="mt-16">
//                     <img
//                       src="./img/hero.png"
//                       alt="Hero image"
//                       className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
//                     />
//                   </figure>
//                   <div className="absolute -left-9 bottom-0 z-[-1]">
//                     <img
//                       src="./img/dots.svg"
//                       alt="dot img"
//                       className="w-[120px] opacity-75"
//                     />
//                   </div>
//                   <div className="absolute -right-6 -top-6 z-[-1]">
//                     <img
//                       src="./img/dots.svg"
//                       alt="dot img"
//                       className="w-[120px] opacity-75"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* About section */}
//         <section id="about" className="section-area">
//           <div className="container">
//             <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
//               <div className="w-full">
//                 <figure className="scroll-revealed max-w-[480px] mx-auto">
//                   <img
//                     src="./img/about-img.jpg"
//                     alt="About image"
//                     className="rounded-xl"
//                   />
//                 </figure>
//               </div>
//               <div className="w-full">
//                 <div className="scroll-revealed">
//                   <h6 className="mb-2 block text-lg font-semibold text-primary">
//                     About Us
//                   </h6>
//                   <h2 className="mb-6">
//                     Our team comes with the experience and knowledge
//                   </h2>
//                 </div>
//                 <div className="tabs scroll-revealed">
//                   <nav
//                     className="tabs-nav flex flex-wrap gap-4 my-8"
//                     role="tablist"
//                     aria-label="About us tabs"
//                   >
//                     <button
//                       type="button"
//                       className="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                       data-web-toggle="tabs"
//                       data-web-target="tabs-panel-profile"
//                       id="tabs-list-profile"
//                       role="tab"
//                       aria-controls="tabs-panel-profile"
//                     >
//                       Our Profile
//                     </button>
//                     <button
//                       type="button"
//                       className="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                       data-web-toggle="tabs"
//                       data-web-target="tabs-panel-vision"
//                       id="tabs-list-vision"
//                       role="tab"
//                       aria-controls="tabs-panel-vision"
//                     >
//                       Our Vision
//                     </button>
//                     <button
//                       type="button"
//                       className="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                       data-web-toggle="tabs"
//                       data-web-target="tabs-panel-history"
//                       id="tabs-list-history"
//                       role="tab"
//                       aria-controls="tabs-panel-history"
//                     >
//                       Our History
//                     </button>
//                   </nav>
//                   <div
//                     className="tabs-content mt-4"
//                     id="tabs-panel-profile"
//                     tabIndex={-1}
//                     role="tabpanel"
//                     aria-labelledby="tabs-list-profile"
//                   >
//                     <p>
//                       It is a long established fact that a reader will be
//                       distracted by the readable content of a page when looking
//                       at its layout. The point of using Lorem Ipsum is that it
//                       has a more-or-less normal distribution of letters, look
//                       like readable English.
//                     </p>
//                     <p>
//                       There are many variations of passages of Lorem Ipsum
//                       available, but the majority have in some form, by injected
//                       humour.
//                     </p>
//                   </div>
//                   <div
//                     className="tabs-content mt-4"
//                     id="tabs-panel-vision"
//                     tabIndex={-1}
//                     role="tabpanel"
//                     aria-labelledby="tabs-list-vision"
//                   >
//                     <p>
//                       It is a long established fact that a reader will be
//                       distracted by the readable content of a page when looking
//                       at its layout. The point of using Lorem Ipsum is that it
//                       has a more-or-less normal distribution of letters, look
//                       like readable English.
//                     </p>
//                     <p>
//                       There are many variations of passages of Lorem Ipsum
//                       available, but the majority have in some form, by injected
//                       humour.
//                     </p>
//                   </div>
//                   <div
//                     className="tabs-content mt-4"
//                     id="tabs-panel-history"
//                     tabIndex={-1}
//                     role="tabpanel"
//                     aria-labelledby="tabs-list-history"
//                   >
//                     <p>
//                       It is a long established fact that a reader will be
//                       distracted by the readable content of a page when looking
//                       at its layout. The point of using Lorem Ipsum is that it
//                       has a more-or-less normal distribution of letters, look
//                       like readable English.
//                     </p>
//                     <p>
//                       There are many variations of passages of Lorem Ipsum
//                       available, but the majority have in some form, by injected
//                       humour.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Services section */}
//         <section id="services" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Services
//               </h6>
//               <h2 className="mb-6">Our Best Services</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-capsule" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Refreshing Design
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-tailwindcss" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Solid Tailwind CSS
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-gift" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Free and Open-Source
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-layout" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Multipurpose Template
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-layers" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Fully Customizable
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-grid-alt" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       All Essential Elements
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Intro video section */}
//         <section id="intro" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Intro Video
//               </h6>
//               <h2 className="mb-6">Watch Our Intro Video</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="scroll-revealed relative max-w-[900px] mx-auto">
//               <img
//                 src="./img/intro-video.jpg"
//                 alt="Intro video"
//                 className="w-full h-full aspect-video rounded-xl object-cover"
//               />
//               <a
//                 href="javascript:void(0)"
//                 className="video-popup w-[80px] h-[80px] rounded-full inline-flex items-center justify-center bg-primary text-primary-color text-[1.875rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md hover:bg-primary-color hover:text-primary hover:shadow-xl focus:bg-primary-color focus:text-primary focus:shadow-xl"
//               >
//                 <i className="lni lni-play" />
//               </a>
//             </div>
//           </div>
//         </section>
//         {/* Portfolio section */}
//         <section id="portfolio" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Portfolio
//               </h6>
//               <h2 className="mb-6">Our Recent Works</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <nav
//               className="scroll-revealed portfolio-menu mb-[3.750rem] text-center"
//               aria-label="Portfolio filter"
//             >
//               <button
//                 type="button"
//                 className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color active"
//                 data-filter="all"
//               >
//                 All Work
//               </button>
//               <button
//                 type="button"
//                 className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 data-filter="branding"
//               >
//                 Branding
//               </button>
//               <button
//                 type="button"
//                 className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 data-filter="marketing"
//               >
//                 Marketing
//               </button>
//               <button
//                 type="button"
//                 className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 data-filter="planning"
//               >
//                 Planning
//               </button>
//               <button
//                 type="button"
//                 className="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 data-filter="research"
//               >
//                 Research
//               </button>
//             </nav>
//             <div className="scroll-revealed portfolio-grid row">
//               <div className="portfolio col-12 sm:col-6 lg:col-4">
//                 <article className="group" data-filter="branding">
//                   <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
//                     <img
//                       src="./img/portfolio/portfolio-1.jpg"
//                       alt="Graphics Design"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
//                       <div className="flex flex-wrap gap-2 p-4">
//                         <div className="inline-block relative">
//                           <a
//                             href="./assets/img/portfolio/portfolio-1.jpg"
//                             className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-zoom-in" />
//                           </a>
//                         </div>
//                         <div className="portfolio-icon">
//                           <a
//                             href="javascript:void(0)"
//                             className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-link" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <h4 className="mb-2">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-[1.5rem] leading-tight text-inherit"
//                       >
//                         Graphics Design
//                       </a>
//                     </h4>
//                     <p>
//                       Short description for the ones who look for something new.
//                       Awesome!
//                     </p>
//                   </div>
//                 </article>
//               </div>
//               <div className="portfolio col-12 sm:col-6 lg:col-4">
//                 <article className="group" data-filter="research">
//                   <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
//                     <img
//                       src="./img/portfolio/portfolio-2.jpg"
//                       alt="Web Development"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
//                       <div className="flex flex-wrap gap-2 p-4">
//                         <div className="inline-block relative">
//                           <a
//                             href="./assets/img/portfolio/portfolio-2.jpg"
//                             className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-zoom-in" />
//                           </a>
//                         </div>
//                         <div className="portfolio-icon">
//                           <a
//                             href="javascript:void(0)"
//                             className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-link" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <h4 className="mb-2">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-[1.5rem] leading-tight text-inherit"
//                       >
//                         Web Development
//                       </a>
//                     </h4>
//                     <p>
//                       Short description for the ones who look for something new.
//                       Awesome!
//                     </p>
//                   </div>
//                 </article>
//               </div>
//               <div className="portfolio col-12 sm:col-6 lg:col-4">
//                 <article className="group" data-filter="marketing">
//                   <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
//                     <img
//                       src="./img/portfolio/portfolio-3.jpg"
//                       alt="App Development"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
//                       <div className="flex flex-wrap gap-2 p-4">
//                         <div className="inline-block relative">
//                           <a
//                             href="./assets/img/portfolio/portfolio-3.jpg"
//                             className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-zoom-in" />
//                           </a>
//                         </div>
//                         <div className="portfolio-icon">
//                           <a
//                             href="javascript:void(0)"
//                             className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-link" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <h4 className="mb-2">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-[1.5rem] leading-tight text-inherit"
//                       >
//                         App Development
//                       </a>
//                     </h4>
//                     <p>
//                       Short description for the ones who look for something new.
//                       Awesome!
//                     </p>
//                   </div>
//                 </article>
//               </div>
//               <div className="portfolio col-12 sm:col-6 lg:col-4">
//                 <article className="group" data-filter="planning">
//                   <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
//                     <img
//                       src="./img/portfolio/portfolio-4.jpg"
//                       alt="Digital Marketing"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
//                       <div className="flex flex-wrap gap-2 p-4">
//                         <div className="inline-block relative">
//                           <a
//                             href="./assets/img/portfolio/portfolio-4.jpg"
//                             className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-zoom-in" />
//                           </a>
//                         </div>
//                         <div className="portfolio-icon">
//                           <a
//                             href="javascript:void(0)"
//                             className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-link" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <h4 className="mb-2">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-[1.5rem] leading-tight text-inherit"
//                       >
//                         Digital Marketing
//                       </a>
//                     </h4>
//                     <p>
//                       Short description for the ones who look for something new.
//                       Awesome!
//                     </p>
//                   </div>
//                 </article>
//               </div>
//               <div className="portfolio col-12 sm:col-6 lg:col-4">
//                 <article className="group" data-filter="branding">
//                   <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
//                     <img
//                       src="./img/portfolio/portfolio-5.jpg"
//                       alt="SEO Services"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
//                       <div className="flex flex-wrap gap-2 p-4">
//                         <div className="inline-block relative">
//                           <a
//                             href="./assets/img/portfolio/portfolio-5.jpg"
//                             className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-zoom-in" />
//                           </a>
//                         </div>
//                         <div className="portfolio-icon">
//                           <a
//                             href="javascript:void(0)"
//                             className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-link" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <h4 className="mb-2">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-[1.5rem] leading-tight text-inherit"
//                       >
//                         SEO Services
//                       </a>
//                     </h4>
//                     <p>
//                       Short description for the ones who look for something new.
//                       Awesome!
//                     </p>
//                   </div>
//                 </article>
//               </div>
//               <div className="portfolio col-12 sm:col-6 lg:col-4">
//                 <article className="group" data-filter="marketing">
//                   <div className="relative overflow-hidden w-full aspect-[4/3] rounded-xl">
//                     <img
//                       src="./img/portfolio/portfolio-6.jpg"
//                       alt="Product Design"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 left-0 w-full aspect-[4/3] flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
//                       <div className="flex flex-wrap gap-2 p-4">
//                         <div className="inline-block relative">
//                           <a
//                             href="./assets/img/portfolio/portfolio-6.jpg"
//                             className="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-zoom-in" />
//                           </a>
//                         </div>
//                         <div className="portfolio-icon">
//                           <a
//                             href="javascript:void(0)"
//                             className="text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center hover:bg-primary-light-10 hover:text-primary-color dark:hover:bg-primary-dark-10 dark:hover:text-primary-color focus:bg-primary-light-10 focus:text-primary-color dark:focus:bg-primary-dark-10 dark:focus:text-primary-color"
//                           >
//                             <i className="lni lni-link" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-4">
//                     <h4 className="mb-2">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-[1.5rem] leading-tight text-inherit"
//                       >
//                         Product Design
//                       </a>
//                     </h4>
//                     <p>
//                       Short description for the ones who look for something new.
//                       Awesome!
//                     </p>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Pricing section */}
//         <section id="pricing" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Pricing
//               </h6>
//               <h2 className="mb-6">Pricing &amp; Plans</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="rounded-xl py-12 px-9 bg-body-light-1 dark:bg-body-dark-12/10 text-center shadow-card-1 hover:shadow-lg">
//                   <div>
//                     <h6 className="inline-block font-medium text-base mb-6 text-primary bg-primary/10 rounded-md py-2 px-8 pricing-title">
//                       Starter
//                     </h6>
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                       Iste, similique ea.
//                     </p>
//                     <div className="pt-8">
//                       <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
//                         <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
//                           $
//                         </span>
//                         0
//                         <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
//                           /mo
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="pt-8 pb-10">
//                     <a
//                       href="javascript:void(0)"
//                       className="inline-block font-medium px-6 py-3 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                     >
//                       Start Free Trial
//                     </a>
//                   </div>
//                   <div>
//                     <ul>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Cras justo odio.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Dapibus ac facilisis in.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-body-light-11 dark:text-body-dark-11 text-base leading-[24px]" />
//                         <span>Morbi leo risus.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-body-light-11 dark:text-body-dark-11 text-base leading-[24px]" />
//                         <span>Excepteur sint occaecat velit.</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="rounded-xl py-12 px-9 bg-body-light-1 dark:bg-body-dark-12/10 text-center shadow-lg">
//                   <div>
//                     <h6 className="inline-block font-medium text-base mb-6 text-primary-color bg-primary rounded-md py-2 px-8 pricing-title">
//                       Exclusive
//                     </h6>
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                       Iste, similique ea.
//                     </p>
//                     <div className="pt-8">
//                       <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
//                         <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
//                           $
//                         </span>
//                         99
//                         <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
//                           /mo
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="pt-8 pb-10">
//                     <a
//                       href="javascript:void(0)"
//                       className="inline-block font-medium px-6 py-3 rounded-md bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 hover:text-primary-color focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 focus:text-primary-color"
//                     >
//                       Purchase Now
//                     </a>
//                   </div>
//                   <div>
//                     <ul>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Cras justo odio.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Dapibus ac facilisis in.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Morbi leo risus.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-body-light-11 dark:text-body-dark-11 text-base leading-[24px]" />
//                         <span>Excepteur sint occaecat velit.</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="rounded-xl py-12 px-9 bg-body-light-1 dark:bg-body-dark-12/10 text-center shadow-card-1 hover:shadow-lg">
//                   <div>
//                     <h6 className="inline-block font-medium text-base mb-6 text-primary bg-primary/10 rounded-md py-2 px-8 pricing-title">
//                       Premium
//                     </h6>
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                       Iste, similique ea.
//                     </p>
//                     <div className="pt-8">
//                       <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
//                         <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
//                           $
//                         </span>
//                         150
//                         <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
//                           /mo
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="pt-8 pb-10">
//                     <a
//                       href="javascript:void(0)"
//                       className="inline-block font-medium px-6 py-3 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                     >
//                       Purchase Now
//                     </a>
//                   </div>
//                   <div>
//                     <ul>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Cras justo odio.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Dapibus ac facilisis in.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Morbi leo risus.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Excepteur sint occaecat velit.</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Call action section */}
//         <section
//           id="call-action"
//           className="section-area !bg-primary !text-primary-color"
//         >
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto">
//               <h2 className="mb-8 text-inherit">
//                 We love to make perfect solutions for your business
//               </h2>
//               <p>
//                 Why I say old chap that is, spiffing off his nut cor blimey
//                 guvnords geeza bloke knees up bobby, sloshed arse William cack
//                 Richard. Bloke fanny around chesed of bum bag old lost the pilot
//                 say there spiffing off his nut.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="inline-block px-5 py-3 rounded-md mt-11 bg-green-400 text-white hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
//                 role="button"
//               >
//                 Get Started Now
//               </a>
//             </div>
//           </div>
//         </section>
//         {/* Team section */}
//         <section id="team" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Team
//               </h6>
//               <h2 className="mb-6">Our Creative Team</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
//                 <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
//                   <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
//                     <img
//                       src="./img/avatar/avatar-1.jpg"
//                       alt="Team picture"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100" />
//                     <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
//                   </div>
//                   <figcaption className="text-center block">
//                     <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
//                       Garret Edwards
//                     </h4>
//                     <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
//                       Art Director
//                     </p>
//                     <div className="flex items-center justify-center gap-5">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-facebook-fill" />
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-twitter-original" />
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-instagram-original" />
//                       </a>
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
//                 <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
//                   <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
//                     <img
//                       src="./img/avatar/avatar-2.jpg"
//                       alt="Team picture"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100" />
//                     <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
//                   </div>
//                   <figcaption className="text-center block">
//                     <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
//                       Jonathan Leeson
//                     </h4>
//                     <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
//                       Web Developer
//                     </p>
//                     <div className="flex items-center justify-center gap-5">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-facebook-fill" />
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-twitter-original" />
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-instagram-original" />
//                       </a>
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
//                 <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
//                   <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
//                     <img
//                       src="./img/avatar/avatar-3.jpg"
//                       alt="Team picture"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100" />
//                     <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
//                   </div>
//                   <figcaption className="text-center block">
//                     <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
//                       Joe Russell
//                     </h4>
//                     <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
//                       UX Designer
//                     </p>
//                     <div className="flex items-center justify-center gap-5">
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-facebook-fill" />
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-twitter-original" />
//                       </a>
//                       <a
//                         href="javascript:void(0)"
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-instagram-original" />
//                       </a>
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Testimonials section */}
//         <section id="testimonials" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Client Reviews
//               </h6>
//               <h2 className="mb-6">Our Testimonials</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="swiper testimonial-carousel common-carousel scroll-revealed">
//               <div className="swiper-wrapper">
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-4.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Ralf Nacht
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           Web Entrepreneur
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-5.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Sebastian Toft
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           Web Developer
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-6.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Bao Shen
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           UI/UX Designer
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-7.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Emanuel Velzeboer
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           Graphics Designer
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-[60px] flex items-center justify-center gap-1">
//                 <div className="swiper-button-prev">
//                   <i className="lni lni-arrow-left" />
//                 </div>
//                 <div className="swiper-button-next">
//                   <i className="lni lni-arrow-right" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* FAQ section */}
//         <section id="faq" className="section-area relative">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 FAQ
//               </h6>
//               <h2 className="mb-6">Any Questions? Look Here</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="grid gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-2">
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <span className="absolute left-5 top-5 -z-[1]">
//               <svg
//                 className="w-20 h-auto fill-teal-500"
//                 version={1.0}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1280.000000pt"
//                 height="1280.000000pt"
//                 viewBox="0 0 1280.000000 1280.000000"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <g
//                   transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
//                   stroke="none"
//                 >
//                   <path
//                     d="M550 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 12465 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 11185 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                 </g>
//               </svg>
//             </span>
//             <span className="absolute right-5 bottom-5 -z-[1]">
//               <svg
//                 className="w-20 h-auto fill-indigo-500"
//                 version={1.0}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1280.000000pt"
//                 height="1280.000000pt"
//                 viewBox="0 0 1280.000000 1280.000000"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <g
//                   transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
//                   stroke="none"
//                 >
//                   <path
//                     d="M550 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 12465 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 11185 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                 </g>
//               </svg>
//             </span>
//           </div>
//         </section>
//         {/* Blog section */}
//         <section id="blog" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Blog
//               </h6>
//               <h2 className="mb-6">Latest News &amp; Blog</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <article className="group">
//                   <div className="relative">
//                     <a
//                       href="javascript:void(0)"
//                       className="w-full aspect-[3/2] rounded-xl overflow-hidden block"
//                     >
//                       <img
//                         src="./img/thumbnail/thumbnail-1.jpg"
//                         alt="Thumbnail"
//                         className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
//                       />
//                     </a>
//                   </div>
//                   <span className="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">
//                     Joe Russell - 17 Agt 2024
//                   </span>
//                   <h4 className="mb-6 mt-3 font-semibold text-[1.5rem]">
//                     <a
//                       href="javascript:void(0)"
//                       className="text-body-light-12 dark:text-body-dark-12"
//                     >
//                       Make your team a Design driven company
//                     </a>
//                   </h4>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard.
//                   </p>
//                 </article>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <article className="group">
//                   <div className="relative">
//                     <a
//                       href="javascript:void(0)"
//                       className="w-full aspect-[3/2] rounded-xl overflow-hidden block"
//                     >
//                       <img
//                         src="./img/thumbnail/thumbnail-2.jpg"
//                         alt="Thumbnail"
//                         className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
//                       />
//                     </a>
//                   </div>
//                   <span className="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">
//                     Joe Russell - 17 Agt 2024
//                   </span>
//                   <h4 className="mb-6 mt-3 font-semibold text-[1.5rem]">
//                     <a
//                       href="javascript:void(0)"
//                       className="text-body-light-12 dark:text-body-dark-12"
//                     >
//                       The newest web framework that changed the world
//                     </a>
//                   </h4>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard.
//                   </p>
//                 </article>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <article className="group">
//                   <div className="relative">
//                     <a
//                       href="javascript:void(0)"
//                       className="w-full aspect-[3/2] rounded-xl overflow-hidden block"
//                     >
//                       <img
//                         src="./img/thumbnail/thumbnail-3.jpg"
//                         alt="Thumbnail"
//                         className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
//                       />
//                     </a>
//                   </div>
//                   <span className="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">
//                     Joe Russell - 17 Agt 2024
//                   </span>
//                   <h4 className="mb-6 mt-3 font-semibold text-[1.5rem]">
//                     <a
//                       href="javascript:void(0)"
//                       className="text-body-light-12 dark:text-body-dark-12"
//                     >
//                       5 ways to improve user retention for your startup
//                     </a>
//                   </h4>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard.
//                   </p>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Clients section */}
//         <section id="clients" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Clients
//               </h6>
//               <h2 className="mb-6">Our Awesome Clients</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className>
//               <div className="row">
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/airbnb.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/coca-cola.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/facebook.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/mandiri.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/shopware.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/spotify.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/tunnel-id.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/walmart.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Contact section */}
//         <section id="contact" className="section-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 xl:col-4">
//                 <div className="row">
//                   <div className="col-12 md:col-6 xl:col-12">
//                     <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
//                       <div>
//                         <i className="lni lni-phone w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
//                       </div>
//                       <div>
//                         <h4 className="text-[1.25rem] text-primary mb-3">
//                           Contact
//                         </h4>
//                         <p className="m-0">0984537278623</p>
//                         <p className="m-0">yourmail@gmail.com</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 md:col-6 xl:col-12">
//                     <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
//                       <div>
//                         <i className="lni lni-map-marker w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
//                       </div>
//                       <div>
//                         <h4 className="text-[1.25rem] text-primary mb-3">
//                           Address
//                         </h4>
//                         <p className="m-0">175 5th Ave, New York, NY 10010</p>
//                         <p className="m-0">United States</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 md:col-6 xl:col-12">
//                     <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
//                       <div>
//                         <i className="lni lni-alarm-clock w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
//                       </div>
//                       <div>
//                         <h4 className="text-[1.25rem] text-primary mb-3">
//                           Schedule
//                         </h4>
//                         <p className="m-0">24 Hours / 7 Days Open</p>
//                         <p className="m-0">Office time: 10:00 AM - 5:30 PM</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 xl:col-8">
//                 <div className="scroll-revealed bg-body-light-1 dark:bg-primary-dark-2 rounded-xl py-8 sm:py-12 px-6 sm:px-10 z-10 relative shadow-card-1 hover:shadow-lg">
//                   <div className="text-center max-w-[550px] mx-auto mb-12">
//                     <h6 className="mb-2 block text-lg font-semibold text-primary">
//                       Get in Touch
//                     </h6>
//                     <h2 className="mb-3">Ready to Get Started</h2>
//                     <p>
//                       At vero eos et accusamus et iusto odio dignissimos ducimus
//                       quiblanditiis praesentium
//                     </p>
//                   </div>
//                   <form
//                     action="#"
//                     method="POST"
//                     className="flex flex-col gap-6"
//                   >
//                     <div className="row">
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="text"
//                           name="name"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Name"
//                           required
//                         />
//                       </div>
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="email"
//                           name="email"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Email"
//                           required
//                         />
//                       </div>
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="text"
//                           name="phone"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Phone"
//                           required
//                         />
//                       </div>
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="text"
//                           name="subject"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Subject"
//                           required
//                         />
//                       </div>
//                       <div className="col-12">
//                         <textarea
//                           name="message"
//                           rows={5}
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Type your message"
//                           required
//                           defaultValue={""}
//                         />
//                       </div>
//                       <div className="col-12">
//                         <div className="w-full text-center">
//                           <button
//                             type="submit"
//                             className="inline-block px-5 py-3 rounded-md text-base bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
//                           >
//                             Send Message
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Map section */}
//         <section
//           id="map"
//           className="w-full h-[500px] overflow-hidden -mt-[12rem]"
//         >
//           <object
//             data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.0094028113572!2d98.67188956289421!3d3.583155328672593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1c3eb2fd%3A0x23d431c8a6908262!2sMedan%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1723787393945!5m2!1sid!2sid"
//             className="border-0 w-full h-full"
//           />
//         </section>
//       </main>
//       {/* Footer */}
//       <footer className="bg-primary-dark-2 text-white">
//         <div className="container py-20 lg:py-[100px]">
//           <div className="row">
//             <div className="col-12 order-first lg:col-4">
//               <div className="w-full">
//                 <a href="." className="inline-block mb-5">
//                   <svg
//                     id="FooterBrand"
//                     className="h-[40px]"
//                     data-name="FooterBrand"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 500 118.11"
//                   >
//                     <path
//                       d="M272.26,29.77h14.86V58q0,8.24,1.13,11.44a10,10,0,0,0,3.64,5,10.44,10.44,0,0,0,6.18,1.77,10.75,10.75,0,0,0,6.23-1.75,10.26,10.26,0,0,0,3.81-5.14q.92-2.52.91-10.82V29.77h14.7V54.59q0,15.33-2.42,21a23,23,0,0,1-8.72,10.58q-5.76,3.68-14.64,3.68-9.65,0-15.59-4.3a22.79,22.79,0,0,1-8.37-12q-1.73-5.32-1.72-19.37Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M338.36,29.77h14.69V36.5a25.29,25.29,0,0,1,8.38-6.19,24.53,24.53,0,0,1,10.05-2A18.63,18.63,0,0,1,381.39,31a19.46,19.46,0,0,1,7.11,7.86A23.64,23.64,0,0,1,397.09,31a23.34,23.34,0,0,1,11.12-2.69,20.65,20.65,0,0,1,11,2.9A16.79,16.79,0,0,1,426,38.76q2.08,4.68,2.08,15.24V88.34h-14.8V58.62q0-9.94-2.48-13.48t-7.43-3.52a11.22,11.22,0,0,0-6.75,2.15,12.66,12.66,0,0,0-4.44,5.95q-1.45,3.8-1.46,12.19V88.34h-14.8V60q0-7.86-1.16-11.38a10.27,10.27,0,0,0-3.48-5.25,9.15,9.15,0,0,0-5.61-1.72A11,11,0,0,0,359,43.8a13,13,0,0,0-4.48,6.1q-1.49,3.93-1.49,12.38V88.34H338.36Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M485.31,29.77H500V88.34H485.31V82.15A29,29,0,0,1,476.68,88a24.24,24.24,0,0,1-9.39,1.8q-11.34,0-19.62-8.8t-8.28-21.88q0-13.56,8-22.23a25.55,25.55,0,0,1,19.47-8.66,24.72,24.72,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM469.86,41.83a14.85,14.85,0,0,0-11.32,4.82A17.33,17.33,0,0,0,454,59a17.55,17.55,0,0,0,4.59,12.49,14.85,14.85,0,0,0,11.29,4.9,15.15,15.15,0,0,0,11.48-4.82Q486,66.76,486,59q0-7.65-4.56-12.38A15.31,15.31,0,0,0,469.86,41.83Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M28,29.77h14.7v6a35.37,35.37,0,0,1,9-5.87,22.09,22.09,0,0,1,8.31-1.64,20.09,20.09,0,0,1,14.78,6.08Q80,39.51,80,49.64v38.7H65.45V62.69q0-10.48-.94-13.92a9.57,9.57,0,0,0-3.27-5.25,9.18,9.18,0,0,0-5.78-1.8,10.82,10.82,0,0,0-7.65,3A16,16,0,0,0,43.38,53q-.65,2.74-.64,11.88v23.5H28Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M137.42,29.77h14.69V88.34H137.42V82.15A29,29,0,0,1,128.79,88a24.19,24.19,0,0,1-9.38,1.8q-11.34,0-19.63-8.8T91.5,59.16q0-13.56,8-22.23A25.53,25.53,0,0,1,119,28.27a24.69,24.69,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM122,41.83a14.87,14.87,0,0,0-11.32,4.82A17.37,17.37,0,0,0,106.15,59a17.54,17.54,0,0,0,4.58,12.49A14.85,14.85,0,0,0,122,76.39a15.12,15.12,0,0,0,11.48-4.82q4.56-4.81,4.56-12.62,0-7.65-4.56-12.38A15.3,15.3,0,0,0,122,41.83Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <rect
//                       y="29.77"
//                       width="14.69"
//                       height="58.56"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <polygon
//                       points="226.39 62.27 232.8 68.67 282.23 118.11 163.48 89.2 196.84 55.84 190.43 49.44 140.99 0 259.75 28.91 226.39 62.27"
//                       style={{ fill: "#3d63dd" }}
//                     />
//                   </svg>
//                 </a>
//                 <p className="mb-8 text-body-dark-11">
//                   We create digital experiences for brands and companies by
//                   using technology.
//                 </p>
//                 <div className="-mx-3 flex items-center">
//                   <a
//                     href="javascript:void(0)"
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-facebook-fill" />
//                   </a>
//                   <a
//                     href="javascript:void(0)"
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-twitter-original" />
//                   </a>
//                   <a
//                     href="javascript:void(0)"
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-instagram-original" />
//                   </a>
//                   <a
//                     href="javascript:void(0)"
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-linkedin-original" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6 lg:col-2">
//               <div className="w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-inherit">
//                   Solutions
//                 </h4>
//                 <ul>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Marketing
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Analytics
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Commerce
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Insights
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-6 lg:col-2">
//               <div className="w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-inherit">
//                   Support
//                 </h4>
//                 <ul>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Pricing
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Guides
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       API Status
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-12 -order-3 lg:col-4 lg:order-1">
//               <div className="w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-inherit">
//                   Subscribe
//                 </h4>
//                 <p className="text-body-dark-11">
//                   Subscribe to our newsletter for the latest updates
//                 </p>
//                 <form
//                   action="#"
//                   method="POST"
//                   target="_blank"
//                   className="mt-8 flex"
//                 >
//                   <input
//                     type="email"
//                     name="email"
//                     className="inline-block flex-grow px-5 py-3 rounded-md rounded-e-none border border-solid border-alpha-dark text-inherit text-base focus:border-primary"
//                     placeholder="Email address"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="inline-block py-3 w-[50px] rounded-md rounded-s-none text-center text-lg/none bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
//                   >
//                     <i className="lni lni-envelope" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full border-t border-solid border-alpha-dark" />
//         <div className="container py-8">
//           <div className="flex flex-wrap">
//             <div className="w-full md:w-1/2">
//               <div className="my-1">
//                 <div className="flex flex-wrap justify-center gap-x-3 md:justify-start">
//                   <a
//                     href="javascript:void(0)"
//                     className="text-body-dark-11 hover:text-body-dark-12"
//                   >
//                     Privacy Policy
//                   </a>
//                   <a
//                     href="javascript:void(0)"
//                     className="text-body-dark-11 hover:text-body-dark-12"
//                   >
//                     Legal Notice
//                   </a>
//                   <a
//                     href="javascript:void(0)"
//                     className="text-body-dark-11 hover:text-body-dark-12"
//                   >
//                     Terms of Service
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="my-1 flex justify-center md:justify-end">
//                 <p className="text-body-dark-11">
//                   © 2024 Inazuma Inc. All rights reserved.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <button
//         type="button"
//         className={`inline-flex w-12 h-12 rounded-full items-center justify-center text-white bg-pink-600 hover:bg-blue-700 fixed bottom-[30px] right-[30px] shadow-lg hover:-translate-y-1 z-50 transition-transform duration-300 ${
//           showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//       >
//         <h1 className="text-pink-800"> ooo hewlos</h1>
//       </button>
//     </div>
//   );
// }




// second part

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Moon, Sun } from "lucide-react";

// import Image from "next/image";

// import "./components/main.css";
// const portfolioItems = [
//   {
//     id: 1,
//     title: "Research Project A",
//     category: "research",
//     image: "/img/portfolio/portfolio-2.jpg",
//   },
//   {
//     id: 2,
//     title: "Development Project B",
//     category: "development",
//     image: "/img/portfolio/portfolio-3.jpg",
//   },
//   {
//     id: 3,
//     title: "Design Project C",
//     category: "design",
//     image: "/img/portfolio/portfolio-4.jpg",
//   },
//   {
//     id: 4,
//     title: "Research Project D",
//     category: "research",
//     image: "/img/portfolio/portfolio-1.jpg",
//   },
//   {
//     id: 5,
//     title: "Development Project E",
//     category: "development",
//     image: "/img/portfolio/portfolio-5.jpg",
//   },
//   {
//     id: 6,
//     title: "Design Project F",
//     category: "design",
//     image: "/img/portfolio/portfolio-6.jpg",
//   },
// ];
// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [filter, setFilter] = useState("all");
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//         setShowScrollTop(true);
//       } else {
//         setIsSticky(false);
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Check for saved theme preference or use system preference
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute("data-web-theme", savedTheme);
//     } else if (prefersDark) {
//       setTheme("dark");
//       document.documentElement.setAttribute("data-web-theme", "dark");
//     }

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const filteredItems =
//     filter === "all"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === filter);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-web-theme", newTheme);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (isLoading) {
//     return (
//       <div
//         className="page-loading fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-primary-light-1 dark:bg-primary-dark-1 opacity-100 visible pointer-events-auto"
//         role="status"
//         aria-live="polite"
//         aria-atomic="true"
//         aria-label="Loading..."
//       >
//         <div className="grid-loader">
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <header
//         className={`ic-navbar ${
//           isSticky
//             ? "fixed top-0 left-0 animate-slideDown bg-[rgba(105,105,223,0.75)] text-[rgb(30,31,36)] shadow-md "
//             : "absolute bg-transparent"
//         } z-50 flex w-full items-center transition-all duration-300`}
//         role="banner"
//         aria-label="Navigation bar"
//       >
//         <div className="container">
//           <div className="ic-navbar-container relative -mx-5 flex items-center justify-between">
//             <div className="w-60 lg:w-56 max-w-full px-5">
//               <Link
//                 href="/"
//                 className="ic-navbar-logo block w-full py-5 text-primary-color"
//               >
//                 <svg
//                   className="w-full fill-current"
//                   id="NavbarBrand"
//                   data-name="NavbarBrand"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 500 118.11"
//                 >
//                   <path d="M272.26,29.77h14.86V58q0,8.24,1.13,11.44a10,10,0,0,0,3.64,5,10.44,10.44,0,0,0,6.18,1.77,10.75,10.75,0,0,0,6.23-1.75,10.26,10.26,0,0,0,3.81-5.14q.92-2.52.91-10.82V29.77h14.7V54.59q0,15.33-2.42,21a23,23,0,0,1-8.72,10.58q-5.76,3.68-14.64,3.68-9.65,0-15.59-4.3a22.79,22.79,0,0,1-8.37-12q-1.73-5.32-1.72-19.37Z" />
//                   <path d="M338.36,29.77h14.69V36.5a25.29,25.29,0,0,1,8.38-6.19,24.53,24.53,0,0,1,10.05-2A18.63,18.63,0,0,1,381.39,31a19.46,19.46,0,0,1,7.11,7.86A23.64,23.64,0,0,1,397.09,31a23.34,23.34,0,0,1,11.12-2.69,20.65,20.65,0,0,1,11,2.9A16.79,16.79,0,0,1,426,38.76q2.08,4.68,2.08,15.24V88.34h-14.8V58.62q0-9.94-2.48-13.48t-7.43-3.52a11.22,11.22,0,0,0-6.75,2.15,12.66,12.66,0,0,0-4.44,5.95q-1.45,3.8-1.46,12.19V88.34h-14.8V60q0-7.86-1.16-11.38a10.27,10.27,0,0,0-3.48-5.25,9.15,9.15,0,0,0-5.61-1.72A11,11,0,0,0,359,43.8a13,13,0,0,0-4.48,6.1q-1.49,3.93-1.49,12.38V88.34H338.36Z" />
//                   <path d="M485.31,29.77H500V88.34H485.31V82.15A29,29,0,0,1,476.68,88a24.24,24.24,0,0,1-9.39,1.8q-11.34,0-19.62-8.8t-8.28-21.88q0-13.56,8-22.23a25.55,25.55,0,0,1,19.47-8.66,24.72,24.72,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM469.86,41.83a14.85,14.85,0,0,0-11.32,4.82A17.33,17.33,0,0,0,454,59a17.55,17.55,0,0,0,4.59,12.49,14.85,14.85,0,0,0,11.29,4.9,15.15,15.15,0,0,0,11.48-4.82Q486,66.76,486,59q0-7.65-4.56-12.38A15.31,15.31,0,0,0,469.86,41.83Z" />
//                   <path d="M28,29.77h14.7v6a35.37,35.37,0,0,1,9-5.87,22.09,22.09,0,0,1,8.31-1.64,20.09,20.09,0,0,1,14.78,6.08Q80,39.51,80,49.64v38.7H65.45V62.69q0-10.48-.94-13.92a9.57,9.57,0,0,0-3.27-5.25,9.18,9.18,0,0,0-5.78-1.8,10.82,10.82,0,0,0-7.65,3A16,16,0,0,0,43.38,53q-.65,2.74-.64,11.88v23.5H28Z" />
//                   <path d="M137.42,29.77h14.69V88.34H137.42V82.15A29,29,0,0,1,128.79,88a24.19,24.19,0,0,1-9.38,1.8q-11.34,0-19.63-8.8T91.5,59.16q0-13.56,8-22.23A25.53,25.53,0,0,1,119,28.27a24.69,24.69,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM122,41.83a14.87,14.87,0,0,0-11.32,4.82A17.37,17.37,0,0,0,106.15,59a17.54,17.54,0,0,0,4.58,12.49A14.85,14.85,0,0,0,122,76.39a15.12,15.12,0,0,0,11.48-4.82q4.56-4.81,4.56-12.62,0-7.65-4.56-12.38A15.3,15.3,0,0,0,122,41.83Z" />
//                   <rect y="29.77" width="14.69" height="58.56" />
//                   <polygon
//                     points="226.39 62.27 232.8 68.67 282.23 118.11 163.48 89.2 196.84 55.84 190.43 49.44 140.99 0 259.75 28.91 226.39 62.27"
//                     id="NavbarBrandIcon"
//                   />
//                 </svg>
//               </Link>
//             </div>
//             <div className="flex w-full items-center justify-between px-5">
//               <div>
//                 <button
//                   type="button"
//                   className="ic-navbar-toggler absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px]/none text-primary-color ring-primary focus:ring-2 lg:hidden"
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   aria-expanded={isMenuOpen}
//                   aria-label="Toggle navigation menu"
//                 >
//                   <i className="lni lni-menu" />
//                 </button>
//                 <nav
//                   id="navbarMenu"
//                   className={`ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg ${
//                     isMenuOpen ? "block" : "hidden"
//                   } bg-primary-light-1 py-5 shadow-lg dark:bg-primary-dark-1 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6`}
//                 >
//                   <ul
//                     className="block lg:flex"
//                     role="menu"
//                     aria-label="Navigation menu"
//                   >
//                     <li className="group relative">
//                       <Link
//                         href="#home"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Home
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#services"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Services
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#portfolio"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Portfolio
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#pricing"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Pricing
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#team"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Team
//                       </Link>
//                     </li>
//                     <li className="group relative">
//                       <Link
//                         href="#contact"
//                         className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70"
//                         role="menuitem"
//                       >
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               <div className="flex items-center justify-end pr-[52px] lg:pr-0">
//                 <button
//                   type="button"
//                   className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-body-light-1 dark:bg-body-dark-12/10 text-body-light-12 dark:text-body-dark-12 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                   onClick={toggleTheme}
//                   aria-label={`Switch to ${
//                     theme === "light" ? "dark" : "light"
//                   } mode`}
//                   data-web-trigger="web-theme"
//                 >
//                   {theme === "light" ? (
//                     <Sun className="w-5 h-5" />
//                   ) : (
//                     <Moon className="w-5 h-5" />
//                   )}
//                 </button>

//                 <div className="hidden sm:flex">
//                   <Link
//                     href="#"
//                     className="btn-navbar ml-5 px-6 py-3 rounded-md bg-primary-color bg-opacity-20 text-base font-medium text-primary-color hover:bg-opacity-100 hover:text-primary"
//                     role="button"
//                   >
//                     Get Started
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <main className="main relative">
//         {/* Hero section */}
//         <section
//           id="home"
//           className="relative overflow-hidden bg-primary text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px]"
//         >
//           <div className="container">
//             <div className="-mx-5 flex flex-wrap items-center">
//               <div className="w-full px-5">
//                 <div className="scroll-revealed mx-auto max-w-[780px] text-center">
//                   <h1 className="mb-6 text-3xl font-bold leading-snug text-primary-color sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
//                     Tailwind CSS Company Landing Page by Ranyeh
//                   </h1>
//                   <p className="mx-auto mb-9 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Possimus qui impedit veniam, nesciunt nostrum vel repellat
//                     reprehenderit dignissimos harum, iste ex sit illo?
//                   </p>
//                   <ul className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
//                     <li>
//                       <button
//                         onClick={() => {
//                           /* Add your   Get Started logic here */
//                         }}
//                         className="inline-flex items-center justify-center rounded-md bg-primary-color text-primary px-5 py-3 text-center text-base font-medium shadow-md hover:bg-primary-light-5 md:px-7 md:py-[14px]"
//                         role="button"
//                       >
//                         Get Started
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         onClick={() => {
//                           /* Add your video popup logic here */
//                         }}
//                         className="video-popup flex items-center gap-4 rounded-md bg-primary-color/[0.15] px-5 py-3 text-base font-medium text-primary-color hover:bg-primary-color hover:text-primary md:px-7 md:py-[14px]"
//                         role="button"
//                       >
//                         <i className="lni lni-play text-lg/none" /> Watch Intro
//                       </button>
//                     </li>
//                   </ul>
//                   <div>
//                     <p className="mb-4 text-center text-primary-color">
//                       Powered by
//                     </p>
//                     <div className="scroll-revealed flex items-center justify-center gap-4 text-center">
//                       <button
//                         onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         target="_blank"
//                         className="text-primary-color/60 hover:text-primary-color"
//                       >
//                         <svg
//                           className="fill-current"
//                           height={26}
//                           viewBox=".16 .18 799.8 98.72"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="m248.04 41.78h-14.42v27.79c0 7.41 4.89 7.29 14.42 6.83v11.23c-19.3 2.32-26.98-3.01-26.98-18.06v-27.79h-10.7v-12.05h10.7v-15.55l12.56-3.7v19.25h14.42zm54.98-12.05h12.56v57.9h-12.56v-8.34c-4.42 6.14-11.29 9.85-20.36 9.85-15.81 0-28.95-13.32-28.95-30.46 0-17.25 13.14-30.45 28.95-30.45 9.07 0 15.94 3.7 20.36 9.72zm-18.38 47.48c10.47 0 18.38-7.76 18.38-18.53s-7.91-18.53-18.38-18.53-18.37 7.76-18.37 18.53 7.9 18.53 18.37 18.53zm51.87-56.16c-4.42 0-8.03-3.71-8.03-7.99.01-1.05.22-2.09.62-3.06a7.997 7.997 0 0 1 4.34-4.32c.97-.4 2.02-.61 3.07-.61s2.09.21 3.07.61c.97.4 1.85.99 2.6 1.73.74.75 1.33 1.63 1.74 2.59.4.97.61 2.01.61 3.06 0 4.28-3.6 7.99-8.02 7.99zm-6.28 66.58v-57.9h12.56v57.9zm27.1 0v-84.53h12.56v84.53zm94.08-57.9h13.26l-18.26 57.9h-12.33l-12.09-39.02-12.21 39.02h-12.33l-18.26-57.9h13.26l11.28 39.95 12.21-39.95h11.98l12.09 39.95zm28.84-8.68c-4.42 0-8.02-3.71-8.02-7.99 0-1.05.21-2.09.61-3.06.41-.96 1-1.84 1.74-2.59.75-.74 1.63-1.33 2.6-1.73.98-.4 2.02-.61 3.07-.61a8.044 8.044 0 0 1 5.67 2.34c.75.75 1.34 1.63 1.74 2.59.41.97.62 2.01.62 3.06 0 4.28-3.61 7.99-8.03 7.99zm-6.28 66.58v-57.9h12.56v57.9zm80.02-35.55v35.55h-12.56v-34.27c0-8.81-5.12-13.44-13.03-13.44-8.26 0-14.77 4.87-14.77 16.68v31.03h-12.56v-57.9h12.56v7.41c3.84-6.02 10.12-8.91 18.03-8.91 13.02 0 22.33 8.8 22.33 23.85zm59.54-45.51h12.56v81.06h-12.56v-8.34c-4.42 6.14-11.28 9.85-20.35 9.85-15.82 0-28.96-13.32-28.96-30.46 0-17.25 13.14-30.45 28.96-30.45 9.07 0 15.93 3.7 20.35 9.72zm-18.37 70.64c10.46 0 18.37-7.76 18.37-18.53s-7.91-18.53-18.37-18.53c-10.47 0-18.38 7.76-18.38 18.53s7.91 18.53 18.38 18.53zm42.33-18.53c0-17.25 13.14-30.45 30.7-30.45 11.4 0 21.28 5.9 25.93 14.94l-10.81 6.25c-2.56-5.44-8.26-8.92-15.24-8.92-10.23 0-18.02 7.76-18.02 18.18s7.79 18.18 18.02 18.18c6.98 0 12.68-3.59 15.47-8.91l10.82 6.13c-4.89 9.15-14.77 15.06-26.17 15.06-17.56 0-30.7-13.32-30.7-30.46zm108.85 12.62c0 11.58-10.12 17.84-22.68 17.84-11.63 0-20-5.22-23.72-13.55l10.81-6.26c1.87 5.22 6.52 8.34 12.91 8.34 5.59 0 9.89-1.85 9.89-6.48 0-10.31-31.28-4.52-31.28-25.25 0-10.88 9.42-17.71 21.28-17.71 9.53 0 17.44 4.4 21.51 12.04l-10.58 5.91c-2.09-4.52-6.16-6.6-10.93-6.6-4.54 0-8.49 1.96-8.49 6.13 0 10.54 31.28 4.17 31.28 25.59zm53.62 0c0 11.58-10.12 17.84-22.68 17.84-11.63 0-20.01-5.22-23.73-13.55l10.82-6.26c1.86 5.22 6.51 8.34 12.91 8.34 5.58 0 9.88-1.85 9.88-6.48 0-10.31-31.28-4.52-31.28-25.25 0-10.88 9.42-17.71 21.28-17.71 9.54 0 17.45 4.4 21.52 12.04l-10.59 5.91c-2.09-4.52-6.16-6.6-10.93-6.6-4.53 0-8.49 1.96-8.49 6.13 0 10.54 31.29 4.17 31.29 25.59z" />
//                           <path d="m82.79.18c-22.03 0-35.81 10.97-41.32 32.91 8.27-10.97 17.91-15.09 28.93-12.35 6.28 1.57 10.77 6.11 15.75 11.14 8.1 8.18 17.48 17.66 37.96 17.66 22.03 0 35.8-10.97 41.31-32.91-8.26 10.97-17.9 15.08-28.92 12.34-6.28-1.56-10.78-6.11-15.75-11.13-8.1-8.19-17.48-17.66-37.96-17.66zm-41.32 49.36c-22.03 0-35.8 10.97-41.31 32.91 8.26-10.97 17.9-15.08 28.92-12.34 6.29 1.56 10.78 6.11 15.75 11.13 8.1 8.19 17.48 17.66 37.96 17.66 22.04 0 35.81-10.97 41.32-32.91-8.27 10.97-17.91 15.09-28.92 12.35-6.29-1.57-10.78-6.11-15.76-11.14-8.1-8.18-17.48-17.66-37.96-17.66z" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full px-5">
//                 <div className="scroll-revealed relative z-10 mx-auto max-w-[845px]">
//                   <figure className="mt-16">
//                     <img
//                       src="./img/hero.png"
//                       alt="Hero image"
//                       className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
//                     />
//                   </figure>
//                   <div className="absolute -left-9 bottom-0 z-[-1]">
//                     <img
//                       src="./img/dots.svg"
//                       alt="dot img"
//                       className="w-[120px] opacity-75"
//                     />
//                   </div>
//                   <div className="absolute -right-6 -top-6 z-[-1]">
//                     <img
//                       src="./img/dots.svg"
//                       alt="dot img"
//                       className="w-[120px] opacity-75"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* About section */}
//         <section id="about" className="section-area">
//           <div className="container">
//             <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
//               <div className="w-full">
//                 <figure className="scroll-revealed max-w-[480px] mx-auto">
//                   <img
//                     src="./img/about-img.jpg"
//                     alt="About image"
//                     className="rounded-xl"
//                   />
//                 </figure>
//               </div>
//               <div className="w-full">
//                 <div className="scroll-revealed">
//                   <h6 className="mb-2 block text-lg font-semibold text-primary">
//                     About Us
//                   </h6>
//                   <h2 className="mb-6">
//                     Our team comes with the experience and knowledge
//                   </h2>
//                 </div>
//                 <div className="tabs scroll-revealed">
//                   <nav
//                     className="tabs-nav flex flex-wrap gap-4 my-8"
//                     role="tablist"
//                     aria-label="About us tabs"
//                   >
//                     <button
//                       type="button"
//                       className="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                       data-web-toggle="tabs"
//                       data-web-target="tabs-panel-profile"
//                       id="tabs-list-profile"
//                       role="tab"
//                       aria-controls="tabs-panel-profile"
//                     >
//                       Our Profile
//                     </button>
//                     <button
//                       type="button"
//                       className="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                       data-web-toggle="tabs"
//                       data-web-target="tabs-panel-vision"
//                       id="tabs-list-vision"
//                       role="tab"
//                       aria-controls="tabs-panel-vision"
//                     >
//                       Our Vision
//                     </button>
//                     <button
//                       type="button"
//                       className="tabs-link inline-block py-2 px-4 rounded-md text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                       data-web-toggle="tabs"
//                       data-web-target="tabs-panel-history"
//                       id="tabs-list-history"
//                       role="tab"
//                       aria-controls="tabs-panel-history"
//                     >
//                       Our History
//                     </button>
//                   </nav>
//                   <div
//                     className="tabs-content mt-4"
//                     id="tabs-panel-profile"
//                     tabIndex={-1}
//                     role="tabpanel"
//                     aria-labelledby="tabs-list-profile"
//                   >
//                     <p>
//                       It is a long established fact that a reader will be
//                       distracted by the readable content of a page when looking
//                       at its layout. The point of using Lorem Ipsum is that it
//                       has a more-or-less normal distribution of letters, look
//                       like readable English.
//                     </p>
//                     <p>
//                       There are many variations of passages of Lorem Ipsum
//                       available, but the majority have in some form, by injected
//                       humour.
//                     </p>
//                   </div>
//                   <div
//                     className="tabs-content mt-4"
//                     id="tabs-panel-vision"
//                     tabIndex={-1}
//                     role="tabpanel"
//                     aria-labelledby="tabs-list-vision"
//                   >
//                     <p>
//                       It is a long established fact that a reader will be
//                       distracted by the readable content of a page when looking
//                       at its layout. The point of using Lorem Ipsum is that it
//                       has a more-or-less normal distribution of letters, look
//                       like readable English.
//                     </p>
//                   </div>
//                   <div
//                     className="tabs-content mt-4"
//                     id="tabs-panel-history"
//                     tabIndex={-1}
//                     role="tabpanel"
//                     aria-labelledby="tabs-list-history"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Services section */}
//         <section id="services" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Services
//               </h6>
//               <h2 className="mb-6">Our Best Services</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-capsule" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Refreshing Design
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-tailwindcss" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Solid Tailwind CSS
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-gift" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Free and Open-Source
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-layout" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Multipurpose Template
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-layers" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       Fully Customizable
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="group hover:-translate-y-1">
//                   <div className="w-[70px] h-[70px] rounded-2xl mb-6 flex items-center justify-center text-[37px]/none bg-primary text-primary-color">
//                     <i className="lni lni-grid-alt" />
//                   </div>
//                   <div className="w-full">
//                     <h4 className="text-[1.25rem]/tight font-semibold mb-5">
//                       All Essential Elements
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Voluptatum dolores autem quidem odit beatae perspiciatis!
//                       Rem.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Intro video section */}
//         <section id="intro" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Intro Video
//               </h6>
//               <h2 className="mb-6">Watch Our Intro Video</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="scroll-revealed relative max-w-[900px] mx-auto">
//               <img
//                 src="./img/intro-video.jpg"
//                 alt="Intro video"
//                 className="w-full h-full aspect-video rounded-xl object-cover"
//               />
//               <button
//                  onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                 className="video-popup w-[80px] h-[80px] rounded-full inline-flex items-center justify-center bg-primary text-primary-color text-[1.875rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md hover:bg-primary-color hover:text-primary hover:shadow-xl focus:bg-primary-color focus:text-primary focus:shadow-xl"
//               >
//                 <i className="lni lni-play" />
//               </button>
//             </div>
//           </div>
//         </section>
//         {/* Portfolio section */}
//         <section id="portfolio" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Our Work
//               </h6>
//               <h2 className="mb-6">Our Latest Projects</h2>
//               <p>
//                 Explore our diverse portfolio showcasing our expertise across
//                 various domains.
//               </p>
//             </div>

//             <div className="portfolio-menu mb-8 flex flex-wrap items-center justify-center">
//               <button
//                 onClick={() => setFilter("all")}
//                 className={`m-1 px-5 py-2 text-sm font-medium rounded-md ${
//                   filter === "all"
//                     ? "active"
//                     : " text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 }`}
//               >
//                 All Projects
//               </button>
//               <button
//                 onClick={() => setFilter("research")}
//                 className={`m-1 px-5 py-2 text-sm font-medium rounded-md ${
//                   filter === "research"
//                     ? "active"
//                     : " text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 }`}
//               >
//                 Research
//               </button>
//               <button
//                 onClick={() => setFilter("development")}
//                 className={`m-1 px-5 py-2 text-sm font-medium rounded-md ${
//                   filter === "development"
//                     ? "active"
//                     : " text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 }`}
//               >
//                 Development
//               </button>
//               <button
//                 onClick={() => setFilter("design")}
//                 className={`m-1 px-5 py-2 text-sm font-medium rounded-md ${
//                   filter === "design"
//                     ? "active"
//                     : " text-body-light-12 dark:text-body-dark-12 bg-body-light-12/10 dark:bg-body-dark-12/10 text-inherit font-medium hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                 }`}
//               >
//                 Design
//               </button>
//             </div>

//             <div className="row">
//               {filteredItems.map((item) => (
//                 <div key={item.id} className="col-12 sm:col-6 lg:col-4">
//                   <div className="portfolio relative mb-8 overflow-hidden rounded-lg">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={400}
//                       height={300}
//                       className="w-full transition-transform duration-300 hover:scale-110"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-100">
//                       <div className="text-center">
//                         <h3 className="mb-2 text-xl font-bold text-primary-color">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm text-primary-color capitalize">
//                           {item.category}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Pricing section */}
//         <section id="pricing" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Pricing
//               </h6>
//               <h2 className="mb-6">Pricing &amp; Plans</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="rounded-xl py-12 px-9 bg-body-light-1 dark:bg-body-dark-12/10 text-center shadow-card-1 hover:shadow-lg">
//                   <div>
//                     <h6 className="inline-block font-medium text-base mb-6 text-primary bg-primary/10 rounded-md py-2 px-8 pricing-title">
//                       Starter
//                     </h6>
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                       Iste, similique ea.
//                     </p>
//                     <div className="pt-8">
//                       <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
//                         <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
//                           $
//                         </span>
//                         0
//                         <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
//                           /mo
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="pt-8 pb-10">
//                     <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="inline-block font-medium px-6 py-3 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                     >
//                       Start Free Trial
//                     </button>
//                   </div>
//                   <div>
//                     <ul>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Cras justo odio.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Dapibus ac facilisis in.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-body-light-11 dark:text-body-dark-11 text-base leading-[24px]" />
//                         <span>Morbi leo risus.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-body-light-11 dark:text-body-dark-11 text-base leading-[24px]" />
//                         <span>Excepteur sint occaecat velit.</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="rounded-xl py-12 px-9 bg-body-light-1 dark:bg-body-dark-12/10 text-center shadow-lg">
//                   <div>
//                     <h6 className="inline-block font-medium text-base mb-6 text-primary-color bg-primary rounded-md py-2 px-8 pricing-title">
//                       Exclusive
//                     </h6>
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                       Iste, similique ea.
//                     </p>
//                     <div className="pt-8">
//                       <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
//                         <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
//                           $
//                         </span>
//                         99
//                         <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
//                           /mo
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="pt-8 pb-10">
//                     <button
//                        onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="inline-block font-medium px-6 py-3 rounded-md bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 hover:text-primary-color focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 focus:text-primary-color"
//                     >
//                       Purchase Now
//                     </button>
//                   </div>
//                   <div>
//                     <ul>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Cras justo odio.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Dapibus ac facilisis in.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Morbi leo risus.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-body-light-11 dark:text-body-dark-11 text-base leading-[24px]" />
//                         <span>Excepteur sint occaecat velit.</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <div className="rounded-xl py-12 px-9 bg-body-light-1 dark:bg-body-dark-12/10 text-center shadow-card-1 hover:shadow-lg">
//                   <div>
//                     <h6 className="inline-block font-medium text-base mb-6 text-primary bg-primary/10 rounded-md py-2 px-8 pricing-title">
//                       Premium
//                     </h6>
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                       Iste, similique ea.
//                     </p>
//                     <div className="pt-8">
//                       <h2 className="font-semibold inline-block relative pl-4 text-[55px]">
//                         <span className="font-normal text-body-light-11 dark:text-body-dark-11 text-[1.25rem] absolute left-0 top-1.5">
//                           $
//                         </span>
//                         150
//                         <span className="text-[1.125rem] inline-block text-body-light-11 dark:text-body-dark-11 font-normal">
//                           /mo
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="pt-8 pb-10">
//                     <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="inline-block font-medium px-6 py-3 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
//                     >
//                       Purchase Now
//                     </button>
//                   </div>
//                   <div>
//                     <ul>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Cras justo odio.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Dapibus ac facilisis in.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Morbi leo risus.</span>
//                       </li>
//                       <li className="text-left relative mb-3 inline-flex gap-3 w-full">
//                         <i className="lni lni-checkmark-circle text-primary text-base leading-[24px]" />
//                         <span>Excepteur sint occaecat velit.</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Call action section */}
//         <section
//           id="call-action"
//           className="section-area !bg-primary !text-primary-color"
//         >
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto">
//               <h2 className="mb-8 text-inherit">
//                 We love to make perfect solutions for your business
//               </h2>
//               <p>
//                 Why I say old chap that is, spiffing off his nut cor blimey
//                 guvnords geeza bloke knees up bobby, sloshed arse William cack
//                 Richard. Bloke fanny around chesed of bum bag old lost the pilot
//                 say there spiffing off his nut.
//               </p>
//               <button
//                 onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                 className="inline-block px-5 py-3 rounded-md mt-11 bg-green-400 text-white hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
//                 role="button"
//               >
//                 Get Started Now
//               </button>
//             </div>
//           </div>
//         </section>
//         {/* Team section */}
//         <section id="team" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Team
//               </h6>
//               <h2 className="mb-6">Our Creative Team</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
//                 <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
//                   <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
//                     <img
//                       src="./img/avatar/avatar-1.jpg"
//                       alt="Team picture"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100" />
//                     <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
//                   </div>
//                   <figcaption className="text-center block">
//                     <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
//                       Garret Edwards
//                     </h4>
//                     <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
//                       Art Director
//                     </p>
//                     <div className="flex items-center justify-center gap-5">
//                       <button
//                          onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-facebook-fill" />
//                       </button>
//                       <button
//                          onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-twitter-original" />
//                       </button>
//                       <button
//                          onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-instagram-original" />
//                       </button>
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
//                 <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
//                   <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
//                     <img
//                       src="./img/avatar/avatar-2.jpg"
//                       alt="Team picture"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100" />
//                     <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
//                   </div>
//                   <figcaption className="text-center block">
//                     <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
//                       Jonathan Leeson
//                     </h4>
//                     <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
//                       Web Developer
//                     </p>
//                     <div className="flex items-center justify-center gap-5">
//                       <button
//                          onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-facebook-fill" />
//                       </button>
//                       <button
//                          onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-twitter-original" />
//                       </button>
//                       <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-instagram-original" />
//                       </button>
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
//                 <figure className="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
//                   <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
//                     <img
//                       src="./img/avatar/avatar-3.jpg"
//                       alt="Team picture"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-red-500 opacity-0 group-hover:opacity-100" />
//                     <span className="absolute top-0 right-0 -z-10 h-10 w-10 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
//                   </div>
//                   <figcaption className="text-center block">
//                     <h4 className="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
//                       Joe Russell
//                     </h4>
//                     <p className="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
//                       UX Designer
//                     </p>
//                     <div className="flex items-center justify-center gap-5">
//                       <button
//                        onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-facebook-fill" />
//                       </button>
//                       <button
//                         onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-twitter-original" />
//                       </button>
//                       <button
//                          onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                         className="text-body-light-10 dark:text-body-dark-10 hover:text-primary"
//                       >
//                         <i className="lni lni-instagram-original" />
//                       </button>
//                     </div>
//                   </figcaption>
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Testimonials section */}
//         <section id="testimonials" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Client Reviews
//               </h6>
//               <h2 className="mb-6">Our Testimonials</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="swiper testimonial-carousel common-carousel scroll-revealed">
//               <div className="swiper-wrapper">
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-4.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Ralf Nacht
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           Web Entrepreneur
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-5.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Sebastian Toft
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           Web Developer
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-6.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Bao Shen
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           UI/UX Designer
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 py-8 shadow-card-2 sm:px-8">
//                     <p className="mb-6 text-base text-body-light-11 dark:text-body-dark-11">
//                       "Our members are so impressed. It's intuitive. It's clean.
//                       It's distraction free. If you're building a community."
//                     </p>
//                     <figure className="flex items-center gap-4">
//                       <div className="h-[50px] w-[50px] overflow-hidden">
//                         <img
//                           src="./img/avatar/avatar-7.jpg"
//                           alt="Testimonial picture"
//                           className="h-full w-full rounded-full object-cover"
//                         />
//                       </div>
//                       <figcaption className="flex-grow">
//                         <h3 className="text-sm font-semibold text-body-light-11 dark:text-body-dark-11">
//                           Emanuel Velzeboer
//                         </h3>
//                         <p className="text-xs text-body-light-10 dark:text-body-dark-10">
//                           Graphics Designer
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-[60px] flex items-center justify-center gap-1">
//                 <div className="swiper-button-prev">
//                   <i className="lni lni-arrow-left" />
//                 </div>
//                 <div className="swiper-button-next">
//                   <i className="lni lni-arrow-right" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* FAQ section */}
//         <section id="faq" className="section-area relative">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 FAQ
//               </h6>
//               <h2 className="mb-6">Any Questions? Look Here</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="grid gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-2">
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//               <div className="scroll-revealed flex">
//                 <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
//                   <i className="lni lni-question-circle" />
//                 </div>
//                 <div className="w-full">
//                   <h3 className="mb-6 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
//                     Lorem ipsum dolor sit amet?
//                   </h3>
//                   <p className="text-body-light-11 dark:text-body-dark-11">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Corrupti minus a eaque labore delectus quas exercitationem
//                     iusto doloribus blanditiis assumenda.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <span className="absolute left-5 top-5 -z-[1]">
//               <svg
//                 className="w-20 h-auto fill-teal-500"
//                 version={1.0}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1280.000000pt"
//                 height="1280.000000pt"
//                 viewBox="0 0 1280.000000 1280.000000"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <g
//                   transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
//                   stroke="none"
//                 >
//                   <path
//                     d="M550 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 12465 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 11185 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                 </g>
//               </svg>
//             </span>
//             <span className="absolute right-5 bottom-5 -z-[1]">
//               <svg
//                 className="w-20 h-auto fill-indigo-500"
//                 version={1.0}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1280.000000pt"
//                 height="1280.000000pt"
//                 viewBox="0 0 1280.000000 1280.000000"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <g
//                   transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
//                   stroke="none"
//                 >
//                   <path
//                     d="M550 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 12465 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 12465 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 12465 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 11185 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 254
//   -255 194 -41 395 142 375 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217
//   16z"
//                   />
//                   <path
//                     d="M3110 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 11185 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M12070 11185 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142
//   -319 107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M550 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 9905 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 8625 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 7345 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 6065 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 4785 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 4785 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 4785 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 3505 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 3505 c-151 -50 -253 -216 -222 -362 25 -119 136 -230 255 -255
//   193 -41 394 142 374 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 3505 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M4390 2225 c-105 -35 -200 -141 -222 -248 -25 -117 32 -244 142 -319
//   107 -74 229 -75 337 -3 177 118 201 338 53 485 -85 86 -207 119 -310 85z"
//                   />
//                   <path
//                     d="M5670 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 2225 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M550 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M1830 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M3110 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M4390 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M5670 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M6950 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M8230 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M9510 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369 -369
//   155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M10790 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                   <path
//                     d="M12070 945 c-105 -35 -200 -141 -222 -248 -43 -206 163 -412 369
//   -369 155 32 275 190 260 339 -11 105 -90 213 -190 262 -61 29 -155 36 -217 16z"
//                   />
//                 </g>
//               </svg>
//             </span>
//           </div>
//         </section>
//         {/* Blog section */}
//         <section id="blog" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Blog
//               </h6>
//               <h2 className="mb-6">Latest News &amp; Blog</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className="row">
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <article className="group">
//                   <div className="relative">
//                     <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="w-full aspect-[3/2] rounded-xl overflow-hidden block"
//                     >
//                       <img
//                         src="./img/thumbnail/thumbnail-1.jpg"
//                         alt="Thumbnail"
//                         className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
//                       />
//                     </button>
//                   </div>
//                   <span className="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">
//                     Joe Russell - 17 Agt 2024
//                   </span>
//                   <h4 className="mb-6 mt-3 font-semibold text-[1.5rem]">
//                     <button
//                     onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="text-body-light-12 dark:text-body-dark-12"
//                     >
//                       Make your team a Design driven company
//                     </button>
//                   </h4>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard.
//                   </p>
//                 </article>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <article className="group">
//                   <div className="relative">
//                     <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="w-full aspect-[3/2] rounded-xl overflow-hidden block"
//                     >
//                       <img
//                         src="./img/thumbnail/thumbnail-2.jpg"
//                         alt="Thumbnail"
//                         className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
//                       />
//                     </button>
//                   </div>
//                   <span className="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">
//                     Joe Russell - 17 Agt 2024
//                   </span>
//                   <h4 className="mb-6 mt-3 font-semibold text-[1.5rem]">
//                     <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="text-body-light-12 dark:text-body-dark-12"
//                     >
//                       The newest web framework that changed the world
//                     </button>
//                   </h4>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard.
//                   </p>
//                 </article>
//               </div>
//               <div className="scroll-revealed col-12 sm:col-6 lg:col-4">
//                 <article className="group">
//                   <div className="relative">
//                     <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="w-full aspect-[3/2] rounded-xl overflow-hidden block"
//                     >
//                       <img
//                         src="./img/thumbnail/thumbnail-3.jpg"
//                         alt="Thumbnail"
//                         className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-[2deg]"
//                       />
//                     </button>
//                   </div>
//                   <span className="block mt-6 w-full text-sm text-body-light-10 dark:text-body-dark-10">
//                     Joe Russell - 17 Agt 2024
//                   </span>
//                   <h4 className="mb-6 mt-3 font-semibold text-[1.5rem]">
//                     <button
//                        onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="text-body-light-12 dark:text-body-dark-12"
//                     >
//                       5 ways to improve user retention for your startup
//                     </button>
//                   </h4>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard.
//                   </p>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Clients section */}
//         <section id="clients" className="section-area">
//           <div className="container">
//             <div className="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
//               <h6 className="mb-2 block text-lg font-semibold text-primary">
//                 Clients
//               </h6>
//               <h2 className="mb-6">Our Awesome Clients</h2>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//             <div className>
//               <div className="row">
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/airbnb.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/coca-cola.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/facebook.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/mandiri.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/shopware.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/spotify.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/tunnel-id.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//                 <div className="scroll-revealed text-center p-4 col-12 sm:col-6 md:col-4 lg:col-3">
//                   <img
//                     src="./img/brand/walmart.svg"
//                     alt="Brand Logo Image"
//                     className="h-[40px] inline-block grayscale dark:invert hover:grayscale-0 hover:invert-0"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Contact section */}
//         <section id="contact" className="section-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 xl:col-4">
//                 <div className="row">
//                   <div className="col-12 md:col-6 xl:col-12">
//                     <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
//                       <div>
//                         <i className="lni lni-phone w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
//                       </div>
//                       <div>
//                         <h4 className="text-[1.25rem] text-primary mb-3">
//                           Contact
//                         </h4>
//                         <p className="m-0">0984537278623</p>
//                         <p className="m-0">yourmail@gmail.com</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 md:col-6 xl:col-12">
//                     <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
//                       <div>
//                         <i className="lni lni-map-marker w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
//                       </div>
//                       <div>
//                         <h4 className="text-[1.25rem] text-primary mb-3">
//                           Address
//                         </h4>
//                         <p className="m-0">175 5th Ave, New York, NY 10010</p>
//                         <p className="m-0">United States</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 md:col-6 xl:col-12">
//                     <div className="scroll-revealed py-5 px-6 rounded-xl shadow-card-1 bg-body-light-1 dark:bg-primary-dark-2 flex gap-6 hover:shadow-lg">
//                       <div>
//                         <i className="lni lni-alarm-clock w-[50px] h-[50px] inline-flex items-center justify-center rounded-lg text-[1.25rem] bg-primary text-primary-color" />
//                       </div>
//                       <div>
//                         <h4 className="text-[1.25rem] text-primary mb-3">
//                           Schedule
//                         </h4>
//                         <p className="m-0">24 Hours / 7 Days Open</p>
//                         <p className="m-0">Office time: 10:00 AM - 5:30 PM</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 xl:col-8">
//                 <div className="scroll-revealed bg-body-light-1 dark:bg-primary-dark-2 rounded-xl py-8 sm:py-12 px-6 sm:px-10 z-10 relative shadow-card-1 hover:shadow-lg">
//                   <div className="text-center max-w-[550px] mx-auto mb-12">
//                     <h6 className="mb-2 block text-lg font-semibold text-primary">
//                       Get in Touch
//                     </h6>
//                     <h2 className="mb-3">Ready to Get Started</h2>
//                     <p>
//                       At vero eos et accusamus et iusto odio dignissimos ducimus
//                       quiblanditiis praesentium
//                     </p>
//                   </div>
//                   <form
//                     action="#"
//                     method="POST"
//                     className="flex flex-col gap-6"
//                   >
//                     <div className="row">
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="text"
//                           name="name"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Name"
//                           required
//                         />
//                       </div>
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="email"
//                           name="email"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Email"
//                           required
//                         />
//                       </div>
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="text"
//                           name="phone"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Phone"
//                           required
//                         />
//                       </div>
//                       <div className="col-12 md:col-6">
//                         <input
//                           type="text"
//                           name="subject"
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Subject"
//                           required
//                         />
//                       </div>
//                       <div className="col-12">
//                         <textarea
//                           name="message"
//                           rows={5}
//                           className="block w-full px-5 py-3 rounded-md border border-solid border-alpha-light dark:border-alpha-dark text-inherit text-base focus:border-primary"
//                           placeholder="Type your message"
//                           required
//                           defaultValue={""}
//                         />
//                       </div>
//                       <div className="col-12">
//                         <div className="w-full text-center">
//                           <button
//                             type="submit"
//                             className="inline-block px-5 py-3 rounded-md text-base bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
//                           >
//                             Send Message
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Map section */}
//         <section
//           id="map"
//           className="w-full h-[500px] overflow-hidden -mt-[12rem]"
//         >
//           <object
//             data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.0094028113572!2d98.67188956289421!3d3.583155328672593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1c3eb2fd%3A0x23d431c8a6908262!2sMedan%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1723787393945!5m2!1sid!2sid"
//             className="border-0 w-full h-full"
//           />
//         </section>
//       </main>
//       {/* Footer */}
//       <footer className="bg-primary-dark-2 text-white">
//         <div className="container py-20 lg:py-[100px]">
//           <div className="row">
//             <div className="col-12 order-first lg:col-4">
//               <div className="w-full">
//                 <a href="." className="inline-block mb-5">
//                   <svg
//                     id="FooterBrand"
//                     className="h-[40px]"
//                     data-name="FooterBrand"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 500 118.11"
//                   >
//                     <path
//                       d="M272.26,29.77h14.86V58q0,8.24,1.13,11.44a10,10,0,0,0,3.64,5,10.44,10.44,0,0,0,6.18,1.77,10.75,10.75,0,0,0,6.23-1.75,10.26,10.26,0,0,0,3.81-5.14q.92-2.52.91-10.82V29.77h14.7V54.59q0,15.33-2.42,21a23,23,0,0,1-8.72,10.58q-5.76,3.68-14.64,3.68-9.65,0-15.59-4.3a22.79,22.79,0,0,1-8.37-12q-1.73-5.32-1.72-19.37Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M338.36,29.77h14.69V36.5a25.29,25.29,0,0,1,8.38-6.19,24.53,24.53,0,0,1,10.05-2A18.63,18.63,0,0,1,381.39,31a19.46,19.46,0,0,1,7.11,7.86A23.64,23.64,0,0,1,397.09,31a23.34,23.34,0,0,1,11.12-2.69,20.65,20.65,0,0,1,11,2.9A16.79,16.79,0,0,1,426,38.76q2.08,4.68,2.08,15.24V88.34h-14.8V58.62q0-9.94-2.48-13.48t-7.43-3.52a11.22,11.22,0,0,0-6.75,2.15,12.66,12.66,0,0,0-4.44,5.95q-1.45,3.8-1.46,12.19V88.34h-14.8V60q0-7.86-1.16-11.38a10.27,10.27,0,0,0-3.48-5.25,9.15,9.15,0,0,0-5.61-1.72A11,11,0,0,0,359,43.8a13,13,0,0,0-4.48,6.1q-1.49,3.93-1.49,12.38V88.34H338.36Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M485.31,29.77H500V88.34H485.31V82.15A29,29,0,0,1,476.68,88a24.24,24.24,0,0,1-9.39,1.8q-11.34,0-19.62-8.8t-8.28-21.88q0-13.56,8-22.23a25.55,25.55,0,0,1,19.47-8.66,24.72,24.72,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM469.86,41.83a14.85,14.85,0,0,0-11.32,4.82A17.33,17.33,0,0,0,454,59a17.55,17.55,0,0,0,4.59,12.49,14.85,14.85,0,0,0,11.29,4.9,15.15,15.15,0,0,0,11.48-4.82Q486,66.76,486,59q0-7.65-4.56-12.38A15.31,15.31,0,0,0,469.86,41.83Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M28,29.77h14.7v6a35.37,35.37,0,0,1,9-5.87,22.09,22.09,0,0,1,8.31-1.64,20.09,20.09,0,0,1,14.78,6.08Q80,39.51,80,49.64v38.7H65.45V62.69q0-10.48-.94-13.92a9.57,9.57,0,0,0-3.27-5.25,9.18,9.18,0,0,0-5.78-1.8,10.82,10.82,0,0,0-7.65,3A16,16,0,0,0,43.38,53q-.65,2.74-.64,11.88v23.5H28Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <path
//                       d="M137.42,29.77h14.69V88.34H137.42V82.15A29,29,0,0,1,128.79,88a24.19,24.19,0,0,1-9.38,1.8q-11.34,0-19.63-8.8T91.5,59.16q0-13.56,8-22.23A25.53,25.53,0,0,1,119,28.27a24.69,24.69,0,0,1,9.89,2,27.17,27.17,0,0,1,8.55,6ZM122,41.83a14.87,14.87,0,0,0-11.32,4.82A17.37,17.37,0,0,0,106.15,59a17.54,17.54,0,0,0,4.58,12.49A14.85,14.85,0,0,0,122,76.39a15.12,15.12,0,0,0,11.48-4.82q4.56-4.81,4.56-12.62,0-7.65-4.56-12.38A15.3,15.3,0,0,0,122,41.83Z"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <rect
//                       y="29.77"
//                       width="14.69"
//                       height="58.56"
//                       style={{ fill: "#eeeef0" }}
//                     />
//                     <polygon
//                       points="226.39 62.27 232.8 68.67 282.23 118.11 163.48 89.2 196.84 55.84 190.43 49.44 140.99 0 259.75 28.91 226.39 62.27"
//                       style={{ fill: "#3d63dd" }}
//                     />
//                   </svg>
//                 </a>
//                 <p className="mb-8 text-body-dark-11">
//                   We create digital experiences for brands and companies by
//                   using technology.
//                 </p>
//                 <div className="-mx-3 flex items-center">
//                   <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-facebook-fill" />
//                   </button>
//                   <button
//                    onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-twitter-original" />
//                   </button>
//                   <button
//                     onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-instagram-original" />
//                   </button>
//                   <button
//                     onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="px-3 text-body-dark-11 hover:text-primary text-[22px] leading-none"
//                   >
//                     <i className="lni lni-linkedin-original" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6 lg:col-2">
//               <div className="w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-inherit">
//                   Solutions
//                 </h4>
//                 <ul>
//                   <li>
//                     <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Marketing
//                     </button>
//                   </li>
//                   <li>
//                     <a
//                        onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Analytics
//                     </a>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Commerce
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                        onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Insights
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-6 lg:col-2">
//               <div className="w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-inherit">
//                   Support
//                 </h4>
//                 <ul>
//                   <li>
//                     <button
//                         onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Pricing
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Documentation
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                         onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       Guides
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                       className="mb-3 inline-block text-body-dark-11 hover:text-primary"
//                     >
//                       API Status
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-12 -order-3 lg:col-4 lg:order-1">
//               <div className="w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-inherit">
//                   Subscribe
//                 </h4>
//                 <p className="text-body-dark-11">
//                   Subscribe to our newsletter for the latest updates
//                 </p>
//                 <form
//                   action="#"
//                   method="POST"
//                   target="_blank"
//                   className="mt-8 flex"
//                 >
//                   <input
//                     type="email"
//                     name="email"
//                     className="inline-block flex-grow px-5 py-3 rounded-md rounded-e-none border border-solid border-alpha-dark text-inherit text-base focus:border-primary"
//                     placeholder="Email address"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="inline-block py-3 w-[50px] rounded-md rounded-s-none text-center text-lg/none bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10"
//                   >
//                     <i className="lni lni-envelope" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full border-t border-solid border-alpha-dark" />
//         <div className="container py-8">
//           <div className="flex flex-wrap">
//             <div className="w-full md:w-1/2">
//               <div className="my-1">
//                 <div className="flex flex-wrap justify-center gap-x-3 md:justify-start">
//                   <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="text-body-dark-11 hover:text-body-dark-12"
//                   >
//                     Privacy Policy
//                   </button>
//                   <button
//                     onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="text-body-dark-11 hover:text-body-dark-12"
//                   >
//                     Legal Notice
//                   </button>
//                   <button
//                      onClick={() => {
//                           /* Add your according need logic here */
//                         }}
//                     className="text-body-dark-11 hover:text-body-dark-12"
//                   >
//                     Terms of Service
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="my-1 flex justify-center md:justify-end">
//                 <p className="text-body-dark-11">
//                   © 2024 Inazuma Inc. All rights reserved.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <button
//         type="button"
//         className={`inline-flex w-12 h-12 rounded-md items-center justify-center text-lg/none bg-primary text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 fixed bottom-[117px] right-[20px] hover:-translate-y-1 z-50 ${
//           showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//         data-web-trigger="scroll-top"
//       >
//         <i className="lni lni-chevron-up  " />
//       </button>

//       {/* <button
//         type="button"
//         className={`inline-flex w-12 h-12 rounded-full items-center justify-center text-white bg-blue-600 hover:bg-blue-700 fixed bottom-[30px] right-[30px] shadow-lg hover:-translate-y-1 z-50 transition-transform duration-300 ${
//           showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 14l-7-7m0 0l-7 7m7-7v18"
//           />
//         </svg>
//       </button> */}
//     </div>
//   );
// }
