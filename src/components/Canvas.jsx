import { useState, useRef } from "react";
import { useEffect } from "react";

function Canvas() {
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);
  const isDrawing = useRef(false);
  const canvasRef = useRef(null);

  const getCoordinates = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (event.nativeEvent.touches && event.nativeEvent.touches.length > 0) {
      const touch = event.nativeEvent.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    } else {
      return {
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      };
    }
  };

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getCoordinates(event);
    isDrawing.current = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.closePath();
  };

  const draw = (event) => {
    if (!isDrawing.current) return;

    // event.preventDefault(); // Prevent scrolling on touch

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getCoordinates(event);

    ctx.lineCap = "round";
    ctx.strokeStyle = isErasing ? "#FFFFFF" : brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Responsive canvas logic

  // Set the desired aspect ratio (e.g., 3:2 for 600x400)
  const ASPECT_RATIO = 3 / 2;

  useEffect(() => {
    const resizeCanvas = () => {
      const container = canvasRef.current.parentElement;
      if (!container) return;
      // Set width to 100% of container, height by aspect ratio
      const width = Math.min(container.offsetWidth, 800); // max width
      const height = width / ASPECT_RATIO;
      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

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
      <div style={{ width: "100%", maxWidth: 800 }}>
        <canvas
          ref={canvasRef}
          style={{
            border: "1px solid black",
            width: "100%",
            height: "auto",
            cursor: "crosshair",
            backgroundColor: "white",
            display: "block",
            touchAction: "none",
          }}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
    </div>
  );
}

export default Canvas;
