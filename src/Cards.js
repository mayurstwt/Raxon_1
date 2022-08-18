import "./styles.css";

export default function Cards() {
  return (
    <>
      <div className="Upper_Text">
        <h2 className="text-center">WHY CHOOSE US</h2>
        <hr />
        <h4 className="text-center">100% reliable for exponential growth</h4>
      </div>

      <section class="text-gray-600 body-font">
        <div class="home container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    10+ years of e-commerce experience
                  </h2>
                  <p class="mb-4">
                    We are into e-commerce business since the inception of
                    e-commerce business in India. We have sold or selling in all
                    top e-commerce platforms in India and US/UK
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Pan India Presence
                  </h2>
                  <p class="mb-4">
                    Faster Delivery is the key to better customer experience. We
                    understand this.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Timely payments
                  </h2>
                  <p class="mb-4">
                    Timely payments are required for maintaining health business
                    relations.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Customer Focus
                  </h2>
                  <p class="mb-4">
                    Customer is everything for us. If customer is not satisfied,
                    we are not satisfied
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
