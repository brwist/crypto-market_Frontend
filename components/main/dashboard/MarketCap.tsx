import React from 'react'
import Image from 'next/image'

import FI25_icon from '../../../assets/images/tokens_icons/fi25.png'
import GOLDFI_icon from '../../../assets/images/tokens_icons/fi10.png'
import METAFI_icon from '../../../assets/images/tokens_icons/metafi.png'

const styles = {
  outlined_button:
    'py-1 px-2 text-sm text-orange-FIDIS border border-orange-FIDIS rounded-lg text-center',
}

const MarketCap = () => {
  const dummy_data = [
    {
      token_name: 'FI25',
      token_icon: FI25_icon,
      balance: 208.3,
      balance_in_dollars: 4,582.60,
      change: 0.56,
      change_percentage: 2.54,
    },
    {
      token_name: 'GoldFI',
      token_icon: GOLDFI_icon,
      balance: 1.38,
      balance_in_dollars: 2,760.00,
      change: 26.85,
      change_percentage: 1.34,
    },
    {
      token_name: 'MetaFi',
      token_icon: METAFI_icon,
      balance: 0,
      balance_in_dollars: 0,
      change: 4.86,
      change_percentage: 8.68,
    },
    {
      token_name: 'NFTFI',
      token_icon: FI25_icon,
      balance: 0,
      balance_in_dollars: 0,
      change: 6.87,
      change_percentage: 6.92,
    },
    {
      token_name: 'GameFi',
      token_icon: METAFI_icon,
      balance: 0,
      balance_in_dollars: 0,
      change: 45.32,
      change_percentage: 3.53,
    },
    {
      token_name: 'DeFiFi',
      token_icon: GOLDFI_icon,
      balance: 0,
      balance_in_dollars: 0,
      change: 18.22,
      change_percentage: 5.44,
    },
  ]
  return (
    <div className="scrolltype col-span-5  w-full overflow-auto  rounded bg-black/30 px-3 py-6 pt-2 ">
      <nav className="flex items-center justify-between py-2">
        <h1 className="text-xl font-medium">Market Cap</h1>
      </nav>
      <div className="market-cap-table w-full border-collapse text-left ">
        <div className="mr-4 flex items-center justify-between whitespace-nowrap border-y border-gray-300/30 text-center text-xs text-gray-300/80">
          <div className="basis-5/12 py-2 text-left xxl:py-6">Token Name</div>
          <div className="basis-3/12 text-center font-medium text-green-increased-value">Balance</div>
          <div className="basis-4/12 text-right">24 Hr Change</div>
        </div>
        <div className="pr-4 ">
          {dummy_data.map((token, index) => (
            <div
              key={index}
              // dont add a border bottom to the last raw
              className={`flex items-center justify-between ${
                index !== dummy_data.length - 1
                  ? 'border-b-[1px] border-b-slate-600'
                  : ''
              } py-2 text-right`}
            >
              <div className="flex basis-5/12 items-center gap-2 py-3 font-bold">
                <Image
                  src={token.token_icon}
                  height={26}
                  width={26}
                  alt={`${token.token_name} icon`}
                />
                {token.token_name}
              </div>
              <div
                className={`${
                  token.balance === 0 ? 'text-orange-FIDIS' : ''
                } basis-3/12 text-center font-bold`}
              >
                {token.balance}
                {token.balance_in_dollars !== 0 && (
                  <span className="block text-xs font-medium text-green-increased-value">
                    ≈ ${token.balance_in_dollars}
                  </span>
                )}
              </div>
              <div className="basis-4/12 font-bold">
                $ {token.change}
                <span
                  className={`block text-xs font-medium ${
                    token.change_percentage >= 0
                      ? 'text-green-increased-value'
                      : 'text-red-decreased-value'
                  }`}
                >
                  {token.change_percentage > 0
                    ? '+' + token.change_percentage
                    : token.change_percentage}
                  %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketCap