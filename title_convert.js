#!/usr/bin/env node

function noSpaceConvert(args) {
  let modifiedTitle = args.replace(/\W+/g, "_");
  return modifiedTitle;
}

function titleCaseConvert(args) {
  let modifiedTitle = args.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return modifiedTitle;
}

function sentenceCaseConvert(args) {
  let modifiedTitle =
    args.charAt(0).toUpperCase() + args.substr(1).toLowerCase();
  return modifiedTitle;
}

function help(args) {
  console.error("Unknow argument");
  console.error("use --nospace, --titlecase, --sentencecase");
  return null;
}

function main() {
  const args = require("args-parser")(process.argv);
  let title;

  if (args.nospace) {
    title = noSpaceConvert(args.nospace.toLowerCase());
  } else if (args.titlecase) {
    title = titleCaseConvert(args.titlecase);
  } else if (args.sentencecase) {
    title = sentenceCaseConvert(args.sentencecase);
  } else {
    title = help(args);
  }

  if (title != null) {
    console.log(title);
  }
}

main();
