import Koa from 'koa';
import config from './config';
import log4js from 'log4js';
import errorHeadler from "./middlewares/errorHandler";
const app = new Koa();


// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

log4js.configure({
  appenders: { cheese: { type: 'file', filename: __dirname+'/logs/yd.log'} },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
errorHeadler.error(app,logger);



app.listen(config.port,()=>{
  console.log(`${config.port}`);
});
