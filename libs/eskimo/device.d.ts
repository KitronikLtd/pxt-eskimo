declare namespace pins {
    // Define aliases, as Digital Pins
    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: DigitalPin; // A
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: DigitalPin; // B
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const LED: DigitalPin;
}


declare namespace input {
    /**
     * Left button.
     */
    //% indexedInstanceNS=input indexedInstanceShim=pxt::getButton
    //% block="button A" weight=95 fixedInstance
    //% shim=pxt::getButton(0)
    const buttonA: Button;

    /**
     * Right button.
     */
    //% block="button B" weight=94 fixedInstance
    //% shim=pxt::getButton(1)
    const buttonB: Button;

    /**
     * Left and Right button.
     */
    //% block="buttons A+B" weight=93 fixedInstance
    //% shim=pxt::getButton(2)
    const buttonsAB: Button;
}
