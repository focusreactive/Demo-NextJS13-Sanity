import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const draft = draftMode();

  draft.disable();

  return redirect('/');
}
