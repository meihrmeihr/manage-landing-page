import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
    const [show,setShow] = useState(false);
    // menu-btn menu
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className='relative container mx-auto p-6'>
        {/* <!-- Flex container --> */}
        <div className='flex items-center justify-between'>
          {/* <!-- logo --> */}
          <div className='pt-2'>
            <img src='./asset/img/logo.svg' />
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
              <img src='./asset/img/avatar-anisha.png' className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Anisha Li</h5>
              <p className='text-sm text-gray-500'>
                "Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated."
              </p>
            </div>
            {/* <!-- Testimonials 2 --> */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
              <img src='./asset/img/avatar-ali.png' className='w-16 -mt-14' />
              <h5 className='text-lg font-bold'>Ali Bravo</h5>
              <p className='text-sm text-gray-500'>
                "We have been able to cancel so many other subscriptions since
                everyone is much more focused"
              </p>
            </div>
            {/* <!-- Testimonials 3 --> */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3'>
              <img src='./asset/img/avatar-richard.png' className='w-16 -mt-14' />
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
              <img src='./asset/img/logo-white.svg' className='h-8' />
            </div>
            {/* <!-- Social link container --> */}
            <div className='flex justify-center space-x-4 md:pr-3'>
              {/* <!-- Link 1 --> */}
              <Link to={`#`}>
                <img src='./asset/img/icon-facebook.svg' className='h-8' />
              </Link>
              {/* <!-- Link 2 --> */}
              <Link to={`#`}>
                <img src='./asset/img/icon-youtube.svg' className='h-8' />
              </Link>
              {/* <!-- Link 3 --> */}
              <Link to={`#`}>
                <img src='./asset/img/icon-twitter.svg' className='h-8' />
              </Link>
              {/* <!-- Link 4 --> */}
              <Link to={`#`}>
                <img src='./asset/img/icon-pinterest.svg' className='h-8' />
              </Link>
              {/* <!-- Link 5 --> */}
              <Link to={`#`}>
                <img src='./asset/img/icon-instagram.svg' className='h-8' />
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
    </>
  );
}
