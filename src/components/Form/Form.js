import style from "./Form.module.css";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";


const Form = ({ size, initialFormState = 'initial' }) => {
  const sizeClass = size === "large" ? style.formLarge : style.formSmall;
  const [formState, setFormState] = useState(initialFormState);
  const [buttonText, setButtonText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthorized } = useAuth();

  useEffect(() => {
    if (formState === "initial") {
      setButtonText("Connect Wallet");
    } else if (formState === "createAddress") {
      setButtonText("Protect my Address");
    }
  }, [formState]);

  const handleClick = () => {
    console.log("button");
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
        navigate("/authorized");
      }, 2000);
    } catch (e) {
      console.error(`Error: ${e.message}`);
      setFormState("initial");
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
          <Button size="large" isLoading={isLoading} onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </form>
  );
};

export default Form;
