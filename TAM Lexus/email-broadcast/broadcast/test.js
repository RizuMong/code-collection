export const code = async (inputs) => {
    const customerName = inputs.customerName;
    const dealName = inputs.dealName;
    const contactNumber = inputs.contactNumber;
    const dealerName = inputs.dealerName;
    const deliveryDate = inputs.deliveryDate;
    const details = inputs.details;
    const machineNumber = inputs.machineNumber;
    const plateNumber = inputs.plateNumber;
    const recipientName = inputs.recipientName;
    const type = inputs.type;
    const typeLexus = inputs.typeLexus;
    const vinNumber = inputs.vinNumber;
    const ticketId = inputs.ticketId;

    const htmlContent = `
 <html lang="en">
  <head>
    <title>After Sales</title>
    <style>
      .w-full {
        width: 100%;
      }

      .w-3 {
        width: 30%;
      }

      .h-8 {
        height: 36px;
      }

      .pl-2 {
        padding-left: 8px;
      }

      .font-semibold {
        font-weight: 600;
      }

      .mt-10 {
        margin-top: 40px;
      }

      table,
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
      }

      body {
        font-family: "Calibri", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="w-full">
      <p>Dear ${recipientName},</p>
      <p class="mt-10">Berikut kami sampaikan informasi ${type} INQUIRY ${dealerName} yang masuk melalui Concierge Center Lexus 
        Indonesia:</p>
    </div>
    <table class="w-full">
      <tr class="h-8">
        <td class="w-3 pl-2">Ticket ID</td>
        <td class="pl-2">${ticketId}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Nama</td>
        <td class="pl-2">${dealName}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">No. Kontak</td>
        <td class="pl-2">${contactNumber}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">No. Rangka</td>
        <td class="pl-2">${vinNumber}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">No. Mesin</td>
        <td class="pl-2">${machineNumber}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">No. Plat</td>
        <td class="pl-2">${plateNumber}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Tipe Lexus</td>
        <td class="pl-2">${typeLexus}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Delivery Date</td>
        <td class="pl-2">${deliveryDate}</td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Detail</td>
        <td class="pl-2">${details}</td>
      </tr>
    </table>
    <div>
      <p>
        Demikian informasi yang dapat saya sampaikan, atas perhatiannya saya ucapkan terima kasih.
      </p>
    </div>
    <div class="mt-10">
      <p>Best regards,</p>
      <p>Lexus Concierge Center</p>
    </div>
  </body>
</html>
  `
    return htmlContent;
};