// api.js

const API_BASE_URL = 'https://api.example.com/properties';

// Function to fetch all properties
async function fetchProperties() {
    try {
        const response = await fetch(`${API_BASE_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const properties = await response.json();
        return properties;
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}

// Function to fetch a single property by ID
async function fetchPropertyById(propertyId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${propertyId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const property = await response.json();
        return property;
    } catch (error) {
        console.error('Error fetching property:', error);
    }
}

// Exporting the functions for use in other modules
export { fetchProperties, fetchPropertyById };