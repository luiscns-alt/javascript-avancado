let db;

function getObjectStore() {
  return db.transaction(["Courses"], "readwrite").objectStore("Courses");
}

const DB = {
  start() {
    return new Promise((resolve) => {
      let request = indexedDB.open("TreinaWeb", 1);
      request.onsuccess = (event) => {
        db = request.result;
        resolve(this);
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        db.createObjectStore("Courses", { keyPath: "id" });
      };
    });
  },
  find(id) {
    return new Promise((resolve) => {});
  },
  findAll() {
    return new Promise((resolve) => {});
  },
  insert(item) {
    return new Promise((resolve) => {});
  },
  update(item) {
    return new Promise((resolve) => {});
  },
  remove(id) {
    return new Promise((resolve) => {});
  },
};

DB.start();
