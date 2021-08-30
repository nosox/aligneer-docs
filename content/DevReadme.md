# Devlopment Notes for Aligneer Docs

## Aligneer Documentation Site

Manual fix -- change node-modules/postcss/package.json to the following to remove Use of deprecated folder mapping "./" in the "exports" field warning:

  "exports": {
    ".": {
      "require": "./lib/postcss.js",
      "import": "./lib/postcss.mjs",
      "types": "./lib/postcss.d.ts"
    },
    "./*": "./*"

# Dev Notes over time

## 2021-0829 Notes

* Cloned Gatsbyjs starter template based upon Hasura doc's. See [gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter)
* Hasura uses buildkite.com tech's CI/CD pipelines
* See https://github.com/hasura/graphql2chartjs for visualization capabilities
* See https://github.com/hasura/demo-apps for Docker Compose demo guidance