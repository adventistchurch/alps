import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import css from 'rollup-plugin-import-css';
import scss from 'rollup-plugin-scss';

import packageJson from "./package.json";
import {readdirSync, statSync} from "fs";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";

const CODES = [
    'THIS_IS_UNDEFINED',
    'MISSING_GLOBAL_NAME',
    'CIRCULAR_DEPENDENCY',
]

const excludePaths = [
    '.stories.tsx', // Storybook stories
    'global', // global classes configuration
    'atoms/icons/library', // Icons in library
    'helpers/renderTimes', // not used
]

function shouldIncludePath(path) {
    for (const excludePath of excludePaths) {
        if (path.includes(excludePath)) return false
    }

    return true
}

/**
 * Returns files and subfolder as an array from a starting folder
 *
 * @param {String} dir Starting directory/folder
 */
const walkFolder = dir => {
    var results = []
    var list = readdirSync(dir)
    list.forEach(function (file) {
        file = `${dir}/${file}`

        var stat = statSync(file)

        if (stat && stat.isDirectory()) {
            // Recurse into a subdirectory
            results = results.concat(walkFolder(file))
        } else {
            // Is a file
            results.push(file)
        }
    })

    return results
}

/**
 * Returns an object with chunks information (name and source)
 *
 * Output example:
 * { 'components/buttons/Button': 'src/components/buttons/Button.tsx', ... }
 *
 * @param {String} URI Starting directory/folder
 */
const getChunks = URI =>
    walkFolder(URI)
        .filter(path => path.includes('.tsx', '.svg', '.png') && shouldIncludePath(path))
        .reduce(
            (acc, current) => ({
                ...acc,
                [current.replace('.tsx', '').replace(`${URI}/`, '')]: `${current}`,
            }),
            {}
        )

/**
 * Discards some warnings (defined in CODES)
 *
 * @param {Object} warning
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const discardWarning = warning => {
    if (CODES.includes(warning.code)) {
        return
    }
    console.error(warning) // eslint-disable-line no-console
}

export default {
    onwarn: discardWarning,
    input: getChunks('src'),
    output: [
        {
            dir: packageJson.main,
            format: "cjs",
            exports: 'named',
            sourcemap: true
        },
        {
            dir: packageJson.module,
            format: "esm",
            sourcemap: true,
        }
    ],
    plugins: [
        del({ targets: ['dist/cjs', 'dist/esm'] }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        css(),
        scss(),
        image(),
        json()
    ]
};