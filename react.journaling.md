- React.Component no longer support children props as default so it broke the HelmetProvider of react-helmet-async
> file an issue to react-helmet-async and read the migration to React 18 doc

- To truly copy dependencies of a running project, copy the yarn.lock also to make sure the ^ notation in package.json do not give new repo a different version of that package

- ReactNode is the most universal type when it comes to choose a ReactComponent props

```typescript
// https://github.com/DefinitelyTyped/DefinitelyTyped.git/blob/main/node_modules/@types/react/index.d.ts#L237
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
```

- Make UI with code from pancakeswap-frontend and old daga-marketplace, it sucks to switch design :tired:
```
- Pancake has two themes set up but they are in sync from next-theme and styled-components, don't know why
- They still use views as layout composing, pages folder serve merely for page routing
- I found it very hard to concentrate and to make derivative contribution (such as reporting error to repo, make tweet from some new tricks and tips) while doing the main task. I might make sense to have a MD workspace to all these for me :cry
```

