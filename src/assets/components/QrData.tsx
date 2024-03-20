import axios from 'axios';

export interface QrDataItem {
    qr_id: number;
    qr_title: string;
    qr_image: string;
}

export async function fetchQrDataFromAPI(): Promise<QrDataItem[]> {
    try {
        const response = await axios.get('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/getqr');
        const qrData = response.data.data.map((qrItem: any) => {
            // Assuming the qr_image field provides image names without extensions
            // Construct the qr_image path based on the qr_image from API
            const imageUrl = `/src/assets/components/components/images/qrcode/${qrItem.qr_image}`;

            console.log('QR Image URL:', imageUrl);
            return {
                qr_id: qrItem.qr_id,
                qr_title: qrItem.qr_title,
                qr_image: imageUrl
            };
        });

        console.log('Fetched QR Data:', qrData); // Log the fetched QR data

        return qrData;
    } catch (error) {
        console.error('Error fetching QR data from API:', error);
        return [];
    }
}

export async function updateQrDataWithAPI(): Promise<QrDataItem[]> {
    try {
        const qrDataFromAPI = await fetchQrDataFromAPI();

        console.log('Updated QR Data:', qrDataFromAPI); // Log the updated QR data

        return qrDataFromAPI;
    } catch (error) {
        console.error('Error updating QR data with API data:', error);
        return [];
    }
}

const QrData = await updateQrDataWithAPI();

export default QrData;
