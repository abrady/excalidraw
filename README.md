
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

Hosting notes:

* a buddy said to use EBS - elastic beanstalk
* okay, got an instance running with their test app. Some links:
  * <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.container.html>
  * <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html>

## 4/23

* test syncing - works in dev
