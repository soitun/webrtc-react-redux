import * as types from '../constants/actionTypes'
import rtc from '../util/configureRtc'

export function setClient (payload) {
  return {
    type: types.SET_CLIENT,
    client: payload
  }
}

export function readyToCall () {
  return {
    type: types.READY_TO_CALL
  }
}

export function joinRoom (room) {
  rtc.on('joinedRoom', () => {
    rtc.sendDirectlyToAll(room, 'peerConnected', 'someone' + Math.random())
  })
  rtc.joinRoom(room)
  return {
    type: types.JOIN_ROOM
  }
}

export function panic (payload) {
  return {
    type: types.PANIC,
    message: payload
  }
}

export function roomJoined (payload) {
  return {
    type: types.ROOM_JOINED,
    message: payload
  }
}

export function peerDisconnected () {
  return {
    type: types.PEER_DISCONNECTED
  }
}

export function peerChangedName (payload) {
  return {
    type: types.PEER_CHANGED_NAME,
    peer: payload
  }
}

export function peerConnected () {
  return {
    type: types.PEER_CONNECTED
  }
}

export function chatMessage () {
  return {
    type: types.CHAT_MESSAGE,
    message: payload
  }
}
