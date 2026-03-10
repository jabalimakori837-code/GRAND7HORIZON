export function createReceiptHtmlUrl({ label, amount, method }) {
  const now = new Date().toLocaleString()
  const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grand7Horizon Receipt</title>
    <style>
      body { font-family: Inter, Arial, sans-serif; background: #f6e9d3; color: #2b2016; margin: 0; padding: 40px; }
      .card { max-width: 720px; margin: 0 auto; background: #fffaf0; border: 1px solid #e1caa0; border-radius: 16px; padding: 32px; }
      .header { background: #241a12; color: #f6e9d3; padding: 24px; border-radius: 12px; }
      h1 { margin: 0; font-size: 24px; }
      .row { display: flex; justify-content: space-between; margin: 12px 0; }
      .muted { color: #6f5b45; }
      .cta { margin-top: 24px; }
      .btn { display: inline-block; padding: 10px 16px; background: #c79b5a; color: #1a120a; text-decoration: none; border-radius: 999px; font-weight: 600; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        <h1>Grand7Horizon Receipt</h1>
        <div class="muted">${now}</div>
      </div>
      <div class="row"><strong>Booking</strong><span>${label}</span></div>
      <div class="row"><strong>Method</strong><span>${method}</span></div>
      <div class="row"><strong>Amount</strong><span>$${amount}</span></div>
      <p class="muted">This is a simulated receipt for demo purposes.</p>
      <div class="cta"><a class="btn" href="javascript:window.print()">Print / Save as PDF</a></div>
    </div>
  </body>
</html>
  `.trim()

  const blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}
