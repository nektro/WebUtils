/**
 */
//
import { hex_to_rgba } from "./hex_to_rgba.js";
import { array_to_object } from "./array_to_object.js";
//
export class Color {
    constructor(hex) {
        Object.assign(this, array_to_object(['red','green','blue','alpha'], hex_to_rgba(hex)));
    }
}
