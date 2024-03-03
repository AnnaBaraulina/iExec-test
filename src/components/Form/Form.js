import style from "./Form.module.css";
import Button from "../Button/Button.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext.js";
import { IExecDataProtector } from "@iexec/dataprotector";
import image from "../../images/fi_plus-circle.svg";
import ButtonAccess from "../../pages/ButtonAccess/ButtonAccess.js";

const Form = ({ size, initialFormState = "initial", protectedEmail }) => {
  const web3Provider = window.ethereum;
  const dataProtector = new IExecDataProtector(web3Provider);

  const [formState, setFormState] = useState(initialFormState);
  const [buttonText, setButtonText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [name, setName] = useState("John Doe");
  const navigate = useNavigate();
  const { setIsAuthorized } = useAuth();

  let sizeClass;
  switch (size) {
    case "large":
      sizeClass = style.formLarge;
      break;
    case "medium":
      sizeClass = style.formMedium;
      break;
    case "small":
    default:
      sizeClass = style.formSmall;
      break;
  }

  useEffect(() => {
    if (formState === "initial") {
      setButtonText("Connect Wallet");
    } else if (formState === "createAddress") {
      setButtonText("Protect my Address");
    } else if (formState === "formInputs") {
      setButtonText("Protect my Address");
    }
  }, [formState]);

  const handleShareClick = async (e) => {
    e.preventDefault();

    try {
      const grantedAccess = await dataProtector.grantAccess({
        protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
        authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
      });
      console.log("Access granted successfully", grantedAccess);
    } catch (error) {
      console.error("Error granting access", error);
    }
  };

  const handleCancelClick = () => {
    console.log("Cancel clicked");
  };

  const handleProtectClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonText("Initializing...");
    setTimeout(() => {
      navigate("/create-address");
    }, 2000);
  };

  const handleConnectClick = async (e) => {
    e.preventDefault();
    console.log("Кнопка нажата");
    setButtonText("initializing...");

    try {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        throw new Error("Please install MetaMask plugin first");
      }

      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(`MetaMask unlocked for address ${address}`);

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x86",
            chainName: "iExec Sidechain",
            nativeCurrency: {
              name: "xRLC",
              symbol: "xRLC",
              decimals: 18,
            },
            rpcUrls: ["https://bellecour.iex.ec"],
            blockExplorerUrls: ["https://blockscout-bellecour.iex.ec"],
          },
        ],
      });
      console.log("iExec Sidechain added to MetaMask");

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x86",
          },
        ],
      });
      console.log("MetaMask network switched to iExec Sidechain");

      setTimeout(() => {
        setIsAuthorized(true);
        localStorage.setItem("userWallet", address);
        navigate("/authorized");
      }, 2000);
    } catch (e) {
      console.error(`Error: ${e.message}`);
      setFormState("initial");
    }
  };

  const handleCreateClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonText("Initializing...");

    try {
      const protectedData = await dataProtector.protectData({
        data: {
          email: "example@gmail.com",
        },
      });
      console.log("Protected Data", protectedData);
      localStorage.setItem("protectedEmail", JSON.stringify(protectedData));
      navigate("/share-access");
    } catch (error) {
      console.log("Error protecting data", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={`form ${sizeClass}`}>
      {formState === "initial" && (
        <div className={style.container}>
          <h3 className={style.title}>Grant Access</h3>
          <p className={style.subtitle}>
            <a href="#" className={style.link}>
              0xF048eF3d7E3B33A465E0599E641BB29421f7Df92
            </a>
            would like to get access to you, using iExec secured email service.
          </p>
          <p className={style.text}>Connect your wallet to continue.</p>
          <Button
            size="large"
            isLoading={isLoading}
            onClick={handleConnectClick}
          >
            {buttonText}
          </Button>
        </div>
      )}

      {formState === "createAddress" && (
        <div className={style.container}>
          <h3 className={style.title}>Grant Access</h3>
          <p className={style.subtitle}>
            <a href="#" className={style.link}>
              0xF048eF3d7E3B33A465E0599E641BB29421f7Df92
            </a>
            would like to get access to you, using iExec secured email service.
          </p>
          <p className={style.text}>You have no protected address yet.</p>
          <Button
            size="large"
            isLoading={isLoading}
            onClick={handleProtectClick}
          >
            {buttonText}
          </Button>
        </div>
      )}
      {formState === "formInputs" && (
        <div className={style.container}>
          <h3 className={style.title}>Grant Access</h3>
          <p className={style.subtitle}>
            <a href="#" className={style.link}>
              0xF048eF3d7E3B33A465E0599E641BB29421f7Df92
            </a>
            would like to get access to you, using iExec secured email service.
          </p>
          <p className={style.text}>
            Protect your address with iExec. Your email address stays secret,
            only your name will be shared with the organization.
          </p>
          <div className={style.inputs}>
            <label htmlFor="userEmail">Email Address (secret)</label>
            <input
              id="userEmail"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={style.input}
            ></input>
            <label htmlFor="userName">Name (public)</label>
            <input
              id="userName"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={style.input}
            ></input>
          </div>
          <Button
            size="large"
            isLoading={isLoading}
            onClick={handleCreateClick}
          >
            {buttonText}
          </Button>
        </div>
      )}
      {formState === "shareAccess" && (
        <div className={style.container}>
          <h3 className={style.title}>Grant Access</h3>
          <p className={style.subtitle}>
            <a href="#" className={style.link}>
              0xF048eF3d7E3B33A465E0599E641BB29421f7Df92
            </a>
            would like to get access to you, using iExec secured email service.
          </p>
          <div className={style.protected}>
            <h3 className={style.name}>Parker Griggs</h3>
            <p className={style.email}>**email protected**</p>
          </div>
          <p>
            <img src={image} />
            <a className={style.addAddress} href="#">
              {" "}
              Add new
            </a>
          </p>
          <div className={style.buttonContainer}>
            <ButtonAccess state="cancel" onClick={handleCancelClick} />
            <ButtonAccess state="share" onClick={handleShareClick} />
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
