
# TODOs

* fixup the icons/favicon, other things in vite.config.mts

# Code

* Portal.tsx: calls socket.emit("join-room")
  * Collab.tsx:
    * class Collab calls new Portal
  * Main.tsx: const [collabAPI] = useAtom(collabAPIAtom);
  * firebase.ts: saveToFirebase() takes a portal argument

# Notes

## 4/23

* test syncing - works in dev
* add roll -
* try hosting
