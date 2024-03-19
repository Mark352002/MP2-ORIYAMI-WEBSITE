import Gcash from "./components/images/qrcode/gcash.png"
import Paymaya from "./components/images/qrcode/paymaya.png"
import Others from "./components/images/qrcode/paymaya.png"


interface QrDataItem {
   [x: string]: any;
   qr_id: number;
   qr_title: string;
   qr_image: string;
 }
const QrData: QrDataItem[]= [
   {
      qr_id:1,
      qr_title: "Gcash",
      qr_image: Gcash
   },
   {
      qr_id:2,
      qr_title: "Paymaya",
      qr_image: Paymaya
   },
   {
      qr_id:3,
      qr_title: "Other",
      qr_image: Others
   }

]
export type { QrDataItem };
   export default QrData;

// import axios from 'axios';

// // Define the interface for QR data items
// interface QrDataItem {
//     qr_id: number;
//     qr_title: string;
//     qr_image: string;
// }

// // Define the function to fetch QR data from the API
// async function fetchQrDataFromAPI(): Promise<QrDataItem[]> {
//     try {
//         const response = await axios.get('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/getqr');
//         return response.data.data.map((qr: any) => ({
//             qr_id: qr.qr_id,
//             qr_title: qr.qr_title,
//             qr_image: qr.qr_image
//         }));
//     } catch (error) {
//         console.error('Error fetching QR data from API:', error);
//         return [];
//     }
// }

// // Fetch QR data from the API
// const QrData: QrDataItem[] = await fetchQrDataFromAPI();

// // Export the QR data array
// export default QrData;
