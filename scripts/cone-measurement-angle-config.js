Hooks.on("init", () => {
  game.settings.register("cone-measurement-angle", "coneAngle", {
    name: "Cone Measurement Angle",
    hint: "Default angle for cone measurement tool.",
    scope: "world",
    config: true,
    type: Integer,
    default: 90
  })
  
  CONFIG.MeasuredTemplate.defaults.angle = game.settings.get("cone-measurement-angle","coneAngle");
})

Hooks.on("closeSettingsConfig", () => {

  if (game.settings.get("cone-measurement-angle","coneAngle") > 360 || game.settings.get("cone-measurement-angle","coneAngle") < 1) {
    game.settings.set("cone-measurement-angle","coneAngle",90);
    CONFIG.MeasuredTemplate.defaults.angle = 90;
  } else {
    CONFIG.MeasuredTemplate.defaults.angle = game.settings.get("cone-measurement-angle","coneAngle");
  }
})
