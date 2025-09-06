import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [helloData, setHelloData] = useState<string>("");
  const [paymentData, setPaymentData] = useState<string>("");

  // Microserviços
  const fetchHelloDirect = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HELLO_URL}/hello`,
      );
      setHelloData(response.data);
    } catch (error) {
      console.error(error);
      setHelloData("Erro ao buscar /hello microserviço ");
    }
  };

  const fetchPaymentDirect = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_PAYMENT_URL}/payment`,
      );
      setPaymentData(response.data);
    } catch (error) {
      console.error(error);
      setPaymentData("Erro ao buscar /payment via microserviço ");
    }
  };

  // Via Gateway
  const fetchHelloGateway = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GATEWAY_URL}/hello`,
      );
      setHelloData(response.data);
    } catch (error) {
      console.error(error);
      setHelloData("Erro ao buscar /hello via gateway");
    }
  };

  const fetchPaymentGateway = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GATEWAY_URL}/payment`,
      );
      setPaymentData(response.data);
    } catch (error) {
      console.error(error);
      setPaymentData("Erro ao buscar /payment via gateway");
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>RECEBER A API</h1>

      <h2>Microserviços</h2>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <button onClick={fetchHelloDirect}>Get Hello</button>
        <button onClick={fetchPaymentDirect}>Get Payment</button>
      </div>

      <h2>Via Kong Gateway</h2>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <button onClick={fetchHelloGateway}>Get Hello</button>
        <button onClick={fetchPaymentGateway}>Get Payment</button>
      </div>

      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          <h2>API HELLO</h2>
          <table>
            <tbody>
              <tr>
                <td>{helloData}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>API PAYMENT</h2>
          <table>
            <tbody>
              <tr>
                <td>{paymentData}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
