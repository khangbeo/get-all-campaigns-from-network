import React, { useState } from 'react';
import ReactTopLoadingBar from 'react-top-loading-bar';
import exportToExcel from './exportToExcel';
import CampaignsTable from './CampaignsTable';
import Button from './Button';
import Form from './Form';
import Header from './Header';
import ErrorOrEmptyState from './ErrorOrEmptyState';
import useCampaigns from './useCampaigns';
import useLoadingBar from './useLoadingBar';

const InvocaAPI = () => {
  const [formData, setFormData] = useState({
    networkId: '',
    token: '',
    error: '',
  });

  const [campaigns, fetchStatus, setFetchStatus] = useCampaigns(formData);
  const loadingBarRef = useLoadingBar(fetchStatus);

  const downloadCampaigns = (campaigns) => {
    const filteredData = campaigns.map((campaign) => ({
      name: campaign.name || 'No name',
      id: campaign.id_from_network || 'No id',
    }));
    exportToExcel(filteredData);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <ReactTopLoadingBar ref={loadingBarRef} />
      <Header />
      <Form
        formData={formData}
        setFormData={setFormData}
        fetchStatus={fetchStatus}
        onSubmit={() => setFetchStatus('loading')}
      />
      {/* for testing table layout */}
      {/* <CampaignsTable campaigns={campaigns} /> */}
      {fetchStatus === 'success' && (
        <>
          <Button
            onClick={() => downloadCampaigns(campaigns)}
            className="btn btn-secondary mb-4"
          >
            Download
          </Button>
          <p>There's {campaigns.length} campaigns</p>
          <CampaignsTable campaigns={campaigns} />
        </>
      )}

      <ErrorOrEmptyState status={fetchStatus} />
    </div>
  );
};

export default InvocaAPI;
