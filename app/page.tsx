"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isToogle, setIsToogle] = useState(false);
  const audio = typeof window !== "undefined" ? new Audio("/sound.mp3") : null; // Audio nesnesi oluşturma

  const handleToogle = () => {
    setIsToogle(!isToogle); // Toggle durumunu değiştir
  };

  useEffect(() => {
    if (audio) {
      audio.loop = true; // Sesin otomatik olarak tekrar çalmasını sağlar
    }

    if (isToogle) {
      // Toggle açık olduğunda sesi çal
      audio?.play().catch((error) => {
        console.error("Ses dosyası çalınırken bir hata oluştu:", error);
      });
    } else {
      // Toggle kapandığında sesi durdur
      audio?.pause();
      audio!.currentTime = 0; // Sesi başa sar
    }

    return () => {
      // Temizleme işlemi
      audio?.pause();
      audio!.currentTime = 0;
    };
  }, [isToogle, audio]);

  useEffect(() => {
    if (isToogle) {
      document.body.classList.add("blinking");
    } else {
      document.body.classList.remove("blinking");
    }
    return () => {
      document.body.classList.remove("blinking");
    };
  }, [isToogle]);

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h2 className="mb-10">⚠️⚠️⚠️⚠️ Sakın Açma ⚠️⚠️⚠️⚠️</h2>
        <label className="switch">
          <input type="checkbox" checked={isToogle} onChange={handleToogle} />
          <div className="button">
            <div className="light"></div>
            <div className="dots"></div>
            <div className="characters"></div>
            <div className="shine"></div>
            <div className="shadow"></div>
          </div>
        </label>
      </div>
    </>
  );
}
