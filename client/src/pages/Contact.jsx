const Contact = () => {
  return (
    <main className="bg-gray-100 p-4 min-h-screen">
      <section className="container mx-auto p-8 flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-8 text-logo_blue">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We would love to hear from you. Reach out to us through the
            following channels:
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-logo_green">
              Email
            </h2>
            <p>
              <a
                href="mailto:contact@nsdesite.com"
                className="flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  className="h-4 w-4 mr-2 "
                >
                  <g data-name="Layer 2">
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
                info@example.com
              </a>
            </p>
          

          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-logo_green">Phone</h2>
            <p><a href="tel:+123456789" className="flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone"  className="h-4 w-4 mr-2 " ><g data-name="Layer 2"><g data-name="phone"><rect width="24" height="24" opacity="0"></rect><path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z"></path></g></g></svg> +1 (234) 567-89</a></p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-logo_green">Address</h2>
            <p className="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="earth" className="h-4 w-4 mr-2 " ><path d="M357.275 125.525c-2.209-3.986-9.498-11.837-13.977-13.325-5.979-.921-2.398 4.413-2.398 6.7-1.543 1.157-3.941 2.454-5.102 4-.699.6 1.704 6.103 6.337 4.335s1.964 1.799 5.164 8.865 9.607 7.207 12.49 5.067c3.655-2.712-.503-12.012-2.514-15.642zM375.8 170.6l-.005.017c0 .012.002.012.005-.017zM434.6 197.1c.4 0-1.8-.4 0 0z"></path><path d="M256 32C132.3 32 32 132.3 32 256c0 123.701 100.3 224 224 224 123.701 0 224-100.299 224-224 0-123.7-100.299-224-224-224zm-82.601 397.424c-5.515-3.133-9.374-7.56-10.961-15.929-3.947-20.808-.303-32.067 17.962-44.245 8.604-5.736 10.022-12.672 16.9-19.55 1.685-2.14 6.211-10.374 9.2-10.8 3.637-.779 13.709-2.527 15.7-6.5 3.79-5.146 12.127-27.398 15.8-29.602 5.997-3.925 14.419-15.96 8.3-23.1-7.021-8.643-16.799-8.766-25.9-13.301-8.015-4.008-11.574-22.281-17.7-28.601-11.912-12.136-29.999-19.199-45-26.7-8.116-3.25-7.344-4.256-13.7 2.1-8.162 8.162-20.093-2.067-21.3-10.5-.09-2.802-3.296-18.216-1.4-19.4 17.956-11.225-8.328-8.64-10.5-13.8-5.355-14.993 13.008-26.86 25.4-28.1 13.885-1.738 16.784 21.895 22.1 19.9 2.556-1.276 2.566-12.394 2.9-14.8 1.267-8.029 3.588-9.273 11.4-12.175 9.098-3.379 16.063-7.617 25.7-9.225 11.006-3.195 20.317-1.533 28.8-8.6 3.888-2.915 6.704 1.58 10.4 2.4 7.999 1.599 9.7-11.1 9.7-15.9-.034-4.665 1.265-8.63-4.7-13.6-7.806-6.069-19.029-.869-25.3 5.4-7.574 7.035-16.357 6.55-13.8-5.6.634-4.433 10.209-9.587 14-12 3.7-2.222 5.904 2.522 10.4 1.4 6.579-1.463 9.034 4.735 16.8 4.8 3.233-.731 14.796-6.881 8.614-19.366.929-.009 1.856-.03 2.786-.03 1.855 0 3.707.034 5.555.086C264.36 72.967 255.59 80.529 260 91.7c8.79 21.475 15.992 3.014 24.7-7 2.849-2.849 4.633-2.211 9.3-3.1 2.896-.483 7.055-9.27 8.393-11.982a189.668 189.668 0 0 1 56.567 24.255c-7.447.792-9.348-1.396-9.234 7.377.042 3.317.297 13.319 5.274 14.15 8.277.975 6.781 6.832 14.551 7.85 7.443.976 2.816 7.553 5.851 14.05 3.393 10.227-19.806 13.302-24.302 14.8-13.64 4.554 6.34 24.41 15.2 22.3 2.817-.704 12.215-1.902 12.867-5.067-.011-.323-1.836-11.012-.867-12.233 1.533-1.934 5.123-2.946 10.776.255 13.374 7.573 20.146 25.7 35.897 29.295 2.146.489 5.86-.15 8.494 2.033 2.231 3.015 7.92 8.416 1.131 8.416-9.017-2.003-13.78.859-21.198-4.874-7.733-5.977-12.543-10.891-22.75-11.076-8.79-.159-16.68-3.819-25.738-2.35-5.05.819-10.038 2.811-14.912 4.3-4.617 1.538-5.51 9.765-10.2 10.7-19.467 4.581-15.261 23.169-18.773 37.913-1.351 5.662-6.025 21.003-.926 26.087 9.12 8.854 19.783 21.035 33.176 22.963 7.206 1.037 22.954-4.576 27.823 2.737 2.062 4.104 7.447-3.03 8.9.601 3.663 10.988-4.263 18.186-4.337 28.551-.11 15.203 9.178 20.57-3.263 34.148-13.642 13.607-4.333 30.788-11.9 47-4.042 8.337-4.808 19.894-10.872 23.777a190.712 190.712 0 0 1-42.714 20.384c-26.627 8.838-55.155 11.672-83.017 8.456a190.256 190.256 0 0 1-42.88-10.065c-3.769-1.363-7.28-2.505-10.472-3.704a192.177 192.177 0 0 1-7.146-3.223zm-41.7-27.095c-.468-.397-.935-.796-1.399-1.198a196.087 196.087 0 0 1-10.06-9.371 195.58 195.58 0 0 1-9.734-10.471l-.105-.123c-.637-.738-1.257-1.486-1.882-2.234C56.834 316.471 49.259 225.004 92.6 155.1c6.078 6.078-4.101 18.024 7.5 26 5.124 3.606 10.021 2.159 9 8.8-.993 6.449 5.355 6.335 6.3 12 2.842 12.429 19.207 18.642 9.9 32.6-9.118 12.625-16.992 26.729-10.1 42.8 2.254 5.86 7.919 11.858 12.222 16.244 7.813 7.966 7.377 3.188 7.377 13.256-.156 4.373 5.261 8.897 4.7 11.7-1.001 8.011-2.904 15.93-3.9 23.9-1.792 28.638-.129 56.662 21.3 78.1-7.969-4.806-15.636-10.249-22.968-16.29a196.52 196.52 0 0 1-2.232-1.881z"></path></svg>  Netherland</p>
          </div>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress"
            alt="contact-image hands-together"
            className="rounded  shadow-md shadow-logo_yellow hover:scale-[1.1] transition-transform duration-200"
          />
        </div>
      </section>

      <section className="p-8 mt-8 container mx-auto flex flex-col gap-2 md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="diversity people-hugged"
            className="rounded md:h-[25rem] shadow-md shadow-logo_yellow hover:scale-[1.1] transition-transform duration-200"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-logo_blue">
            Send us a Message
          </h2>
          <form>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-logo_yellow mb-4"
              required
            />

            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-logo_yellow mb-4"
              required
            />

            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-logo_yellow mb-4"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-logo_blue p-2 rounded-md text-[#f1f1f1] hover:bg-logo_red transition duration-200 mt-4 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
export default Contact;
