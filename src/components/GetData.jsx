import axios from "axios";
import { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState([]);
  const handleGetData = async () => {
    try {
      const response = await axios.get("http://localhost:8001/grade");
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div>
      <table
        style={{
          width: "500px",
          border: "1px solid #ddd",
          borderCollapse: "collapse",
          margin: "20px auto",
          backgroundColor: "#f9f9f9", // Similar background to form
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "left",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                color: "white",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                color: "white",
              }}
            >
              Gender
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                color: "white",
              }}
            >
              Score
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                color: "white",
              }}
            >
              Grade
            </th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#f9f9f9" }}>
          {data.map((grade, i) => (
            <tr key={i}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  color: "black",
                }}
              >
                {grade.name}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  color: "black",
                }}
              >
                {grade.gender}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  color: "black",
                }}
              >
                {grade.score}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  color: "black",
                }}
              >
                {grade.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
