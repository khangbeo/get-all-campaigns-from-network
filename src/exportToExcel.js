import { utils, write } from 'xlsx';

const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
};

const exportToExcel = (data) => {
  const ws = utils.json_to_sheet(data, { header: ['name', 'id'] });
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'Campaigns');

  const wbout = write(wb, { bookType: 'xlsx', type: 'binary' });
  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `Campaigns.xlsx`;
  link.click();
};

export default exportToExcel;
