import MarketplaceConfigInterface from "./MarketplaceConfigInterface";

export const openSea: MarketplaceConfigInterface = {
  name: "OpenSea",
  generateCollectionUrl: (marketplaceIdentifier: string, isMainnet: boolean) =>
    "https://" +
    (isMainnet ? "www" : "testnets") +
    ".opensea.io/collection/" +
    marketplaceIdentifier,
};

export const customMarketPlace: MarketplaceConfigInterface = {
  name: "tofu",
  generateCollectionUrl: (marketplaceIdentifier: string, isMainnet: boolean) =>
    "https://" +
    (isMainnet ? "www" : "testnets") +
    ".opensea.io/collection/" +
    marketplaceIdentifier,
};
