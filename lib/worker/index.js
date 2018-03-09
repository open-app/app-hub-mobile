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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const self_1 = require("@staltz/react-native-workers/self");
const defaults_1 = require("../ssb/defaults");
const manifest_client_1 = require("../ssb/manifest-client");
const ssbKeys = require('react-native-ssb-client-keys');
const pull = require('pull-stream');
const muxrpc = require('muxrpc');
const Config = require('ssb-config/inject');
const MultiServer = require('multiserver');
const workerPlugin = require('multiserver-worker');
const createClient = require('ssb-client');
const ms = MultiServer([workerPlugin({ worker: self_1.self })]);
const keysPromise = new Promise((resolve, reject) => {
    ssbKeys.loadOrCreate(defaults_1.ssbKeysPath, (err, keys) => {
        if (err) {
            reject(err);
        }
        else if (keys) {
            resolve(keys);
        }
    });
});
function sleep(period) {
    return new Promise(resolve => {
        setTimeout(resolve, period);
    });
}
const ssbClientPromise = keysPromise.then(function setupSSBClient(keys) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = Config('ssb');
        config.path = defaults_1.ssbPath;
        config.keys = keys;
        config.manifest = manifest_client_1.manifest;
        let ssbClient = null;
        do {
            try {
                ssbClient = yield new Promise((resolve, reject) => {
                    createClient(keys, config, (err, sbot) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(sbot);
                        }
                    });
                });
            }
            catch (err) {
                yield sleep(200);
            }
        } while (ssbClient === null);
        return ssbClient;
    });
});
ms.server((stream) => {
    ssbClientPromise.then(ssbClient => {
        const codec = (x) => x;
        const server = muxrpc(null, manifest_client_1.manifest, codec)(ssbClient);
        pull(stream, server.createStream(), stream);
    });
});
//# sourceMappingURL=index.js.map