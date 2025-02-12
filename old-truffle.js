module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    truffle: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
    },
  },

  compilers: {
    solc: {
      version: "0.8.9",
    },
  },
  contracts_directory: "./smart-contract/contracts",
};
