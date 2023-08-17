import React from 'react';
import InputField from './InputField';
import Button from './Button';
import LoadingCircle from './LoadingCircle';

const Form = ({ formData, setFormData, fetchStatus, onSubmit }) => {
  const validateInputs = () => {
    if (!formData.networkId.trim()) {
      setFormData((prev) => ({ ...prev, error: 'Network ID is required.' }));
      return false;
    }
    if (!formData.token.trim()) {
      setFormData((prev) => ({ ...prev, error: 'OAuth Token is required.' }));
      return false;
    }
    setFormData((prev) => ({ ...prev, error: '' }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      onSubmit();
    }
  };

  return (
    <form className="flex flex-col space-y-5 my-10" onSubmit={handleSubmit}>
      <InputField
        id="networkId"
        value={formData.networkId}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, networkId: value }))
        }
        placeholder="Enter Network ID"
        disabled={fetchStatus === 'loading'}
      />
      <InputField
        id="oauthToken"
        value={formData.token}
        onChange={(value) => setFormData((prev) => ({ ...prev, token: value }))}
        placeholder="Enter OAuth Token"
        disabled={fetchStatus === 'loading'}
      />
      {formData.error && <p className="text-red-600">{formData.error}</p>}
      <Button
        className="btn btn-secondary"
        type="submit"
        disabled={fetchStatus === 'loading'}
      >
        {fetchStatus === 'loading' && <LoadingCircle />}
        {fetchStatus === 'loading' ? 'Processing' : 'Get Campaigns'}
      </Button>
    </form>
  );
};

export default Form;
