Package.describe({
  summary: "Add colors to strings using Colors.js",
  version: "1.0.3",
  name: "nooitaf:colors",
  git: "https://github.com/nooitaf/meteor-colors.git"
});

Npm.depends({
  "colors": "1.0.3"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  if(api.export) api.export('colors','server');
  api.add_files('export-colors.js', 'server');
});
