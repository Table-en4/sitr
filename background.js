browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  {
    urls: [
      "*://friends.42paris.fr/*dimohame.jpg*",
      "*://friends.42paris.fr/*medium_dimohame.jpg*",
      "*://friends.42paris.fr/proxy/*medium_dimohame.jpg*",
      "*://cdn.intra.42.fr/users/*dimohame.jpg*"
    ],
    types: ["image"]
  },
  ["blocking"]
);