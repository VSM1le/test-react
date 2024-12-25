import axios from "axios";
import { useState } from "react";
// import precise from "../preciseimage.jpg";
import logo from "./preciseimage.jpg";

function CreateForm() {
  const [gradeData, setGradeData] = useState({
    name: "",
    gender: "",
    score: "",
    grade: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGradeData((prevData) => ({
      ...prevData,
      [name]: name === "score" ? Number(value) : value, // Ensure score is a number
    }));
  };

  const createGrade = async (e) => {
    e.preventDefault();
    try {
      const updatedGrade =
        gradeData.score >= 80 ? "A" : gradeData.score >= 70 ? "B" : "C";

      setGradeData((prevData) => ({
        ...prevData,
        grade: updatedGrade,
      }));

      const response = await axios.post("http://localhost:8001/grade", {
        ...gradeData,
        grade: updatedGrade,
      });

      console.log("Response data:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("There is an error:", error);
    }
  };
  return (
    <div>
      <img
        src={logo}
        alt="Precise Image"
        style={{ width: "100%", height: "auto", border: "2px solid #ccc" }}
      />
      <form
        action=""
        onSubmit={createGrade}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <p
            style={{
              fontSize: "18px",
              textAlign: "center",
              margin: 0,
              color: "black",
            }}
          >
            ใส่ชื่อ นามสกุล เพศ คะแนน
          </p>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              color: "black", // Text color set to black
            }}
          >
            ชื่อ-สุกล :
          </label>
          <input
            type="text"
            name="name"
            value={gradeData.name}
            onChange={handleChange}
            style={{
              width: "95%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              color: "black", // Text color set to black
            }}
          >
            เพศ :
          </label>
          <label style={{ marginRight: "20px", color: "black" }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gradeData.gender === "Male"}
              onChange={handleChange}
            />
            ชาย
          </label>
          <label style={{ color: "black" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gradeData.gender === "Female"}
              onChange={handleChange}
            />
            หญิง
          </label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="score"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              color: "black", // Text color set to black
            }}
          >
            คะเเนน :
          </label>
          <input
            type="number"
            min="0"
            max="100"
            name="score"
            value={gradeData.score}
            onChange={handleChange}
            style={{
              width: "95%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className="button"
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
