// https://eth-goerli.alchemyapi.io/v2/SYYCzkYmrIkVSKP1SLnbLYDB8Wk4NNUI

require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.alchemyapi.io/v2/SYYCzkYmrIkVSKP1SLnbLYDB8Wk4NNUI ',
            accounts: ['12b6d094815d783ff074894743dea26e12155050c906175c852049f31de57256']
        }
    }
}