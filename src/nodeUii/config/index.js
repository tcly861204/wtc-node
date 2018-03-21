import _ from 'lodash';
let config = {
  "env":process.env.NODE_ENV
};

/* 开发环境 */
if(process.env.NODE_ENV=='development'){
  const localConfig = {
    port:3000
  };
  config = _.extend(config,localConfig);
}
/* 生产环境 */
if(process.env.NODE_ENV=='production'){
  const proConfig = {
    port:80
  };
  config = _.extend(config,proConfig);
}
export default config;