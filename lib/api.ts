import { RAA, CreateRAARequest, CreateRAAResponse } from '../types/raa';

// Usar el proxy interno de Next.js para evitar problemas de CORS
const API_BASE_URL = '/api';

// Función para verificar la conexión al backend
export async function checkBackendConnection(): Promise<boolean> {
  try {
    console.log('Verificando conexión al backend...');
    const response = await fetch(`${API_BASE_URL}/raa`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Backend conectado:', response.ok);
    return response.ok;
  } catch (error) {
    console.error('Backend no disponible:', error);
    return false;
  }
}

export async function fetchRAAs(): Promise<RAA[]> {
  try {
    console.log('Fetching RAAs from:', `${API_BASE_URL}/raa`);
    const response = await fetch(`${API_BASE_URL}/raa`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('RAAs fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching RAAs:', error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('No se puede conectar al servidor. Verifica que el backend esté corriendo en http://localhost:3000');
    }
    throw error;
  }
}

export async function createRAA(raaData: CreateRAARequest): Promise<RAA> {
  try {
    console.log('Creating RAA with data:', raaData);
    console.log('Sending POST to:', `${API_BASE_URL}/raa`);
    
    const response = await fetch(`${API_BASE_URL}/raa`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(raaData),
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server error response:', errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
    }
    
    const data: CreateRAAResponse = await response.json();
    console.log('RAA created successfully:', data);
    
    // Retornar el RAA creado
    return data.raa;
  } catch (error) {
    console.error('Error creating RAA:', error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('No se puede conectar al servidor. Verifica que el backend esté corriendo en http://localhost:3000');
    }
    throw error;
  }
}
