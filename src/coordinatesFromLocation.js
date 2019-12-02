const API_KEY2 = '3a961f44a5bf40d0b167a7b118598b81';

export class CoordinatesFromAddress {
    async getCoordinates(address) {
        try {
            let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY2}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse;
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }
}

// Yelp API key : DrJ_qvm_NNA-jMxTlTRxnx4OsLqblKK8NxcnBeUrdLoEmni6XC5MOJXMFdwztRcSabn45bMK9rgfo9F3GMDoNlkHHf31Vy_3AaYtI8e5h8q-6Y-_0yjbLneG6GHlXXYx
