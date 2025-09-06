ServerEvents.recipes(event => {
    event.remove({output: "hangglider:glider_framework"})
    event.remove({output: "hangglider:glider_wing"})
    event.shaped("hangglider:glider_framework", [
        " A ",
        "BCB",
        "CDC"
    ], {
        A: "gtceu:iron_screwdriver",
        B: "gtceu:iron_screw",
        C: "gtceu:long_iron_rod",
        D: "gtceu:iron_hammer"
    })

    event.shaped("hangglider:glider_wing", [
        "ABC",
        "DED",
        "EEE"
    ], {
        A: "gtceu:iron_hammer",
        B: "gtceu:long_iron_rod",
        C: "gtceu:iron_screwdriver",
        D: "gtceu:iron_screw",
        E: "minecraft:leather"
    })
})