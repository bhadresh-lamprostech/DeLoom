import React, { useState } from "react";
import { Web3Storage } from "web3.storage";
import axios from "axios";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import "../styles/userRegistration/UserRegistration.css";
import firstNameIcon from "../assets/images/firstNameIcon.png";
import usernameIcon from "/src/assets/images/usernameIcon.png";
import emailIcon from "/src/assets/images/emailIcon.png";
import photoIcon from "/src/assets/images/photoIcon.png";
import registrationPageImage from "/src/assets/images/Ragistration page image.png";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRDOGI5MDZiNUIyMjJFM2Y4MTUzRTI1OEE3OEFGNzZCQkU2NDdGYzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NjMwMDQ2MzcsIm5hbWUiOiJkZW1vYWJjIn0.2L8rKiCD-eVUwuxz1AFXy6fy5Foh71QZQLZXe5QedcU",
});

function UserRegistration() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [imageCid, setImageCid] = useState();
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 9000) + 1000,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    logo: null,
  });
  const [isLogoUploading, setIsLogoUploading] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const { address } = useAccount();
  const walletAddress = address;

  const navigate = useNavigate();

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
    logoUpload();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const logoUpload = async () => {
    setIsLogoUploading(true);

    const fileInput = document.querySelector('input[type="file"]');
    const rootCid = await client.put(fileInput.files, {
      name: "logo_image",
      maxRetries: 3,
    });

    const res = await client.get(rootCid);
    const files = await res.files(logoPreview);
    for (const file of files) {
      setImageCid(`${file.cid}`);
    }

    setIsLogoUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);

    await logoUpload();

    const data = {
      id: formData.id,
      firstname: formData.firstName,
      lastname: formData.lastName,
      username: formData.username,
      email: formData.email,
      logocid: imageCid,
      address: walletAddress,
    };
    console.log(data);

    axios
      .post("https://videapi.vercel.app/insertuserdata", data)
      .then((response) => {
        console.log(response.data);
        navigate("/profile-page");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsFormSubmitting(false);
      });
  };

  return (
    <>
      <div className="UserRegistrationMainPageClass">
        <div className="ImageAndFormMainDivClass">
          <div className="ImageDivMainClass">
            <img className="ImageTagMain" src={registrationPageImage} alt="" />
            <b className="registrationPageTitleOnImg absolute text-white ">
              Registration <p>Page</p>
            </b>
          </div>
          <div className="FormDivMainClass">
            <form className="formContentsReg">
              <div className="form-row">
                <div className="form-group mr-2">
                  <span className="input-icon">
                    <img
                      className="smallIconsInForm"
                      src={firstNameIcon}
                      alt="First Name"
                    />
                  </span>
                  <input
                    className="regFormInputsMain"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="regFormInputsMain"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <img
                    className="smallIconsInForm"
                    src={usernameIcon}
                    alt="Username"
                  />
                </span>
                <input
                  className="regFormInputsMain"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <img
                    className="smallIconsInForm"
                    src={emailIcon}
                    alt="Email"
                  />
                </span>
                <input
                  className="regFormInputsMain"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <img
                    className="smallIconsInForm"
                    src={photoIcon}
                    alt="Upload Photo"
                  />
                </span>
                <input
                  className="regFormInputsMain"
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleLogoChange}
                  required
                />
                {isLogoUploading && (
                  <div className="text-white">Loading logo...</div>
                )}
                {logoPreview && (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-20 h-20 ml-2 object-contain"
                  />
                )}
              </div>
              <button
                className="RegFormSubmitBtn"
                type="submit"
                onClick={handleSubmit}
                disabled={isFormSubmitting}
              >
                {isFormSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
