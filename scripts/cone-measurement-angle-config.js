Hooks.on("init", () => {
  game.settings.register("cone-measurement-angle", "coneAngle", {
    name: "Cone Measurement Angle",
    hint: "Angle for cone measurement tool. Must be an number between 1 and 360. Default 90.",
    scope: "world",
    config: true,
    type: number,
    default: 90
  })
  
  CONFIG.MeasuredTemplate.defaults.angle = game.settings.get("cone-measurement-angle","coneAngle");
})

Hooks.on("closeSettingsConfig", () => {

  if (game.settings.get("cone-measurement-angle", "coneAngle") > 360 || game.settings.get("cone-measurement-angle", "coneAngle") < 1) {
    game.settings.set("cone-measurement-angle", "coneAngle",90);
    CONFIG.MeasuredTemplate.defaults.angle = 90;
  } else {
    CONFIG.MeasuredTemplate.defaults.angle = game.settings.get("cone-measurement-angle", "coneAngle");
  }
})
