export default {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.service = serverless.service;
    this.options = options;
    this.commands = {
      ses: {
        commands: {
          start: {
            lifecycleEvents: ['startHandler'],
            options: {
              port: {
                shortcut: 'p',
                usage: 'Specify port for server to run on, default is 9001'
              },
            }
          }
        }
      }
    }
    this.hooks = {
      'ses:start:startHandler': this.startHandler.bind(this),
    }
  }
  startHandler() {
    
  }
}