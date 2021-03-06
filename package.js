Package.describe({
  summary: "Add colors to strings using Colors.js",
  version: "1.1.2_1",
  name: "nooitaf:colors",
  git: "https://github.com/nooitaf/meteor-colors.git"
});

Npm.depends({
  "colors": "1.1.2"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.export('colors', 'server');
  api.add_files('export.js', 'server');
});
