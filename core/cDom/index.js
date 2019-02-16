import create from './create.js'
import { add, remove } from './event.js'
import mount from './mount.js'
import replace from './replace.js'
import update from './update.js'
import render from './render.js'


export default  {
    createEl: create,
    updateEl: update,
    mountEl: mount,
    replaceEl: replace,
    renderEl: render,
    addEvent: add,
    removeEvent: remove
};