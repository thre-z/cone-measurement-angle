Hooks.on("init", () => {
  game.settings.register("cone-measurement-angle", "coneAngle", {
    name: "Cone Measurement Angle",
    hint: "Default angle for cone measurement tool.",
    scope: "world",
    config: true,
    type: Integer,
    default: 90
  })
})

class DDImporter extends Application
{

  CONFIG.MeasuredTemplate.defaults.angle = 90;

}
