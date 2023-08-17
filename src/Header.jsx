import React from 'react'

const Header = () => (
  <>
      <h1 className="mb-2 mt-0 text-5xl text-center font-medium leading-tight text-secondary">
          Get All Campaigns From a Network
      </h1>
      <p className="mb-2 mt-0 text-xl text-center font-light leading-tight max-w-lg">
          Only get campaign ids from advertisers that have an id_from_network,
          some of the results displayed will have nothing because the campaign
          doesn't have a campaign id or name.
      </p>
  </>
);

export default Header