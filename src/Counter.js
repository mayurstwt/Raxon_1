import "./styles.css";

export default function Counter() {
  return (
    <section class="text-gray-600 body-font Counter">
      <div class="hero container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              11 Years
            </h2>
            <p class="leading-relaxed">Experince</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              1.8K
            </h2>
            <p class="leading-relaxed"> Order Dispatched</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              7
            </h2>
            <p class="leading-relaxed">State Presence</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              10
            </h2>
            <p class="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
