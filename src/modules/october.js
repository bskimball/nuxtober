module.exports = function() {
  this.nuxt.hook("generate:page", ctx => {
    let pageTitle = ctx.html.match(/<title data-n-head="true">(.*?)<\/title>/)
    let title = `title = "${pageTitle[1]}"`;
    let url = `url = "${ctx.route}"`;
    let onStart = `function onStart() { $this['token'] = \\Session::token(); }`
    let divider = `==`
    ctx.html = `${title}\n${url}\n${divider}\n${onStart}\n${divider}\n${ctx.html}`
    ctx.path = ctx.path.replace("html", "htm");
  });
};
