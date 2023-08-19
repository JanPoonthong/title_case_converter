function titleConvert(args) {
  let modifiedTitle = args.replace(/\W+/g, "_");
  return modifiedTitle;
}

function main() {
  const args = process.argv.slice(2);
  const title = titleConvert(args[0].toLowerCase());
  console.log(title);
}

main();
