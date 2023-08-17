import React from 'react';
import { nanoid } from 'nanoid';

const CampaignsTable = ({ campaigns }) => (
  <div className="relative w-full md:w-2/5">
    <div className="relative z-10 overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="w-1/2 my-2">Name</th>
            <th className="w-1/2 my-2">ID</th>
          </tr>
        </thead>
      </table>
    </div>

    <div className="relative z-0 max-h-[400px] overflow-y-auto">
      <table className="w-full border-collapse">
        <tbody>
          {/* dummy data */}

          {/* <DummyData /> */}
          {campaigns.map(({ name, id_from_network }) => (
            <tr key={nanoid()}>
              <td className="px-4 py-2">{name || 'No name'}</td>
              <td className="px-4 py-2">{id_from_network || 'No id'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CampaignsTable;

const DummyData = () => {
  return (
    <>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
      <tr key={nanoid()}>
        <td className="px-4 py-2">{'No name'}</td>
        <td className="px-4 py-2">{'No id'}</td>
      </tr>
    </>
  );
};
