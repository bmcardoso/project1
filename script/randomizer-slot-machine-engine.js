class RandomizerSlotMachineEngine {

    constructor() {
        this.slotMachines = [];
    }

    init() {
        this.slotMachines.push(this._registerSlotMachine('#perk-slot1', 1));
        this.slotMachines.push(this._registerSlotMachine('#perk-slot2', 2));
        this.slotMachines.push(this._registerSlotMachine('#perk-slot3', 3));
        this.slotMachines.push(this._registerSlotMachine('#perk-slot4', 4));
    }

    _registerSlotMachine(selector, active) {
        return new SlotMachine(document.querySelector(selector), {
            active: active,
            delay: 500,
            spins: 5
        });
    }

    shuffle() {
        this.slotMachines.forEach(function (slotMachine) {
            slotMachine.shuffle();
        });
    }
}