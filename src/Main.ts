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

import { Msg } from './Msg';
import { Option } from './Option';
import type { Options } from './Option';

const Getopt: any = require('node-getopt');
const os: any = require('os');

export const ENV_LANG: string = process.env['LANG'] !== undefined && process.env['LANG'] !== 'C' ? process.env['LANG'] : 'en_US';
export const VERSION: string = process.env['npm_package_version'] || require('../package.json').version;

export default class Main {
    main(): number {
        if(os.type().toString() === 'Windows') {
            console.error('Error: Windows is not supported');
            return 2;
        }
        Msg.init(ENV_LANG.split('.')[0]);
        const cmds: string[] = [
            `  find     ${Msg.getMessage('cmd.find')}`,
            `  help     ${Msg.getMessage('cmd.help')}`,
            `  install  ${Msg.getMessage('cmd.install')}`,
            `  sync     ${Msg.getMessage('cmd.sync')}`,
            `  upgrade  ${Msg.getMessage('cmd.upgrade')}`,
            `  version  ${Msg.getMessage('cmd.version')}`
        ];
        const getopt: any = Getopt.create([
            ['y', 'yes', Msg.getMessage('opt.yes')]
        ]).bindHelp().setHelp(Msg.getMessage('usage').replace(/\$\$COMMANDS\$\$/g, cmds.join('\n'))).parseSystem();
        let opts: Options = Option.init();
        for(const opt of getopt.options) {
            switch(opt) {
                case 'y':
                    opts.y = true;
                    break;
                default:
                    console.error(Msg.getMessage('err.invalid_option'));
                    return 3;
            }
        }
        if(!getopt.argv) {
            console.error(Msg.getMessage('err.invalid_command'));
            return 4;
        }
        switch(getopt.argv[0]) {
            case 'find':
                break;
            case 'help':
                getopt.showHelp();
                break;
            case 'install':
                break;
            case 'sync':
                break;
            case 'upgrade':
                break;
            case 'version':
                break;
            default:
                console.error(Msg.getMessage('err.invalid_command'));
                return 4;
        }
        return 0;
    }
}

const exitCode: number = Main.main();
process.exit(exitCode);

