// Saves an element (e.g. the terms page) as an A4 PDF. Elements matching
// `hideSelector` (like the download button) are hidden while capturing.
export async function downloadElementAsPdf(element, filename, hideSelector = '.action-row') {
  const html2pdf = (await import('html2pdf.js')).default
  const hidden = [...element.querySelectorAll(hideSelector)]
  hidden.forEach((el) => { el.style.visibility = 'hidden' })

  try {
    await html2pdf()
      .set({
        margin: [15, 12, 15, 12],
        filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      })
      .from(element)
      .save()
  } finally {
    hidden.forEach((el) => { el.style.visibility = '' })
  }
}
