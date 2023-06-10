import React, { useState } from "react";
import "../../styles/workspace/CreateWS.css";

function CreateWS() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [formData, setFormData] = useState({
    workspace: "",
    logo: null,
    additionalInputs: [""],
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData({
        ...formData,
        logo: file,
      });
    }
  };

  // const handleInputChange = (e, index) => {
  //   const updatedInputs = [...formData.additionalInputs];
  //   updatedInputs[index] = e.target.value;
  //   setFormData({
  //     ...formData,
  //     additionalInputs: updatedInputs,
  //   });
  // };

  const handleInputChange = (e, index) => {
    if (index === undefined) {
      // Handling workspace input change
      setFormData({
        ...formData,
        workspace: e.target.value,
      });
    } else {
      // Handling additional inputs change
      const updatedInputs = [...formData.additionalInputs];
      updatedInputs[index] = e.target.value;
      setFormData({
        ...formData,
        additionalInputs: updatedInputs,
      });
    }
  };

  const addInput = () => {
    if (formData.additionalInputs.length < 5) {
      setFormData({
        ...formData,
        additionalInputs: [...formData.additionalInputs, ""],
      });
    }
  };

  const removeInput = (index) => {
    const updatedInputs = [...formData.additionalInputs];
    updatedInputs.splice(index, 1);
    setFormData({
      ...formData,
      additionalInputs: updatedInputs,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div className="text-white p-5">
        {/* <div className="createWorkspace-mainClass bg-white text-black"> */}
        <div>
          <h2 className="text-2xl font-bold mb-6">CREATE YOUR WORKSPACE</h2>
          <p className="text-gray-300 mb-6">
            Please provide the following information to create your own
            workspace.
          </p>
        </div>

        <div className="">
          {/* <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"> */}
          <form className="p-5 w-full max-w-lg rounded-lg shadow-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-username"
                >
                  Workspace Name:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-username"
                  type="text"
                  placeholder="John's Workspace"
                  name="workspace"
                  value={formData.workspace}
                  // onChange={handleInputChange}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                  htmlFor="grid-logo"
                >
                  Upload Logo:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-logo"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleLogoChange}
                />
                <p className="text-gray-300 text-xs italic">
                  Accepted formats: JPEG, PNG
                </p>
                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-32 h-32 mt-4 rounded-lg"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  Enter Wallet Addresses of Users you want to give access to
                  your workspace:
                </label>
                {formData.additionalInputs.map((input, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      className="appearance-none block w-full bg-gray-600 text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder={`Address ${index + 1}`}
                      value={input}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        className="ml-2 text-red-500 focus:outline-none"
                        onClick={() => removeInput(index)}
                      >
                        &#8722;
                      </button>
                    )}
                  </div>
                ))}
                {formData.additionalInputs.length < 5 && (
                  <button
                    className="ml-2 text-green-500 focus:outline-none"
                    type="button"
                    onClick={addInput}
                  >
                    &#43; Add User
                  </button>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateWS;
