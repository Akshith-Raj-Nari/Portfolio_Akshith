import { useState, useRef } from "react";

function Canvas() {
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);
  const isDrawing = useRef(false); // Use a ref to track drawing state
  const canvasRef = useRef(null); // Use a ref for the canvas element

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    isDrawing.current = true;
    ctx.beginPath();
    ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    isDrawing.current = false;
    ctx.closePath();
  };

  const draw = (event) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = isErasing ? "#FFFFFF" : brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    ctx.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <h1 className="display-3">Canvas</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Brush Color:{" "}
          <input
            type="color"
            value={brushColor}
            onChange={(e) => setBrushColor(e.target.value)}
            disabled={isErasing}
          />
        </label>
        <label style={{ marginLeft: "20px" }}>
          Brush Size:{" "}
          <input
            type="number"
            value={brushSize}
            min="1"
            max="50"
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />
        </label>
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => setIsErasing(!isErasing)}
        >
          {isErasing ? "Stop Erasing" : "Erase"}
        </button>
        <button style={{ marginLeft: "10px" }} onClick={clearCanvas}>
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width="800"
        height="400"
        style={{
          border: "1px solid black",
          cursor: "crosshair",
          backgroundColor: "white",
        }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
      ></canvas>
    </div>
  );
}

export default Canvas;
