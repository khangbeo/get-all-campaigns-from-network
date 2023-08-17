import { useState, useEffect } from 'react';

const useCampaigns = (formData) => {
  const [campaigns, setCampaigns] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `https://invoca.net/api/2019-05-01/${formData.networkId}/advertisers.json?oauth_token=${formData.token}`
        );
        const advertisers = await response.json();
        const siteIds = advertisers.map((ad) => ad.id_from_network);

        const campaignPromises = siteIds.map((id) =>
          fetch(
            `https://invoca.net/api/2019-05-01/${formData.networkId}/advertisers/${id}/advertiser_campaigns.json?oauth_token=${formData.token}`
          )
        );
        const campaignResponses = await Promise.all(campaignPromises);
        const campaignsData = await Promise.all(
          campaignResponses.map((res) => res.json())
        );

        setCampaigns(campaignsData.flat());
        setFetchStatus(campaignsData.flat().length > 0 ? 'success' : 'empty');
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchStatus('error');
      }
    };

    if (fetchStatus === 'loading') {
      fetchCampaigns();
    }
  }, [fetchStatus, formData]);

  return [campaigns, fetchStatus, setFetchStatus];
};

export default useCampaigns;
