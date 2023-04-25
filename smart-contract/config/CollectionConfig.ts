import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";
import NetworkConfigInterface from "../lib/NetworkConfigInterface";

const customNetwork: NetworkConfigInterface = {
  chainId: 9999,
  symbol: "CSTM",
  blockExplorer: {
    name: "My custom network",
    generateContractUrl: (contractAddress: string) =>
      `https://customscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) =>
      `https://customscan.io/address/${transactionAddress}`,
  },
};

const CollectionConfig: CollectionConfigInterface = {
  // testnet: Networks.ethereumTestnet,
  // mainnet: Networks.ethereumMainnet,
  testnet: Networks.emeraldTestnet,
  mainnet: Networks.emeraldMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "CustomName",
  tokenName: "My NFT Token",
  tokenSymbol: "MNT",
  hiddenMetadataUri: "ipfs://QmZSpnt33ecxy1pv7HqQa9hw9i7iP9moKLcT3UaRMCs56f",
  maxSupply: 10000,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 5,
  },
  // contractAddress: "0x7B74d4d14C86CF67158525f7022797ee5Cb1E7e8",
  contractAddress: "0xb1954d22fe872B26bd8dE7af0D50De9838586C37",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea, // change openSea to other one from Marketplaces
  whitelistAddresses,
};

export default CollectionConfig;
