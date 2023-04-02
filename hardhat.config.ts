import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {privateKey1} from "./secrets";

const config: HardhatUserConfig = {
  defaultNetwork: "zkEVMtest",
  networks: {
    hardhat: {
    },
    zkEVMtest: {
      url: "https://rpc.public.zkevm-test.net",
      chainId: "1442",
      accounts: [privateKey1]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

export default config;
