const errorHeadler = {
  error(app,log4js){
    app.use(async(ctx,next)=>{
      await next();
      if(404!=ctx.status) return;
      ctx.status = 404;
      log4js.error("页面丢了");
      ctx.body = "页面丢了";
    });
  }
}
export default errorHeadler;