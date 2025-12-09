export const FormActionPre = `
// with React server actions - experimental
export async function Solution3Page() {
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  const data = await fetchData();
  const color = (await cookies()).get('x-color')?.value ?? 'blue';
  return (<>
     <form>
      <input type="hidden" value={color} name="color" />
      <button
        title={title.fields.ctaLabel as string}
        formAction={SeverFunction2}
        className={\`bg-\${color}-500\`}
      >
        with RS form action - {data}
      </button>
    </form>
    <pre/>
  </>);
}`
