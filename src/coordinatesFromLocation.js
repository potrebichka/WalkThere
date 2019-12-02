<<<<<<< HEAD
const API_KEY2 = '3a961f44a5bf40d0b167a7b118598b81';
=======
const API_KEY = process.env.API_KEY;
>>>>>>> e1ae862c4af5d730065a7a73d381ccf3cf72a103

export class CoordinatesFromAddress {
    async getCoordinates(address) {
        try {
<<<<<<< HEAD
            let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY2}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse;
=======
            let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
>>>>>>> e1ae862c4af5d730065a7a73d381ccf3cf72a103
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }
<<<<<<< HEAD
}

// Yelp API key : DrJ_qvm_NNA-jMxTlTRxnx4OsLqblKK8NxcnBeUrdLoEmni6XC5MOJXMFdwztRcSabn45bMK9rgfo9F3GMDoNlkHHf31Vy_3AaYtI8e5h8q-6Y-_0yjbLneG6GHlXXYx
=======
}
>>>>>>> e1ae862c4af5d730065a7a73d381ccf3cf72a103
