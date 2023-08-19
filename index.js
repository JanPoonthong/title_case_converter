function titleConvert(args) {
  let title = args;
  title = args.replace(/ /g, "_");
  title = title.replace("|", "_");
  return title;
}

function main() {
  const args = process.argv.slice(2);
  const title = titleConvert(args[0]);
  console.log(title);
}

main();
