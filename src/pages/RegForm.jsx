import React, { useState } from 'react';

const RegForm = () => {
  const [logoPreview, setLogoPreview] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">One-Time Registration</h2>
        <p className="text-gray-600 mb-6">Please provide the following information to complete your one-time registration.</p>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-username">
              Username
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="johndoe" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@example.com" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-logo">
              Upload Logo
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-logo" type="file" onChange={handleLogoChange} />
            <p className="text-gray-600 text-xs italic">Accepted formats: JPEG, PNG</p>
            {logoPreview && (
              <img src={logoPreview} alt="Logo Preview" className="w-32 h-32 mt-4 rounded-lg" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
