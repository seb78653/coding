let Light_intensity = 0
MuseIoT.initializeWifi()
MuseIoT.setWifi("ICT@605", "IloveICT")
basic.pause(5000)
basic.forever(function () {
    Light_intensity = input.lightLevel()
    MuseIoT.sendThingspeak(
    "25NW6EHTI9QL6CTT",
    Light_intensity,
    0,
    0
    )
    basic.pause(5000)
})
