export const ServerActionPre = `
// with React server actions - experimental
export async function Solution2() {
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  const data = await fetchData();
  const color = (await cookies()).get('x-color')?.value ?? 'blue';
  return (<>
    <form action={SeverFunction}>
      <input type="hidden" value={color} name="color" />
      <button
        type="submit"
        className={\`bg-\${color}-500\`}
      >
        with RS action - {data}
      </button>
    </form>
    <pre/>
  </>);
}`
