const fsExtra = require("fs-extra");
const path = require("path");

module.exports = function() {
  this.nuxt.hook("generate:before", async nuxt => {
    nuxt.distPath = (await process.cwd()) + "\\pages";
    nuxt.distNuxtPath = (await process.cwd()) + "\\assets\\";
  });
  this.nuxt.hook("generate:distRemoved", async nuxt => {
    await fsExtra.remove(nuxt.distNuxtPath);
    const nojekyllPath = await path.resolve(nuxt.distPath, ".nojekyll");
    await fsExtra.createFile(nojekyllPath);
  });
  this.nuxt.hook("generate:page", async ctx => {
    let pageTitle = ctx.html.match(/<title data-n-head="true">(.*?)<\/title>/);
    let title = `title = "${pageTitle[1]}"`;
    let url = `url = "${ctx.route}"`;
    let onStart = `function onStart() { $this['token'] = \\Session::token(); }`;
    let divider = `==`;
    ctx.html = `${title}\n${url}\n${divider}\n${onStart}\n${divider}\n${
      ctx.html
    }`;
    ctx.path = ctx.path.replace("html", "htm");
  });
};
