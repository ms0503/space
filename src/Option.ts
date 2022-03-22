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

type Options = {
    y: boolean
};

class Option {
    static init(): Options {
        return {
            y: false
        };
    }
}

export { Option };
export type { Options };

