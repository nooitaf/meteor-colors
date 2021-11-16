Package.describe({
  summary: "Add colors to strings using Colors.js",
  version: "1.2.0",
  name: "nooitaf:colors",
  git: "https://github.com/nooitaf/meteor-colors.git"
});

Npm.depends({
  "colors": "1.1.2"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.export('colors', 'server');
  api.addFiles('export.js', 'server');
});
