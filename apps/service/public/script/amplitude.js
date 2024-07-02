window.amplitude
  .add(window.sessionReplay.plugin({ sampleRate: 1 }))
  .promise.then(function () {
    window.amplitude.add(window.amplitudeAutocapturePlugin.plugin())
    window.amplitude.init('a1b0a524228e95c928b1c473fc5a18d')
  })
