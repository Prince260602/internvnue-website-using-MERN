import "../../css/RequestFeature.css";
function RequestAFeature() {
  return (
    <div className="App">
      <div className="align-center h-auto">
        <div className="bg-pic h-60 bg-center"></div>
        <div className="w-full md:w-10/12 md:ml-8 lg:w-2/5 lg:ml-96 h-screen ">
          <div className="ml-4">
            <img
              className="max-w-52"
              src="https://v5.airtableusercontent.com/v3/u/29/29/1718200800000/VYEW0ycX-r83yLUu_imF5w/mwjCNkC5oe0vB6z0_8Rap8hHQfCvBB12tIc1YnxLZeqv_FL_0L2N31UjBDj2UjkZKHVy86b_DhZ3RwTkhA_6j05QohCH-3YwQRBB47G5yTTye66yG3Y_e400Jqb3Ix8J6KMcX5hlqh7R4q3Z8nsUiQ/HoqVi-vwArSAiqpxX7TCN63lxmHkfEz8IvGHIA-CAuU"
              alt="Logo"
            />
          </div>

          <div className="ml-4">
            <h1 className="text-3xl font-semibold text-left">
              Feature submission Form
            </h1>
            <h1 className="text-xl font-light text-left">
              Have an idea for a new feature? Submit it here!
            </h1>
          </div>

          <div className="ml-4 mt-24 flex flex-col">
            <div className="flex flex-row">
              <h1 className="text-left text-lg">Your name&nbsp; </h1>
              <h1 className="text-base text-red-500">*</h1>
            </div>
            <div className="mb-3 mr-4">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>

          <div className="ml-4 mt-16 flex flex-col">
            <div className="flex flex-row">
              <h1 className="text-left text-lg">Feature Name&nbsp;</h1>
              <h1 className="text-base text-red-500">*</h1>
            </div>
            <p className="text-left text-gray-500">
              Please provide a brief name for this feature.
            </p>

            <div className="mb-3 mr-4">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>

          <div className="ml-4 mt-16 flex flex-col">
            <div className="flex flex-row">
              <h1 className="text-left text-lg">Feature Description&nbsp;</h1>
              <h1 className="text-base text-red-500">*</h1>
            </div>
            <p className="text-left text-gray-500 pr-4">
              Please provide details about your ideas for this feature. What
              would it do? How would it work?
            </p>

            <div className="mb-3 mr-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              ></label>
              <textarea
                className="resize-none form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="ml-4 mt-16 flex flex-col justify-start">
            <div className="flex flex-row">
              <h1 className="text-left text-lg">Feature Category&nbsp;</h1>
              <h1 className="text-base text-red-500">*</h1>
            </div>
            <p className="text-left text-gray-500">
              How would we categorize this feature on the back end?
            </p>

            <div className="dropdown  w-2/5">
              <button
                className="btn btn-secondary dropdown-toggle col-12 bg-white justify-start"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              ></button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 ml-4 flex ">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestAFeature;
