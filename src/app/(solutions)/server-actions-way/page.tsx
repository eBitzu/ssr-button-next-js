import { cookies } from 'next/headers';
import { SeverFunction } from '../../../actions';
import { fetchData } from '../../../utils/fetch-name';
import { ServerActionPre } from './constants';
import { contentfulClient } from '../../../env/contentful/contentful.client';
import { ButtonTitleEntryId } from '../../../env/contentful/contentful.constants';

export default async function Solution2() {
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  const data = await fetchData();
  const color = (await cookies()).get('x-color')?.value ?? 'blue';
  return (
    <>
      <form action={SeverFunction}>
        <input type="hidden" value={color} name="color" />
        <button
          title={title.fields.ctaLabel as string}
          type="submit"
          className={`bg-${color}-500`}
        >
          with RS action - {data}
        </button>
      </form>
      <pre>{ServerActionPre}</pre>
    </>
  );
}
