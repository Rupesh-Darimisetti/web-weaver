const staticDevCoffee = "web-weaver-teloh-site-v1";
const assets = [
  "./",
  "./index.html",
  "./css/style.css",
  "./cusines/american-cusine.html",
  "./cusines/french-cusine.html",
  "./cusines/indian-cusine.html",
  "./cusines/indonesia-cusine.html",
  "./cusines/italian-cusine.html",
  "./cusines/spanish-cusine.html",
  "./cusines/thai-cusine.html",
  "./cusines/turkish-cusine.html",
  "./cusines/individual_cusines.css",
  "./images/city.png",
  "./images/female.png",
  "./images/male.png",
  "./about.html",
  "./contact_us.html",
  "./cusines.html",
  "./Gallery_image.html",
  "./Gallery_video.html",
  "./our_team.html",
  "./work.html"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
