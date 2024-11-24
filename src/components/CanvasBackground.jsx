import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let rafID, timeoutID;
    let mousePos = { x: 0, y: 0 };

    const handleResize = () => {
      clearTimeout(timeoutID);
      window.cancelAnimationFrame(rafID);
      timeoutID = setTimeout(init, 500);
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const nodesLength = Math.floor((canvas.width * canvas.height) / 3000);
      const net = new Net(nodesLength);

      const render = () => {
        net.update();
        net.draw();
        net.connect(120);
        rafID = window.requestAnimationFrame(render);
      };

      rafID = window.requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      mousePos = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    class Net {
      constructor(length) {
        this.nodes = [];
        for (let i = 0; i < length; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          this.nodes.push(new Node(x, y));
        }
      }

      update() {
        this.nodes.forEach((node) => node.update());
      }

      draw() {
        context.fillStyle = '#030303';
        context.fillRect(0, 0, canvas.width, canvas.height);

        this.nodes.forEach((node) => node.draw());
      }

      connect(distanceMax) {
        for (let i = 0; i < this.nodes.length; i++) {
          const node = this.nodes[i];
          node.connections = [];

          for (let j = i + 1; j < this.nodes.length; j++) {
            const other = this.nodes[j];
            const distance = Math.hypot(node.x - other.x, node.y - other.y);

            const adjustedMax =
              distanceMax / Math.max(node.dToMouse || 1, 1) * 200;

            if (distance < Math.min(distanceMax, adjustedMax)) {
              node.connections.push(j);
              context.beginPath();
              context.moveTo(node.x, node.y);
              context.lineTo(other.x, other.y);
              context.strokeStyle = `rgba(255,255,255,${node.depth / 4})`;
              context.stroke();
            }
          }
        }
      }
    }

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.depth = Math.random();
        this.dToMouse = Infinity;
      }

      update() {
        this.x += (1 - this.depth) * 2;
        if (this.x > canvas.width) this.x = 0;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = `rgba(255,255,255,${1 - this.depth})`;
        context.fill();
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(rafID);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default CanvasBackground;

