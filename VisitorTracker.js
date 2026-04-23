import { useEffect } from "react";

function VisitorTracker() {
  useEffect(() => {
    const startTime = Date.now();

    async function track() {
      try {
        // IP + City
        const geoRes = await fetch("https://ipapi.co/json/");
        const geo = await geoRes.json();

        const device = /Mobi|Android/i.test(navigator.userAgent)
          ? "Mobile"
          : "Desktop";

        navigator.geolocation.getCurrentPosition(
          (pos) => sendData(geo, device, pos),
          () => sendData(geo, device, null),
          { enableHighAccuracy: true }
        );

      } catch (err) {
        console.log("Geo fetch failed", err);
      }
    }

    async function sendData(geo, device, pos) {
      try {
        const payload = {
          ip: geo.ip,
          city: geo.city,
          region: geo.region,
          country: geo.country_name,
          device,
          latitude: pos?.coords.latitude || null,
          longitude: pos?.coords.longitude || null,
          timeSpent: Math.floor((Date.now() - startTime) / 1000)
        };

        await fetch("/.netlify/functions/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

      } catch (err) {
        console.log("Function fetch failed", err);
      }
    }

    track();
  }, []);

  return null;
}

export default VisitorTracker;
