import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

/**
 * @function
 * @name ControlsIncrease
 * @description controls: create the `increase` sub component
 * @returns {HTMLSpanElement} - increase HTML span element
 */
export function ControlsIncrease () {

    const up = document.createElement ('span')

    up.innerHTML = 'up'

    up.style = 'cursor: pointer;'

    up.onclick = async () => {

        const state = await State ()

        if (state.isActive) {

            await StateSet ('speed', state.speed + state.step)

        }

    }

    return up

}