const copyButton = document.getElementById('copy-citation');
const citation = document.getElementById('bibtex');
const copyStatus = document.getElementById('copy-status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.querySelector('span').textContent = 'Copied';
    copyStatus.textContent = 'BibTeX copied to clipboard.';
    window.setTimeout(() => {
      copyButton.querySelector('span').textContent = 'Copy BibTeX';
    }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});
