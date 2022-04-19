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

- Please try to fix `localStorage?.setItem(serializedKey, stringify) -> ReferenceError: localStorage is not defined`
```
localStorage as a part of window var is not available on server side, it only available for the first time in useEffect hook (didMount event for e.g.) only by then dev can access localStorage. this somehow make the code not highly reusable because after didMount run, render function can access this localStorage as well. Reuse a part of the code might lead to error where render is called on server before the (didMount is triggered). 
Best way to do this is to add a layer of defense
if (typeof window !== undefined) { // Run logic that need to access Local storage}
```

- Make NFT inventory available today
```
- Should I copy the code or should I just take what I need? -> maybe the latter
- On sale pancake squad will not be available even in the UI due to Subgraph avoiding
- SWR is really an advanced concept and it must be learned
- Please fix the none nft retrieve lead to loading grid placeholder or not include the profile pic -> add the fetchStatusMiddleware in the SWRConfig of _app solved this
```

- redux-persist really help pancakeswap dodge a big bullet while not caring about whether the render is at ser or cli. Almost all logic run when the persist gate done loaded so it all happening in client side
```
Using a simple tip from this noble man do the job: https://flaviocopes.com/nextjs-server-client-code/
```

- _documents come with styled-component guide is needed to power css-in-js in the server side. Ref: https://styled-components.com/docs/advanced#nextjs
