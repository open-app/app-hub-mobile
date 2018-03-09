"use strict";
/**
 * MMMMM is a mobile app for Secure Scuttlebutt networks
 *
 * Copyright (C) 2017 Andre 'Staltz' Medeiros
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isMsg(msg) {
    return msg && msg.key && msg.value && typeof msg.value === 'object';
}
exports.isMsg = isMsg;
function isPostMsg(msg) {
    return msg.value.content && msg.value.content.type === 'post';
}
exports.isPostMsg = isPostMsg;
function isAboutMsg(msg) {
    return (msg.value.content &&
        msg.value.content.type === 'about' &&
        (typeof msg.value.content.name === 'string' ||
            typeof msg.value.content.description === 'string' ||
            typeof msg.value.content.image === 'string'));
}
exports.isAboutMsg = isAboutMsg;
function isContactMsg(msg) {
    return msg.value.content && msg.value.content.type === 'contact';
}
exports.isContactMsg = isContactMsg;
function isVoteMsg(msg) {
    return msg.value.content && msg.value.content.type === 'vote';
}
exports.isVoteMsg = isVoteMsg;
function isPrivate(msg) {
    return msg.value.content && typeof msg.value.content === 'string';
}
exports.isPrivate = isPrivate;
// { type: 'post-edit', text: String, root: MsgLink, revisionRoot: MsgLink, revisionBranch: MsgLink, mentions: Links }
// { type: 'vote', vote: { link: Ref, value: -1|0|1, reason: String } }
// { type: 'pub', pub: { link: FeedRef, host: String, port: Number  }
//# sourceMappingURL=types.js.map