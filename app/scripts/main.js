Reveal.initialize({
  controls: false,
  history: true,
  transition: 'convex',

  dependencies: [
    { src: 'scripts/reveal/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ]
});