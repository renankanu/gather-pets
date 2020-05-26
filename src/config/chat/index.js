import firebase from 'firebase';
import {firebaseDatabase} from '../../config/firebase';

class ChatConfig {
  uid = '0';

  messagesRef = null;

  userName = null;

  changeValue = null;

  setUid(value) {
    this.uid = value;
  }

  getUid() {
    return this.uid;
  }

  createChat() {
    this.refChat = firebaseDatabase.ref(`chats/${this.uid}`);
  }

  sendImageFirestoge(image) {
    console.log('-----', image)
  }

  sendUpload(message) {
    this.messagesRef.push({
      isSystem: false,
      message: '',
      image: message.image,
      targetName: message.user.name,
      targetId: message.user._id,
      dataSend: firebase.database.ServerValue.TIMESTAMP,
    });
  }

  loadMessages(callback) {
    this.messagesRef = firebaseDatabase.ref(`chats/${this.uid}/messages`);

    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      console.log(message);

      callback({
        _id: data.key,
        text: message.message,
        system: message.isSystem,
        image: message.image || null,
        createdAt: new Date(message.dataSend),
        user: {
          _id: message.targetId,
          name: message.targetName,
        },
      });
    };
    this.messagesRef.on('child_added', onReceive);
  }

  sendMessage(messages) {
    messages.forEach((message) => {
      console.log(message);
      this.messagesRef.push({
        isSystem: false,
        message: message.text,
        targetId: message.user._id,
        targetName: message.user.name,
        dataSend: firebase.database.ServerValue.TIMESTAMP,
      });
    });
  }

  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new ChatConfig();
