import { ETH, BAT, USDC, WBTC, TUSD, ZRX, KNC } from '@makerdao/dai-plugin-mcd';

export default [
  {
    slug: 'eth-a', // URL param
    symbol: 'ETH-A', // how it's displayed in the UI
    key: 'ETH-A', // the actual ilk name used in the vat
    gem: 'ETH', // the actual asset that's being locked
    currency: ETH, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli',"matic"]
  },
  {
    slug: 'bat-a',
    symbol: 'BAT-A',
    key: 'BAT-A',
    gem: 'BAT',
    currency: BAT,
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli',"matic"]
  },
  {
    slug: 'usdc-a',
    symbol: 'USDC-A',
    key: 'USDC-A',
    gem: 'USDC',
    currency: USDC,
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli',"matic"],
    decimals: 6
  },
  {
    slug: 'usdc-b',
    symbol: 'USDC-B',
    key: 'USDC-B',
    gem: 'USDC',
    currency: USDC,
    networks: ['kovan', 'mainnet',"matic"],
    decimals: 6
  },
  {
    slug: 'wbtc-a',
    symbol: 'WBTC-A',
    key: 'WBTC-A',
    gem: 'WBTC',
    currency: WBTC,
    networks: ['kovan', 'mainnet',"matic"],
    decimals: 8
  },
  {
    slug: 'tusd-a',
    symbol: 'TUSD-A',
    key: 'TUSD-A',
    gem: 'TUSD',
    currency: TUSD,
    networks: ['kovan', 'mainnet',"matic"]
  },
  {
    slug: 'knc-a',
    symbol: 'KNC-A',
    key: 'KNC-A',
    gem: 'KNC',
    currency: KNC,
    networks: ['mainnet', 'kovan',"matic"]
  },
  {
    slug: 'zrx-a',
    symbol: 'ZRX-A',
    key: 'ZRX-A',
    gem: 'ZRX',
    currency: ZRX,
    networks: ['mainnet', 'kovan',"matic"]
  }
];
