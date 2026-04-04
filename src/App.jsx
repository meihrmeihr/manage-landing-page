import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
    const [show,setShow] = useState(false);
    // menu-btn menu
  return (
    <main>
    
      {/* <!-- Navbar --> */}
      <nav className='relative container mx-auto p-6'>
        {/* <!-- Flex container --> */}
        <div className='flex items-center justify-between'>
          {/* <!-- logo --> */}
          <div className='pt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24"><g fill="none" fillRule="evenodd"><path fill="#242D52" fillRule="nonzero" d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"/><g fill="#F3603C"><path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z"/><ellipse cx="12.814" cy="13.257" opacity=".5" rx="2.786" ry="2.857"/></g></g></svg>
          </div>
          {/* <!-- menu items --> */}
          <div className='hidden md:flex space-x-6'>
            <a to={`#`} className='hover:text-gray-500'>
              Pricing
            </a>
            <a to={`#`} className='hover:text-gray-500'>
              Product
            </a>
            <a to={`#`} className='hover:text-gray-500'>
              About Us
            </a>
            <a to={`#`} className='hover:text-gray-500'>
              Careers
            </a>
            <a to={`#`} className='hover:text-gray-500'>
              Community
            </a>
          </div>
          {/* <!-- Button --> */}
          <Link
            to={`#`}
            className='hidden md:block p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-red-500'
          >
            Get Started
          </Link>
          {/* <!-- Humburger Icon--> */}
          <button
            id='menu-btn'
            className='block hamburger md:hidden focus:outline-none'
            onClick={()=>{setShow((prev)=>!prev)}}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div className='md:hidden'>
          <div
            id='menu'
            className={`${show ? "flex":"hidden"} flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <Link to='#'>Pricing</Link>
            <Link to='#'>Products</Link>
            <Link to='#'>About Us</Link>
            <Link to='#'>Careers</Link>
            <Link to='#'>Community</Link>
          </div>
        </div>
      </nav>
      {/* <!-- Hero section --> */}
      <section id='hero'>
        {/* <!-- flex container --> */}
        <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 md:flex-row md:space-y-0'>
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2 pl-10'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
              Bring everyone together to build better products
            </h1>
            {/* <!-- left item --> */}
            <p className='max-w-sm text-center text-gray-500 md:text-left'>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals i view.
            </p>
            <div className='flex justify-center md:justify-start'>
              <Link
                to={`#`}
                className='p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-red-500'
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* <!-- images --> */}
          <div className='md:w-1/2'>
            <img src='./asset/img/illustration-intro.svg' />
          </div>
        </div>
      </section>
      {/* <!-- feature section --> */}
      <section id='features'>
        {/* <!-- flex container --> */}
        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          {/* <!-- what's different --> */}
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              What's different about Manage?
            </h2>
            <p className='max-w-sm text-center text-gray-500 md:text-left'>
              Manage provides all the functionality for modern digital product
              team.
            </p>
          </div>
          {/* <!-- numbered list --> */}
          <div className='flex flex-col space-y-8 md:w-1/2'>
            {/* <!-- list items 1 --> */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/* <!-- heading --> */}
              <div className='rounded-l-full bg-orange-200 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-orange-500'>
                    01
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Track company-wide progress
                </h3>
                <p className='text-gray-500'>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>

            {/* <!-- list items 2 --> */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/* <!-- heading --> */}
              <div className='rounded-l-full bg-orange-200 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-orange-500'>
                    02
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Advanced built-in reports
                </h3>
                <p className='text-gray-500'>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you built out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            {/* <!-- list items 3 --> */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/* <!-- heading --> */}
              <div className='rounded-l-full bg-orange-200 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-orange-500'>
                    03
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Everything you need in one place
                </h3>
                <p className='text-gray-500'>
                  Stop jumping from one services to another to communicate,
                  store files, track tasks and share documents. manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonials --> */}
      <section id='testimonials'>
        {/* <!-- Container to heading and testm blocks --> */}
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          {/* <!-- heading --> */}
          <h2 className='text-4xl font-bold text-center'>
            What's Aifferent About Manage?
          </h2>
          {/* <!-- Testimonials Container--> */}
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            {/* <!-- Testimonials 1 --> */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
              <img src='https://comforting-dragon-38adda.netlify.app/build/img/avatar-anisha.avif' className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Anisha Li</h5>
              <p className='text-sm text-gray-500'>
                "Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated."
              </p>
            </div>
            {/* <!-- Testimonials 2 --> */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
              <img src='https://comforting-dragon-38adda.netlify.app/build/img/avatar-ali.avif' className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Ali Bravo</h5>
              <p className='text-sm text-gray-500'>
                "We have been able to cancel so many other subscriptions since
                everyone is much more focused"
              </p>
            </div>
            {/* <!-- Testimonials 3 --> */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
              <img src='https://comforting-dragon-38adda.netlify.app/build/img/avatar-richard.avif' className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Richard Watts</h5>
              <p className='text-sm text-gray-500'>
                "Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated."
              </p>
            </div>
          </div>
          {/* <!-- Button --> */}
          <div className='my-16'>
            <Link
              to={`#`}
              className='p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline hover:bg-red-500'
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- CTA section --> */}
      <section id='cta' className='bg-orange-500'>
        {/* <!-- flex container --> */}
        <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
          {/* <!-- heading --> */}
          <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
            Simplify how your team works today
          </h2>
          {/* <!-- Button --> */}
          <div>
            <Link
              to={`#`}
              className='p-3 px-6 pt-2 text-orange-500 bg-white rounded-full baseline hover:bg-slate-900'
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <footer className='bg-slate-950'>
        {/* <!-- flex container --> */}
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
          {/* <!-- logo and social links container --> */}
          <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
            <div className='mx-auto my-6 text-center text-white md:hidden'>
              Copyright &copy;2022,All Rights Reserved
            </div>
            {/* <!-- logo --> */}
            <div className='pt-5 md:pr-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8"><g fill="none" fillRule="evenodd"><path fill="#FFFFFF" fillrule="nonzero" d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"/><g fill="#F3603C"><path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z"/><ellipse cx="12.814" cy="13.257" opacity=".5" rx="2.786" ry="2.857"/></g></g></svg>
            </div>
            {/* <!-- Social link container --> */}
            <div className='flex justify-center space-x-4 md:pr-3'>
              {/* <!-- Link 1 --> */}
              <Link to={`https://www.facebook.com/`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white hover:fill-blue-400"><path  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
              </Link>
              {/* <!-- Link 2 --> */}
              <Link to={`https://www.youtube.com/`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white hover:fill-red-400"><path d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
              </Link>
              {/* <!-- Link 3 --> */}
              <Link to={`https://x.com/`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white hover:fill-blue-400"><path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
              </Link>
              {/* <!-- Link 4 --> */}
              <Link to={`https://www.pinterest.com/`}>
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-8 fill-white hover:fill-red-400"><path d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
              </Link>
              {/* <!-- Link 5 --> */}
              <Link to={`https://www.instagram.com/`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white hover:fill-red-300"><path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>
              </Link>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className='flex justify-around space-x-32'>
            <div className='flex flex-col space-y-3 text-white'>
              <Link to={`#`} className='hover:text-orange-500'>
                Home
              </Link>
              <Link to={`#`} className='hover:text-orange-500'>
                Pricing
              </Link>
              <Link to={`#`} className='hover:text-orange-500'>
                Products
              </Link>
              <Link to={`#`} className='hover:text-orange-500'>
                About
              </Link>
            </div>
            <div className='flex flex-col space-y-3 text-white'>
              <Link to={`#`} className='hover:text-orange-500'>
                Career
              </Link>
              <Link to={`#`} className='hover:text-orange-500'>
                Community
              </Link>
              <Link to={`#`} className='hover:text-orange-500'>
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* <!-- Input Container --> */}
          <div className='flex flex-col justify-between'>
            <form>
              <div className='flex space-x-3'>
                <input
                  type='text'
                  className='flex-1 px-4 bg-white rounded-full focus:outline-none'
                  placeholder='Updated in your inbox'
                />
                <button className='px-6 py-2 text-white rounded-full bg-orange-500 hover:bg-red-500 focus:outline-none'>
                  Go
                </button>
              </div>
            </form>
            <div className='hidden text-white md:block'>
              Copyright &copy;2022,All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
