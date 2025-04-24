
// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Generic API fetch function with error handling
export async function apiFetch<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    let data;
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    }

    if (!response.ok) {
      const errorMessage = data?.detail || data?.message || `Error: ${response.status}`;
      return { 
        error: errorMessage, 
        status: response.status 
      };
    }

    return { 
      data, 
      status: response.status 
    };
  } catch (error) {
    console.error('API fetch error:', error);
    return { 
      error: error instanceof Error ? error.message : 'Unknown error occurred', 
      status: 500 
    };
  }
}

// Generic CRUD API functions
export const apiService = {
  getAll: <T>(endpoint: string) => apiFetch<T[]>(endpoint),
  
  getById: <T>(endpoint: string, id: string | number) => 
    apiFetch<T>(`${endpoint}${id}/`),
  
  create: <T, U = T>(endpoint: string, data: T) => 
    apiFetch<U>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  update: <T, U = T>(endpoint: string, id: string | number, data: Partial<T>) => 
    apiFetch<U>(`${endpoint}${id}/`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  patch: <T, U = T>(endpoint: string, id: string | number, data: Partial<T>) => 
    apiFetch<U>(`${endpoint}${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  
  delete: <T>(endpoint: string, id: string | number) => 
    apiFetch<T>(`${endpoint}${id}/`, {
      method: 'DELETE',
    }),
};
