import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSecret } from '@/sanity/utils/getSecret';
import { client } from '@/sanity/client';
import { previewSecretId, sanityReadToken } from '@/environment';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return new Response('Missing slug', { status: 400 });
  }

  const secret = await getSecret(client.withConfig({ useCdn: false, token: sanityReadToken }), previewSecretId);
  const requestSecret = searchParams.get('secret');

  if (!requestSecret) {
    return new Response('Missing secret', { status: 400 });
  }

  if (requestSecret !== secret) {
    return new Response('Invalid secret', { status: 401 });
  }

  const draft = draftMode();

  draft.enable();

  return redirect(slug.length > 1 ? `/${slug}` : '/');
}
