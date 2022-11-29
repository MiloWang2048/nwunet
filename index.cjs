#!/usr/bin/env node

const { login } = require("./login.cjs");
const CronJob = require("cron").CronJob;

const { Command } = require("commander");
const program = new Command();

const pkg = require("./package.json");

program.name("nwunet").description(pkg.description).version(pkg.version);

program
  .requiredOption("-u, --username <string>", "nwunet username")
  .requiredOption("-p, --password <string>", "nwunet password")
  .option("-c, --cron <cron_expr>", "run with cron expression")
  .action((options, cmd) => {
    login(options.username, options.password);
    if (options.cron) {
      const cron = new CronJob(options.cron, () => {
        login(options.username, options.password);
      });
      cron.start();
    }
  });

program.parse();
