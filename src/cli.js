import arg from "arg";

function parseArgumentsIntoOptions(rowArgs) {
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y":  "--yes",
      "-i": "--install"
    },
    {
      argv: rowArgs.slice(2),
    }
  );

  console.log("args", args["--git"]);
  return {
    skipPrompts: args["--yes"],
  };
}

export function cli(args) {
  //   console.log("args", args);
  parseArgumentsIntoOptions(args);
}
