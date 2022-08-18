import "./styles.css";

export default function Hero_2() {
  return (
    <>
      <div className="Upper_Text">
        <h2 className="text-center">Who We Are</h2>
        <hr />
        <h4 className="text-center">
          We are a team of e-commerce professionals, passionate about holistic
          growth, keeping our partners, shareholders ever growing
        </h4>
      </div>
      <section class="text-gray-600 body-font">
        <div class="hero container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80/720x600"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p class="mb-8 leading-relaxed">
              We offer complete e-commerce solution to manufacturers, brands
              providing customized support to meet their ends need to have an
              ever growing successful business in ecommerce platforms. Our
              approach is always personalized and tweeked as per our customers
              need. We ourselves are sellers and we know what it takes to reach
              at the top level.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
