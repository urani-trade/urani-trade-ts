export default function Footer() {
  return (
    <footer className="bg-purple dark:bg-gray-900 text-purple-light">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4"></div>
        </div>
        <hr className="my-6 border-purple-light sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="flex items-center justify-between">

            <span className="text-sm sm:text-base">
              <b>2024 © trade.different </b>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center order-2 sm:order-1">
            <div className="flex sm:justify-center items-center mb-8 sm:mb-0 ">
              <a
                href="/terms/conditions"
                className="hover:text-decoration-line text-sm sm:text-base mr-4"
              >
                <span>
                  <b>Terms</b>
                </span>
              </a>

              <a
                href="/terms/privacy"
                className="hover:text-decoration-line text-sm sm:text-base mr-4"
              >
                <span>
                  <b>Privacy</b>
                </span>
              </a>

              <a
                href="/media-kit"
                className="hover:text-decoration-line text-sm sm:text-base mr-4"
              >
                <span>
                  <b>Media</b>
                </span>
              </a>

              <a
                href="/careers"
                className="hover:text-decoration-line text-sm sm:text-base mr-4"
              >
                <span>
                  <b>Careers</b>
                </span>
              </a>
              
              <a
                href="/values"
                className="hover:text-decoration-line text-sm sm:text-base sm:mr-4"
              >
                <span>
                  <b>Values</b>
                </span>
              </a>

              <a
                href="https://jewandwitch.com/pages/swag"
                className="hover:text-decoration-line text-sm sm:text-base sm:mr-4"
                 target="_blank"
              >
                <span>
                  <b>Swag</b>
                </span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
