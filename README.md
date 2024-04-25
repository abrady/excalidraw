
# TODOs

* fixup the icons/favicon, other things in vite.config.mts

# Code

* Portal.tsx: calls socket.emit("join-room")
  * Collab.tsx:
    * class Collab calls new Portal
  * Main.tsx: const [collabAPI] = useAtom(collabAPIAtom);
  * firebase.ts: saveToFirebase() takes a portal argument

How is stuff saved to firebase?

* Main: onChange =>
  * Collab.syncElements
    * Collab.queueSaveToFirebase : queueSaveToFirebase = throttle(
      * Collab.saveCollabRoomToFirebase

# Notes

## 4/24

* add roll - done
* try hosting
  * can we test prod locally?
  * deploy

## 4/23

* test syncing - works in dev
