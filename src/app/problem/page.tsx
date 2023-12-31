import { ClientButton } from '../../components/button.client';
import { contentfulClient } from '../../env/contentful/contentful.client';
import { ButtonTitleEntryId } from '../../env/contentful/contentful.constants';
import { fetchData } from '../../utils/fetch-name';
import { inlinePre } from './constants';

export default async function TheReactWay() {
  const data = await fetchData({cache: 'no-cache'});
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  return (
    <>
      <ClientButton data={data} title={title.fields.ctaLabel as string} />
      <pre>{inlinePre}</pre>
    </>
  );
}
