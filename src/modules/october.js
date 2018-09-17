const fsExtra = require("fs-extra");

module.exports = function() {
  this.nuxt.hook("generate:before", async nuxt => {
    nuxt.distNuxtPath = process.cwd() + "\\assets\\";
  });
  this.nuxt.hook("generate:distRemoved", async nuxt => {
    await fsExtra.remove(nuxt.distNuxtPath);
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
