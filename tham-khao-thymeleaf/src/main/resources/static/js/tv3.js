/* Shared UI interactions only; authorization and business validation must happen in Spring Security/Service. */
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('tv3-sidebar');
  const overlay = document.getElementById('tv3-overlay');
  document.getElementById('tv3-toggle-menu')?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    overlay?.classList.toggle('open');
  });
  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  });
  const file = document.getElementById('tv3-report-file');
  const info = document.getElementById('tv3-fileinfo');
  file?.addEventListener('change', () => {
    const chosen = file.files?.[0];
    if(info) info.textContent=chosen ? `${chosen.name} · ${(chosen.size / 1048576).toFixed(2)} MiB` : 'Chưa chọn tệp';
  });
  document.getElementById('tv3-form-report')?.addEventListener('submit', (event) => {
    const chosen = file?.files?.[0];
    if (!chosen || chosen.size === 0 || chosen.size > 20 * 1024 * 1024 || !chosen.name.toLowerCase().endsWith('.pdf') || (chosen.type && chosen.type !== 'application/pdf')) {
      event.preventDefault();
      alert('Chỉ nhận PDF không rỗng, tối đa 20 MiB.');
    }
  });
});
