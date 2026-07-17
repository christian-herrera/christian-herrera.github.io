import fs from "fs";

fs.copyFileSync("docs/index.html", "docs/404.html");

console.log("HTML: 404.html creado correctamente!");