- React.Component no longer support children props as default so it broke the HelmetProvider of react-helmet-async
> file an issue to react-helmet-async and read the migration to React 18 doc

- To truly copy dependencies of a running project, copy the yarn.lock also to make sure the ^ notation in package.json do not give new repo a different version of that package

- ReactNode is the most universal type when it comes to choose a ReactComponent props

```typescript
// https://github.com/DefinitelyTyped/DefinitelyTyped.git/blob/main/node_modules/@types/react/index.d.ts#L237
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
```

