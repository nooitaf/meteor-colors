Package.describe({
  summary: "Add colors to strings",
  version: "0.0.2",
  name: "nooitaf:colors",
  git: "https://github.com/nooitaf/meteor-colors.git"
});

Npm.depends({
  "colors": "0.6.2"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');
  if(api.export) api.export('colors','server');
  api.add_files('export-colors.js', 'server');
});
