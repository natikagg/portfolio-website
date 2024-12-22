'use client'

import { useEffect, useRef } from 'react';

interface GridCell {
  x: number;
  y: number;
  color: string;
  alpha: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL_SIZE = 30;
    const FADE_DURATION = 2000;

    let mouseX = -1;
    let mouseY = -1;
    let prevCellX = -1;
    let prevCellY = -1;
    let grid: GridCell[][] = [];
    let lastTime = performance.now();

    const colors = [
      '#4A9EFF',
      '#FF4A9E',
      '#4AFF9E',
      '#9E4AFF',
      '#FF9E4A',
    ];

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      const cols = Math.ceil(rect.width / CELL_SIZE);
      const rows = Math.ceil(rect.height / CELL_SIZE);

      grid = Array(rows)
        .fill(null)
        .map((_, row) =>
          Array(cols)
            .fill(null)
            .map((_, col) => ({
              x: col * CELL_SIZE,
              y: row * CELL_SIZE,
              color: colors[(col + row) % colors.length],
              alpha: 0,
              lastPainted: 0,
            }))
        );
    };

    const handleInteraction = (x: number, y: number) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = x - rect.left;
      mouseY = y - rect.top;
    
      const cellX = Math.floor(mouseX / CELL_SIZE);
      const cellY = Math.floor(mouseY / CELL_SIZE);
    
      if (
        (cellX !== prevCellX || cellY !== prevCellY) &&
        cellX >= 0 &&
        cellX < grid[0].length &&
        cellY >= 0 &&
        cellY < grid.length
      ) {
        // Generate a random width between 1 and 3
        const randomWidth = Math.floor(Math.random() * 0.1) + 1;
        console.log(randomWidth);
    
        // Adjust the range of affected cells based on the random width
        for (let dy = -randomWidth; dy <= randomWidth; dy++) {
          for (let dx = -randomWidth; dx <= randomWidth; dx++) {
            const nx = cellX + dx;
            const ny = cellY + dy;
            if (nx >= 0 && nx < grid[0].length && ny >= 0 && ny < grid.length) {
              grid[ny][nx].alpha = 1;
              grid[ny][nx].lastPainted = performance.now();
            }
          }
        }
    
        prevCellX = cellX;
        prevCellY = cellY;
      }
    };
    

    const handleMouseMove = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += CELL_SIZE) {
        ctx.beginPath();
        ctx.moveTo(Math.floor(x) + 0.5, 0);
        ctx.lineTo(Math.floor(x) + 0.5, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += CELL_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, Math.floor(y) + 0.5);
        ctx.lineTo(canvas.width, Math.floor(y) + 0.5);
        ctx.stroke();
      }

      grid.forEach((row) => {
        row.forEach((cell) => {
          if (cell.alpha > 0) {
            const timeSincePaint = currentTime - cell.lastPainted;
            cell.alpha = Math.max(0, 1 - timeSincePaint / FADE_DURATION);

            if (cell.alpha > 0) {
              const alpha = Math.floor(cell.alpha * 255)
                .toString(16)
                .padStart(2, '0');
              ctx.fillStyle = `${cell.color}${alpha}`;
              ctx.fillRect(
                Math.floor(cell.x) + 1,
                Math.floor(cell.y) + 1,
                CELL_SIZE - 1,
                CELL_SIZE - 1
              );
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    setSize();
    window.addEventListener('resize', setSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{
        background: '#000000',
      }}
    />
  );
}
