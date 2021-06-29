const domainName = (url) =>
  url
    .split("/")
    .find((urlSearched) => urlSearched.includes("."))
    .split(".")
    .find((domain) => !domain.startsWith("www"));
