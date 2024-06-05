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

function main() {
  const args = require("args-parser")(process.argv);
  let title;

  if (args.nospace) {
    title = noSpaceConvert(args.nospace.toLowerCase());
  } else if (args.titlecase) {
    title = titleCaseConvert(args.titlecase);
  } else if (args.sentencecase) {
    title = sentenceCaseConvert(args.sentencecase);
  }

  console.log(title);
}

main();
