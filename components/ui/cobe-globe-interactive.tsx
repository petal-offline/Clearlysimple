"use client";

import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";

export interface InteractiveMarker {
  id: string;
  location: [number, number];
  size?: number;
}

interface GlobeInteractiveProps {
  markers?: InteractiveMarker[];
  className?: string;
  speed?: number;
}

const defaultMarkers: InteractiveMarker[] = [
  { id: "usa", location: [39.8, -98.6] },
  { id: "uk", location: [51.5, -0.12] },
  { id: "europe", location: [50.1, 10.5] },
  { id: "aus", location: [-25.3, 133.8] },
  { id: "africa", location: [1.6, 20.9] },
  { id: "russia", location: [61.5, 105.3] },
  { id: "india", location: [20.6, 78.9] },
  { id: "china", location: [35.9, 104.2] },
  { id: "brazil", location: [-14.2, -51.9] },
  { id: "japan", location: [36.2, 138.2] }
];

export function GlobeInteractive({
  markers = defaultMarkers,
  className = "",
  speed = 0.003
}: GlobeInteractiveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }

    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (event.clientX - pointerInteracting.current.x) / 300,
          theta: (event.clientY - pointerInteracting.current.y) / 1000
        };
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId = 0;
    let phi = 0;
    let resizeObserver: ResizeObserver | null = null;

    const init = () => {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.18,
        dark: 1,
        diffuse: 1.25,
        mapSamples: 16000,
        mapBrightness: 7.8,
        baseColor: [0.97, 0.95, 0.9],
        markerColor: [0.66, 0.86, 1],
        glowColor: [0.66, 0.86, 1],
        markerElevation: 0.02,
        markers: markers.map((marker) => ({
          location: marker.location,
          size: marker.size ?? 0.035,
          id: marker.id
        }))
      });

      const animate = () => {
        if (!globe) return;
        if (!isPausedRef.current) phi += speed;

        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.18 + thetaOffsetRef.current + dragOffset.current.theta
        });

        animationId = window.requestAnimationFrame(animate);
      };

      animate();
      window.setTimeout(() => {
        canvas.style.opacity = "1";
      }, 80);
    };

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width && entries[0].contentRect.width > 0) {
          resizeObserver?.disconnect();
          resizeObserver = null;
          init();
        }
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      resizeObserver?.disconnect();
      if (animationId) window.cancelAnimationFrame(animationId);
      globe?.destroy();
    };
  }, [markers, speed]);

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        className="size-full rounded-full opacity-0 transition-opacity duration-1000"
        style={{ cursor: "grab", touchAction: "none" }}
      />
    </div>
  );
}
