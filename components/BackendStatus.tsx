"use client";
import { useEffect, useState } from 'react';
import { checkBackendConnection } from '../lib/api';

export default function BackendStatus() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      setIsChecking(true);
      try {
        const connected = await checkBackendConnection();
        setIsConnected(connected);
      } catch (error) {
        setIsConnected(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkConnection();
    
    // Verificar cada 30 segundos
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isChecking) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        🔄 Verificando backend...
      </div>
    );
  }

  if (isConnected === false) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg max-w-sm">
        <div className="font-bold">❌ Error de conexión</div>
        <div className="text-sm mt-1">
          Verifica que el backend esté corriendo en http://localhost:3000
        </div>
      </div>
    );
  }

  if (isConnected === true) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
        ✅ Backend conectado
      </div>
    );
  }

  return null;
}
