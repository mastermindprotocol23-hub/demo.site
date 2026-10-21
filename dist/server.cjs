var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_app = require("firebase/app");
var import_firestore = require("firebase/firestore");

// firebase-applet-config.json
var firebase_applet_config_default = {
  projectId: "peak-path-m41j7",
  appId: "1:291165002498:web:ba2a24bb9c58de5e76401b",
  apiKey: "AIzaSyBByjxTY29rBI3lj9JdGyQhEyusLPzVBhA",
  authDomain: "peak-path-m41j7.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-aureliahotel-5aad9789-4612-48ab-8ca3-0df4f01716be",
  storageBucket: "peak-path-m41j7.firebasestorage.app",
  messagingSenderId: "291165002498",
  measurementId: "",
  oAuthClientId: "291165002498-iv1pf027iacesvidis8imbu1vhbmmqh5.apps.googleusercontent.com",
  recaptchaSiteKey: ""
};

// server.ts
var firebaseApp = (0, import_app.getApps)().length > 0 ? (0, import_app.getApp)() : (0, import_app.initializeApp)(firebase_applet_config_default);
var firestoreDb = (0, import_firestore.getFirestore)(firebaseApp, firebase_applet_config_default.firestoreDatabaseId);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "50mb" }));
app.use(import_express.default.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", (req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});
var DATA_FILE = import_path.default.join(process.cwd(), "data.json");
var initialRooms = [
  {
    id: "room-1",
    name: "Deluxe Single Sanctuary",
    type: "Single",
    price: 180,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Breathtaking panoramic ocean views with a private furnished balcony, plush single bedding, and marble rainfall shower.",
    amenities: ["Ocean View", "Single Bed", "Free WiFi", "Minibar", "Balcony", "Air Conditioning"],
    available: true,
    roomSize: "380 sq.ft. (35 m\xB2)",
    bedType: "1 Plush Single Bed",
    view: "Unobstructed Oceanfront Horizon",
    bathroom: "Italian Marble Bath with Rainfall Shower",
    floor: "Floors 8 - 14",
    smokingPolicy: "100% Non-Smoking",
    cancellationPolicy: "Free cancellation until 24 hours before check-in"
  },
  {
    id: "room-2",
    name: "Executive Double Room",
    type: "Double",
    price: 280,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Spacious room featuring a separate luxury living area, executive lounge access, complimentary breakfast, and premium city-skyline views.",
    amenities: ["City View", "Double Bed", "Lounge Access", "Free Breakfast", "Espresso Machine", "Bathtub"],
    available: true,
    roomSize: "550 sq.ft. (51 m\xB2)",
    bedType: "1 King Double Bed",
    view: "Metropolitan City Skyline & Bay",
    bathroom: "Deep Soaking Marble Tub & Twin Vanity",
    floor: "Floors 15 - 24 (Executive Wing)",
    smokingPolicy: "100% Non-Smoking",
    cancellationPolicy: "Free cancellation up to 24 hours before check-in"
  },
  {
    id: "room-3",
    name: "Presidential Royal Suite",
    type: "Suite",
    price: 750,
    capacity: 5,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The epitome of ultra-luxury. Private rooftop terrace, personal 24/7 butler service, private jacuzzi, and expansive designer living spaces.",
    amenities: ["Rooftop Terrace", "Private Jacuzzi", "Butler Service", "2 King Beds", "Champagne Bar", "Private Elevator"],
    available: true,
    roomSize: "1,450 sq.ft. (135 m\xB2)",
    bedType: "2 California King Beds",
    view: "360\xB0 Panoramic Ocean & Coastal Skyline",
    bathroom: "Jacuzzi Spa Suite, Steam Room & Rainfall Shower",
    floor: "Top Floor Penthouse Level (30th Floor)",
    smokingPolicy: "Smoking Permitted on Private Rooftop Terrace Only",
    cancellationPolicy: "Free cancellation up to 48 hours before check-in"
  },
  {
    id: "room-4",
    name: "Twin Deluxe Bedroom",
    type: "Twin",
    price: 240,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Tranquil secluded room with two plush twin beds surrounded by lush gardens with private balcony and modern amenities.",
    amenities: ["Garden View", "2 Twin Beds", "Outdoor Patio", "Rainfall Shower", "Smart TV", "Free WiFi"],
    available: true,
    roomSize: "520 sq.ft. (48 m\xB2)",
    bedType: "2 Twin Plush Beds",
    view: "Private Tropical Garden & Pool",
    bathroom: "Open-Air Garden Rainfall Shower & Sunken Tub",
    floor: "Floors 4 - 9",
    smokingPolicy: "100% Non-Smoking",
    cancellationPolicy: "Free cancellation up to 24 hours before check-in"
  },
  {
    id: "room-5",
    name: "Classic Single Comfort",
    type: "Single",
    price: 150,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Cozy and elegantly appointed room with high-speed internet, ergonomic workspace, and calming contemporary neutral decor.",
    amenities: ["Single Bed", "Workspace", "Free WiFi", "Safe", "Coffee Maker", "Room Service"],
    available: true,
    roomSize: "320 sq.ft. (30 m\xB2)",
    bedType: "1 Single Bed",
    view: "Courtyard & Mountain View",
    bathroom: "Glass Walk-In Rainfall Shower",
    floor: "Floors 3 - 7",
    smokingPolicy: "100% Non-Smoking",
    cancellationPolicy: "Free cancellation up to 24 hours before check-in"
  },
  {
    id: "room-6",
    name: "Royal Honeymoon Suite",
    type: "Suite",
    price: 520,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Romantic sanctuary designed for couples with a round king bed, rose petal turndown service, couple's spa bath, and sunset ocean view.",
    amenities: ["Ocean View", "Couples Jacuzzi", "Complimentary Spa", "Champagne", "King Bed", "Balcony"],
    available: true,
    roomSize: "720 sq.ft. (67 m\xB2)",
    bedType: "1 Signature King Bed",
    view: "Sunset Oceanfront Panoramic Horizon",
    bathroom: "Dual Couple's Jacuzzi & Rainfall Shower",
    floor: "Floors 18 - 25",
    smokingPolicy: "100% Non-Smoking",
    cancellationPolicy: "Free cancellation up to 24 hours before check-in"
  }
];
var cachedData = null;
function loadData() {
  if (cachedData) return cachedData;
  if (import_fs.default.existsSync(DATA_FILE)) {
    try {
      const content = import_fs.default.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (parsed && parsed.rooms && parsed.bookings) {
        cachedData = parsed;
        return parsed;
      }
    } catch (e) {
      console.error("Error reading data.json, re-initializing", e);
    }
  }
  const defaultData = {
    rooms: initialRooms,
    bookings: [
      {
        id: "AUR-1001",
        roomId: "room-1",
        roomName: "Deluxe Ocean View Room",
        guestName: "Alexander Wright",
        email: "alexander@example.com",
        phone: "+1 (555) 234-5678",
        checkIn: "2026-10-01",
        checkOut: "2026-10-05",
        guests: 2,
        totalPrice: 880,
        specialRequests: "High floor please, anniversary celebration.",
        paymentMethod: "Pay at Hotel (Cash / Card at Check-in)",
        status: "Confirmed",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "AUR-1002",
        roomId: "room-2",
        roomName: "Executive Suite",
        guestName: "Sarah Jenkins",
        email: "sarah.j@example.com",
        phone: "+1 (555) 987-6543",
        checkIn: "2026-10-03",
        checkOut: "2026-10-07",
        guests: 2,
        totalPrice: 1520,
        specialRequests: "Late check-in requested around 9 PM.",
        paymentMethod: "Pay at Hotel (Cash / Card at Check-in)",
        status: "Checked-in",
        createdAt: new Date(Date.now() - 864e5).toISOString()
      }
    ]
  };
  cachedData = defaultData;
  import_fs.default.writeFile(DATA_FILE, JSON.stringify(defaultData, null, 2), () => {
  });
  return defaultData;
}
function saveData(data) {
  cachedData = data;
  import_fs.default.writeFile(DATA_FILE, JSON.stringify(data, null, 2), (err) => {
    if (err) console.warn("Background file save notice:", err.message);
  });
}
var sseClients = /* @__PURE__ */ new Set();
function broadcastRealtime(event, data) {
  const payload = `event: ${event}
data: ${JSON.stringify(data)}

`;
  for (const client of sseClients) {
    try {
      client.write(payload);
      if (typeof client.flush === "function") client.flush();
    } catch {
      sseClients.delete(client);
    }
  }
}
function calculateCurrentStats(data) {
  const bookings = Array.isArray(data?.bookings) ? data.bookings : [];
  const rooms = Array.isArray(data?.rooms) ? data.rooms : [];
  const totalBookings = bookings.length;
  const activeRooms = rooms.filter((r) => r && r.available).length;
  const totalRevenue = bookings.filter((b) => b && b.status !== "Cancelled").reduce((acc, curr) => acc + (Number(curr?.totalPrice) || 0), 0);
  const occupancyRate = totalBookings > 0 ? Math.min(Math.round(bookings.filter((b) => b && (b.status === "Checked-in" || b.status === "Confirmed")).length / Math.max(rooms.length, 1) * 100), 100) : 75;
  return {
    totalBookings,
    activeRooms,
    totalRooms: rooms.length,
    totalRevenue,
    occupancyRate
  };
}
app.get("/api/events", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no"
  });
  res.flushHeaders?.();
  res.write(`event: CONNECTED
data: ${JSON.stringify({ status: "connected", time: (/* @__PURE__ */ new Date()).toISOString() })}

`);
  sseClients.add(res);
  req.on("close", () => {
    sseClients.delete(res);
  });
});
async function syncRoomsFromFirestore() {
  try {
    const snap = await (0, import_firestore.getDocs)((0, import_firestore.collection)(firestoreDb, "rooms"));
    const data = loadData();
    if (!snap.empty) {
      const firestoreRooms = [];
      snap.forEach((d) => {
        const r = d.data();
        firestoreRooms.push({ ...r, id: r.id || d.id });
      });
      data.rooms = firestoreRooms;
      saveData(data);
      console.log(`[Firestore Sync] Synchronized ${data.rooms.length} active rooms from Cloud Firestore.`);
    } else if (data.rooms.length > 0) {
      for (const room of data.rooms) {
        await (0, import_firestore.setDoc)((0, import_firestore.doc)(firestoreDb, "rooms", room.id), room, { merge: true });
      }
      console.log(`[Firestore Seed] Seeded ${data.rooms.length} initial rooms to Cloud Firestore.`);
    }
  } catch (err) {
    console.warn("[Firestore Sync Notice]:", err?.message || err);
  }
}
syncRoomsFromFirestore();
setInterval(() => {
  broadcastRealtime("HEARTBEAT", { timestamp: Date.now() });
}, 2e4);
app.get("/api/rooms", async (req, res) => {
  try {
    const snap = await (0, import_firestore.getDocs)((0, import_firestore.collection)(firestoreDb, "rooms"));
    if (!snap.empty) {
      const firestoreRooms = [];
      snap.forEach((d) => {
        const r = d.data();
        firestoreRooms.push({ ...r, id: r.id || d.id });
      });
      const data2 = loadData();
      data2.rooms = firestoreRooms;
      saveData(data2);
      return res.json(firestoreRooms);
    }
  } catch (err) {
    console.warn("Error reading rooms from Firestore in GET /api/rooms:", err?.message || err);
  }
  const data = loadData();
  res.json(data.rooms);
});
app.post("/api/rooms", async (req, res) => {
  const newRoom = {
    id: req.body.id || `room-${Date.now()}`,
    name: req.body.name || "New Luxury Room",
    type: req.body.type || "Deluxe",
    price: Number(req.body.price) || 200,
    capacity: Number(req.body.capacity) || 2,
    image: req.body.image || "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    images: Array.isArray(req.body.images) && req.body.images.length > 0 ? req.body.images : req.body.image ? [req.body.image] : [],
    description: req.body.description || "Luxuriously appointed room with modern amenities.",
    amenities: Array.isArray(req.body.amenities) ? req.body.amenities : ["King Bed", "Free WiFi", "Air Conditioning"],
    available: req.body.available !== void 0 ? Boolean(req.body.available) : true,
    roomSize: req.body.roomSize || "480 sq.ft. (45 m\xB2)",
    bedType: req.body.bedType || "1 King Size Bed",
    view: req.body.view || "Scenic Horizon View",
    bathroom: req.body.bathroom || "Marble Bath with Rainfall Shower",
    floor: req.body.floor || "High Floor",
    smokingPolicy: req.body.smokingPolicy || "100% Non-Smoking",
    cancellationPolicy: req.body.cancellationPolicy || "Free cancellation up to 24h before check-in"
  };
  try {
    await (0, import_firestore.setDoc)((0, import_firestore.doc)(firestoreDb, "rooms", newRoom.id), newRoom, { merge: true });
  } catch (err) {
    console.warn("Firestore room create sync note:", err?.message || err);
  }
  const data = loadData();
  const existingIdx = data.rooms.findIndex((r) => r.id === newRoom.id);
  if (existingIdx !== -1) {
    data.rooms[existingIdx] = newRoom;
  } else {
    data.rooms.push(newRoom);
  }
  saveData(data);
  broadcastRealtime(existingIdx !== -1 ? "ROOM_UPDATED" : "ROOM_CREATED", newRoom);
  broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
  res.status(201).json(newRoom);
});
app.put("/api/rooms/:id", async (req, res) => {
  const id = req.params.id;
  const data = loadData();
  const index = data.rooms.findIndex((r) => r.id === id);
  const updatedRoom = {
    ...index !== -1 ? data.rooms[index] : {},
    ...req.body,
    id,
    price: req.body.price ? Number(req.body.price) : index !== -1 ? data.rooms[index].price : 200,
    capacity: req.body.capacity ? Number(req.body.capacity) : index !== -1 ? data.rooms[index].capacity : 2
  };
  try {
    await (0, import_firestore.setDoc)((0, import_firestore.doc)(firestoreDb, "rooms", id), updatedRoom, { merge: true });
  } catch (err) {
    console.warn("Firestore room update sync note:", err?.message || err);
  }
  if (index !== -1) {
    data.rooms[index] = updatedRoom;
  } else {
    data.rooms.push(updatedRoom);
  }
  saveData(data);
  broadcastRealtime("ROOM_UPDATED", updatedRoom);
  broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
  res.json(updatedRoom);
});
app.delete("/api/rooms/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await (0, import_firestore.deleteDoc)((0, import_firestore.doc)(firestoreDb, "rooms", id));
  } catch (err) {
    console.warn("Firestore room delete sync note:", err?.message || err);
  }
  const data = loadData();
  const index = data.rooms.findIndex((r) => r.id === id);
  let deleted = null;
  if (index !== -1) {
    deleted = data.rooms.splice(index, 1)[0];
    saveData(data);
  }
  broadcastRealtime("ROOM_DELETED", { id });
  broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
  res.json({ success: true, id, deleted });
});
app.get("/api/bookings", (req, res) => {
  const data = loadData();
  const { email } = req.query;
  if (email) {
    const userBookings = data.bookings.filter((b) => b.email.toLowerCase() === String(email).toLowerCase());
    return res.json(userBookings);
  }
  res.json(data.bookings);
});
app.post("/api/bookings", async (req, res) => {
  try {
    const data = loadData();
    if (!data.rooms) data.rooms = [];
    if (!data.bookings) data.bookings = [];
    const {
      roomId,
      roomName,
      roomPrice,
      price,
      roomType,
      roomImage,
      guestName,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      specialRequests,
      paymentMethod
    } = req.body || {};
    let room = data.rooms.find((r) => r && (r.id === roomId || r.name && roomName && r.name.toLowerCase() === String(roomName).toLowerCase()));
    const nightlyPrice = Math.max(1, Number(room?.price || roomPrice || price) || 220);
    const finalRoomName = room?.name || roomName || "Luxury Suite";
    const finalRoomId = room?.id || roomId || `room-${Date.now()}`;
    if (!room && roomId) {
      room = {
        id: finalRoomId,
        name: finalRoomName,
        type: roomType || "Deluxe",
        price: nightlyPrice,
        capacity: Number(req.body?.capacity || guests) || 2,
        image: roomImage || "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        description: "Exquisite luxury suite with bespoke appointments.",
        amenities: ["Ocean View", "King Bed", "Free WiFi"],
        available: true
      };
      data.rooms.push(room);
      saveData(data);
    }
    const startStr = typeof checkIn === "string" && checkIn.trim() ? checkIn.trim() : (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const endStr = typeof checkOut === "string" && checkOut.trim() ? checkOut.trim() : new Date(Date.now() + 864e5 * 3).toISOString().split("T")[0];
    const start = new Date(startStr);
    const end = new Date(endStr);
    const diffTime = (end.getTime() || 0) - (start.getTime() || 0);
    const diffDays = Math.max(Math.ceil(diffTime / (1e3 * 60 * 60 * 24)), 1) || 1;
    const computedTotal = nightlyPrice * diffDays;
    const finalTotalPrice = Number(req.body?.totalPrice) || computedTotal;
    const bookingId = req.body?.id || `AUR-${Math.floor(1e3 + Math.random() * 9e3)}`;
    const newBooking = {
      id: bookingId,
      roomId: finalRoomId,
      roomName: finalRoomName,
      roomType: req.body?.roomType || room?.type || "Deluxe",
      roomImage: req.body?.roomImage || room?.image || "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      guestName: guestName && String(guestName).trim() || "Valued Guest",
      email: email && String(email).trim() || "",
      phone: phone && String(phone).trim() || "",
      checkIn: startStr,
      checkOut: endStr,
      nights: Number(req.body?.nights) || diffDays,
      guests: Math.max(1, Number(guests) || 2),
      totalPrice: finalTotalPrice,
      arrivalTime: req.body?.arrivalTime && String(req.body.arrivalTime).trim() || "3:00 PM (Standard Check-in)",
      bedPreference: req.body?.bedPreference && String(req.body.bedPreference).trim() || "1 King Size Plush Bed",
      specialRequests: specialRequests && String(specialRequests).trim() || "",
      paymentMethod: paymentMethod || "Pay at Hotel (Cash / Card at Check-in)",
      status: req.body?.status || "Confirmed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    data.bookings.unshift(newBooking);
    saveData(data);
    try {
      (0, import_firestore.setDoc)((0, import_firestore.doc)(firestoreDb, "bookings", newBooking.id), newBooking).catch((err) => {
        console.warn("Firestore sync notice (create):", err?.message || err);
      });
    } catch (fsErr) {
      console.warn("Firestore setDoc call notice:", fsErr);
    }
    try {
      broadcastRealtime("NEW_BOOKING", newBooking);
      broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
    } catch {
    }
    return res.status(201).json(newBooking);
  } catch (err) {
    console.error("Booking creation error in server:", err);
    return res.status(500).json({ error: err?.message || "Internal server error creating booking" });
  }
});
app.patch("/api/bookings/:id/status", (req, res) => {
  const data = loadData();
  const { status } = req.body;
  const booking = data.bookings.find((b) => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }
  if (["Confirmed", "Checked-in", "Completed", "Cancelled"].includes(status)) {
    booking.status = status;
    saveData(data);
    (0, import_firestore.setDoc)((0, import_firestore.doc)(firestoreDb, "bookings", booking.id), booking, { merge: true }).catch((err) => {
      console.warn("Firestore sync note (status):", err?.message || err);
    });
    broadcastRealtime("BOOKING_STATUS", booking);
    broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
    return res.json(booking);
  }
  res.status(400).json({ error: "Invalid status" });
});
app.get("/api/stats", (req, res) => {
  const data = loadData();
  res.json(calculateCurrentStats(data));
});
app.patch("/api/rooms/:id/toggle", async (req, res) => {
  const data = loadData();
  const room = data.rooms.find((r) => r.id === req.params.id);
  if (!room) {
    return res.status(404).json({ error: "Room not found" });
  }
  room.available = !room.available;
  saveData(data);
  try {
    await (0, import_firestore.setDoc)((0, import_firestore.doc)(firestoreDb, "rooms", room.id), { available: room.available }, { merge: true });
  } catch (err) {
    console.warn("Firestore sync note (room toggle):", err?.message || err);
  }
  broadcastRealtime("ROOM_TOGGLED", room);
  broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
  res.json(room);
});
app.delete("/api/bookings/:id", (req, res) => {
  const data = loadData();
  const index = data.bookings.findIndex((b) => b.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Booking not found" });
  }
  const deleted = data.bookings.splice(index, 1)[0];
  saveData(data);
  (0, import_firestore.deleteDoc)((0, import_firestore.doc)(firestoreDb, "bookings", req.params.id)).catch((err) => {
    console.warn("Firestore sync note (delete):", err?.message || err);
  });
  broadcastRealtime("BOOKING_DELETED", { id: req.params.id });
  broadcastRealtime("STATS_UPDATED", calculateCurrentStats(data));
  res.json(deleted);
});
app.get(["/admin", "/admin/", "/admin.html"], (req, res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.sendFile(import_path.default.join(process.cwd(), "admin.html"));
});
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
async function startServer() {
  app.use(import_express.default.static(import_path.default.join(process.cwd(), "public")));
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Aurelia Hotel server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
