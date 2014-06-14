Package.describe({
  summary: "Add colors to strings"
});

Npm.depends({
  "colors": "0.6.2"
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('colors','server');
  }
  api.add_files('export-colors.js', 'server');
});
