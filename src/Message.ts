/*
 *  Space - A package manager for Linux.
 *  Copyright (C) 2022 Sora Tonami
 *
 *  This file is part of Space.
 *
 *  Space is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Space is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Space.  If not, see <https://www.gnu.org/licenses/>.
 */

'use strict';

import { existsSync, readFileSync } from 'fs';

type langFile = {
    msgs: {[key: string]: string}
};

class Message {
    static data: langFile;

    static getMessage(id: string): string {
        if(Message.data.msgs[id] === undefined) {
            console.error('Error: No such localized message');
            process.exit(5);
        }
        return Message.data.msgs[id]!;
    }

    static init(lang: string): number {
        const currDir = __dirname;
        if(!existsSync(`${currDir}/../lang/${lang}.lang`)) {
            console.error('Error: No such lang file');
            return 6;
        }
        let langFile = readFileSync(`${currDir}/../lang/${lang}.lang`);
        Message.data = JSON.parse(langFile);
        if(!('msgs' in Message.data)) {
            console.error('Error: Invalid lang file');
            return 7;
        }
        return 0;
    }
}

export { Message };

